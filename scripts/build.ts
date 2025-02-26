import { execSync } from "child_process"
import { copySync, ensureDirSync, emptyDirSync } from "fs-extra"
import { join } from "path"

// 项目根目录路径
const rootDir = process.cwd()
// React 应用目录
const reactAppDir = join(rootDir, "apps/react")
// Hono 应用目录
const honoAppDir = join(rootDir, "apps/hono")
// React 构建输出目录
const reactDistDir = join(reactAppDir, "dist")
// Hono 公共目录
const honoPublicDir = join(honoAppDir, "public")

console.log("🚀 开始构建流程...")

try {
  // 步骤 1: 构建 React 应用
  console.log("📦 步骤 1: 构建 React 应用...")
  execSync("pnpm run build", {
    cwd: reactAppDir,
    stdio: "inherit",
  })
  console.log("✅ React 应用构建完成")

  // 步骤 2: 复制 React 构建产物到 Hono 的 public 目录
  console.log("📂 步骤 2: 复制构建产物到 Hono public 目录...")
  // 确保目标目录存在并清空
  ensureDirSync(honoPublicDir)
  emptyDirSync(honoPublicDir)
  // 复制文件
  copySync(reactDistDir, honoPublicDir, {
    overwrite: true,
  })
  console.log("✅ 文件复制完成")

  // 步骤 3: 部署 Hono 应用
  console.log("🚀 步骤 3: 部署 Hono 应用...")
  execSync("pnpm run deploy", {
    cwd: honoAppDir,
    stdio: "inherit",
  })
  console.log("✅ Hono 应用部署完成")

  console.log("🎉 所有步骤已成功完成!")
} catch (error) {
  console.error("❌ 构建过程中出现错误:", error)
  process.exit(1)
}
