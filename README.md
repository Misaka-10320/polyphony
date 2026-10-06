# 复调 · POLYPHONY

Misaka10320 与 花間堂 / florahals 共同发表文章的静态网站。

## 2026-09-24 视觉更新
首页增加摄影叠片、四篇文章精选、双作者入口与全幅摄影展示；全站采用暖白、炭黑与灰绿色的统一视觉。
polish.css 为共享视觉层，style.css 保留基础布局。静态网页无需构建。
阅读页增加面包屑、目录当前位置与同作者文章推荐；小屏数据图表在区域内滚动，不再撑宽整页。
进入、滚动与弹窗动效遵循系统减少动态效果设置。文章原文、图片署名与十五张摄影完整保留。
本次版本已完成本地检查；GitHub Pages 从 main 分支根目录发布。

## 页面
- index.html：共同首页
- misaka10320.html：Misaka10320，保留原有个人板块布局
- florahals.html：花間堂 / florahals
- shinto.html：神道世界观论文
- marriage.html：青年婚姻研究完整英文原文及调查数据图表
- 婚姻论文完整正文保留；原版实名 PDF 仅保留在本地，不随网站发布。
- political-literature.html：外语政治文学中的社会反思研究
- duality-of-evil.html：恶的双重性
- misaka10320.html#photography：上海、扬州、镇江、star、英仙座，五组共十五张摄影，支持完整画面浏览

## 预览与发布
GitHub Pages：https://misaka-10320.github.io/ 。
Cloudflare Pages：https://polyphony-journal.pages.dev/ 。
网站不需要构建步骤，发布时上传此文件夹的网页及资源即可。
未来新增文章时，增加文章 HTML 并更新对应作者目录。

## 来源与版权
文章版权归各自作者所有。花間堂两篇文章依据提供的 DOCX 正文编排，第一篇省略投稿表与联系方式，第二篇增加阅读分节。
事件配图的日期、来源与署名见图片下方；完整信息见 image-credits.json（如存在）。
新增新闻图片与报道来源见 news-credits.json；摄影版权归 Misaka10320，网页使用去除 EXIF 的缩小副本，移动硬盘原件未改动。
滚动缓动使用 Lenis 1.3.26，MIT 许可见 assets/vendor/LENIS-LICENSE.txt；系统减少动态效果时停用动画与滚动缓动。
三张电影图片为对应作品官方宣传图，来源见神道世界观文章图注。

## 开场弹窗
每个浏览会话首次进入时显示；关闭后同一会话内不重复打断阅读。页脚“关于复调”可再次打开。支持 Escape、焦点限制及减少动态效果设置。
弹窗文字为本站原创文案，不是哲学家引言。
