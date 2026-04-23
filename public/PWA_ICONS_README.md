# PWA 图标说明

当前 `pwa-192x192.png` 和 `pwa-512x512.png` 是占位文件。

## 生成真实的 PWA 图标

### 方法 1：使用在线工具
1. 访问 https://realfavicongenerator.net/
2. 上传 `pwa-icon-template.svg` 或你的 Logo
3. 下载生成的图标文件
4. 将 `android-chrome-192x192.png` 重命名为 `pwa-192x192.png`
5. 将 `android-chrome-512x512.png` 重命名为 `pwa-512x512.png`
6. 替换 `docs/public/` 目录中的占位文件

### 方法 2：使用 ImageMagick
```bash
# 安装 ImageMagick
brew install imagemagick  # macOS
# apt install imagemagick  # Ubuntu

# 生成 PNG 图标
convert -background none pwa-icon-template.svg -resize 192x192 pwa-192x192.png
convert -background none pwa-icon-template.svg -resize 512x512 pwa-512x512.png

# 移动到 public 目录
mv pwa-*.png docs/public/
```

### 方法 3：使用 sharp (Node.js)
```bash
# 安装 sharp
pnpm add -D sharp

# 创建转换脚本
```
