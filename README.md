# 店铺投资计算器

这是一个用于计算店铺投资各项指标的网页应用，包含：
- 建店总成本计算
- 毛利率计算
- 盈亏平衡点计算
- 回本周期计算

## 部署指南

### 部署到 Vercel
1. 在GitHub创建新仓库
2. 将本项目文件上传到仓库
3. 访问 [Vercel](https://vercel.com/) 并登录
4. 点击"Add New" -> "Project"
5. 导入你的GitHub仓库
6. 保持默认设置，点击"Deploy"
7. 部署完成后会自动获得访问URL

### 部署到 Cloudflare Pages
1. 在GitHub创建新仓库
2. 将本项目文件上传到仓库
3. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
4. 选择"Workers & Pages"
5. 点击"Create application" -> "Pages" -> "Connect to Git"
6. 选择你的GitHub仓库
7. 配置设置：
   - 构建命令：留空
   - 构建输出目录：`/`
8. 点击"Save and Deploy"
9. 部署完成后会获得访问URL

## 使用说明
1. 在相应部分输入数据
2. 点击计算按钮获得结果
3. 各计算器结果相互关联（如毛利率用于盈亏平衡点计算）
