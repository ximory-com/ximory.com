# 部署指南 - Ximory Health Frontend

本文档详细说明如何将前端项目部署到GitHub并自动部署到Vercel。

## 🚀 快速部署步骤

### 第1步：上传到您的GitHub

1. **创建新仓库**
   - 登录您的GitHub账户
   - 点击右上角的 "+" → "New repository"
   - 仓库名称：`ximory-health-frontend`
   - 设置为 Public（公开）
   - 不要初始化README、.gitignore或license（我们已经准备好了）

2. **上传项目文件**
   ```bash
   # 方法1：使用GitHub网页界面
   # - 将所有文件拖拽到仓库页面
   # - 或使用 "uploading an existing file" 功能
   
   # 方法2：使用Git命令行（如果您有Git环境）
   git clone https://github.com/YOUR_USERNAME/ximory-health-frontend.git
   cd ximory-health-frontend
   # 将所有项目文件复制到这个目录
   git add .
   git commit -m "Initial commit: AI Health Assessment Frontend"
   git push origin main
   ```

### 第2步：连接Vercel自动部署

1. **访问Vercel**
   - 打开 [vercel.com](https://vercel.com)
   - 使用GitHub账户登录

2. **导入项目**
   - 点击 "New Project"
   - 选择 "Import Git Repository"
   - 找到 `ximory-health-frontend` 仓库
   - 点击 "Import"

3. **配置部署设置**
   - **Project Name**: `ximory-health-frontend`
   - **Framework Preset**: 选择 "Other" 或保持默认
   - **Root Directory**: `./` (默认)
   - **Build Command**: 留空（静态HTML项目）
   - **Output Directory**: 留空（使用根目录）
   - **Install Command**: 留空

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待1-2分钟完成部署
   - 获得永久访问地址

### 第3步：配置自定义域名（可选）

1. **在Vercel项目设置中**
   - 进入项目 → Settings → Domains
   - 添加您的域名（如：health.ximory.com）
   - 按照提示配置DNS记录

## 🔄 自动部署工作流程

```
代码修改 → 推送到GitHub → Vercel自动检测 → 重新部署 → 更新上线
```

### 自动触发条件
- ✅ 推送到main分支
- ✅ Pull Request合并
- ✅ 任何文件修改
- ✅ 配置文件更新

### 部署监控
- 📧 邮件通知部署状态
- 📱 Vercel控制台实时监控
- 🔗 每次部署的预览链接

## 📁 项目文件说明

```
ximory-health-frontend/
├── index.html          # 主页面文件
├── vercel.json         # Vercel部署配置
├── package.json        # 项目配置文件
├── README.md           # 项目说明文档
├── DEPLOYMENT.md       # 本部署指南
├── .gitignore          # Git忽略文件
└── .git/               # Git版本控制（上传后自动生成）
```

## 🛠️ 本地开发

```bash
# 克隆仓库
git clone https://github.com/YOUR_USERNAME/ximory-health-frontend.git
cd ximory-health-frontend

# 启动本地服务器
npm start
# 或
python3 -m http.server 8000

# 访问 http://localhost:8000
```

## 🔧 自定义配置

### 修改API地址
在 `index.html` 中找到：
```javascript
const API_BASE_URL = 'https://mzhyi8cdqyg0.manus.space/api';
```
修改为您的后端API地址。

### 修改品牌信息
- 公司名称：搜索 "心沐智康" 进行替换
- 联系邮箱：搜索 "@ximory.com" 进行替换
- Logo图片：替换 `logo_horizontal.png` 和 `logo_vertical.jpg`

## 🌐 环境变量配置

如果需要使用环境变量，在Vercel项目设置中添加：
- `VITE_API_BASE_URL`: 后端API地址
- `VITE_COMPANY_NAME`: 公司名称
- 其他自定义变量

## 📊 性能优化

### 已实现的优化
- ✅ CDN加速（Vercel自动提供）
- ✅ 响应式设计
- ✅ 图片懒加载
- ✅ CSS/JS压缩
- ✅ HTTPS安全

### 进一步优化建议
- 🔄 添加Service Worker（PWA）
- 📱 优化移动端性能
- 🖼️ 使用WebP格式图片
- 📈 添加Google Analytics

## 🐛 常见问题

### Q: 部署失败怎么办？
A: 检查以下几点：
- 确保所有文件都已上传
- 检查vercel.json配置是否正确
- 查看Vercel部署日志中的错误信息

### Q: 如何更新网站内容？
A: 直接修改GitHub仓库中的文件，Vercel会自动重新部署。

### Q: 可以使用自定义域名吗？
A: 可以，在Vercel项目设置中添加域名并配置DNS。

### Q: 如何查看访问统计？
A: Vercel提供基础的访问统计，或可集成Google Analytics。

## 📞 技术支持

如果遇到问题，可以：
- 查看Vercel官方文档
- 检查GitHub仓库的Issues
- 联系技术支持：support@ximory.com

---

**祝您部署顺利！** 🎉

