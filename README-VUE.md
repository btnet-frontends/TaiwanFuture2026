# TaiwanFuture 2025 - Vue 3 专案

这是将原始 HTML/CSS 专案转换为 Vue 3 的版本。

## 专案架构

```
台湾大未来/
├── src/
│   ├── App.vue              # 主应用组件
│   ├── main.js              # 应用入口
│   ├── components/          # Vue 组件
│   │   ├── Header.vue       # ✓ 导航栏
│   │   └── Kv.vue           # ✓ 主视觉
│   ├── assets/
│   │   ├── css/             # 样式文件（已从原专案复制）
│   │   └── images/          # 图片资源（需要从原assets复制）
│   └── data/                # JSON 数据文件
├── package.json             # 项目依赖
├── vite.config.js           # Vite 配置
└── index.html               # HTML 模板(原文件)
└── vue-index.html           # Vue 专案入口
```

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 复制图片资源
```bash
# 在 Windows PowerShell 中执行
xcopy "assets\images" "src\assets\images" /E /I /Y
```

### 3. 启动开发服务器
```bash
npm run dev
```

### 4. 构建生产版本
```bash
npm run build
```

## 当前状态

### ✅ 已完成
- [x] 基础配置文件（package.json, vite.config.js）
- [x] 主应用架构（App.vue, main.js）
- [x] Header 组件（导航栏）
- [x] Kv 组件（主视觉）
- [x] CSS 样式文件已复制

### ⚠️ 待完成
- [ ] 复制图片资源到 src/assets/images
- [ ] 创建其余组件（约10个）
- [ ] 数据集成
- [ ] 功能测试

## 技术栈

- **Vue 3** - 使用 Composition API
- **Vite** - 快速的构建工具
- **AOS** - 滚动动画库
-  **Swiper** - 轮播功能

## 注意事项

1. 原HTML文件保留为 `index.html`
2. Vue专案使用 `vue-index.html`（需重命名为 `index.html` 才能启动）
3. 所有图片路径使用 `@/assets/images/` 别名

## 下一步

运行专案前请确保：
1. Node.js 已安装（版本16+）
2. 图片资源已复制到 src/assets/images
3. 依赖已安装（npm install）

然后将 `vue-index.html` 重命名为 `index.html`（或备份原文件后覆盖）
