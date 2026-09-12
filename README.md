# Zihan Zhao · 个人网站

Apple 风格的个人写作与研究网站。纯静态 HTML / CSS / JavaScript，可直接部署到 GitHub Pages，无需安装依赖。

## 内容

- `index.html`：个人首页、作品入口、未来摄影栏目。
- `shinto.html`：依据作者提供的《最终版.pdf》整理的网页阅读版，收录摘要、正文、参考文献及文献概要，保留页码；不包含封面学号和致谢。
- `marriage.html`：2024 年青年婚姻率研究的中文导读与原文链接。
- `style.css`：响应式样式。
- `script.js`：阅读进度与年份。
- 电影配图：来自三部电影官方网站的宣传主视觉，分别附来源链接。图片版权归各权利人，未作为个人摄影展示。

## 更新文章

复制现有文章 HTML，修改标题、摘要、正文与目录；在首页作品区添加入口。所有链接使用相对路径，确保文件名一致。

## 加入摄影

将自己的照片上传到仓库，更新首页 `photography` 区域，用 `<figure><img src="文件名.jpg" alt="照片描述" loading="lazy"><figcaption>标题 / 地点 / 日期</figcaption></figure>` 展示，并移除“尚未发布作品”。建议先导出适合网页大小的图片，并检查 EXIF 中是否含不希望公开的位置。

## 部署

GitHub Settings → Pages → Deploy from a branch → main → /(root)。

## 来源

神道论文：作者提供的最终版（2026 年 5 月）。
婚姻率论文：https://doi.org/10.54254/2753-7048/39/20240724
论文许可：CC BY 4.0（以原始发表页面为准）。

## 电影图片来源

- 《你的名字。》（2016）：https://www.kiminona.com/
- 《天气之子》（2019）：https://www.tenkinoko.com/
- 《铃芽之旅》（2022）：https://suzume-tojimari-movie.jp/
