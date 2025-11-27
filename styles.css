/* 
    文件作用：styles.css - 网站的样式表文件
    这个文件定义了网站的所有视觉样式，包括：
    - 布局样式（导航栏、内容区块、页脚等）
    - 颜色、字体、间距等视觉设计
    - 响应式设计（适配不同屏幕尺寸）
    - 动画效果和交互样式
*/


/* 全局样式重置和基础设置 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* CSS变量定义 - 方便统一管理颜色和尺寸 */
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #333333;
    --text-light: #666666;
    --bg-light: #f8f9fa;
    --white: #ffffff;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 5px 20px rgba(0, 0, 0, 0.15);
    --transition: all 0.3s ease;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    overflow-x: hidden;
}


/* 容器样式 - 用于限制内容宽度并居中 */

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}


/* 导航栏样式 */

.navbar {
    background: var(--white);
    box-shadow: var(--shadow);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    transition: var(--transition);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.brand-logo {
    height: 48px;
    width: 48px;
    object-fit: contain;
}

.nav-brand h1 {
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: 700;
}

.brand-tagline {
    font-size: 0.8rem;
    color: var(--text-light);
    margin-top: 0.1rem;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-link:hover {
    color: var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}

.nav-link:hover::after {
    width: 100%;
}


/* 汉堡菜单按钮（移动端） */

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--text-color);
    transition: var(--transition);
}


/* 英雄区域样式（首页大横幅） */

.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: var(--white);
    padding: 150px 20px 100px;
    text-align: center;
    margin-top: 70px;
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-kicker {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.85rem;
    opacity: 0.8;
    margin-bottom: 1rem;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    animation: fadeInUp 1s ease 0.2s both;
}

.hero-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.hero-stats .stat {
    text-align: center;
}

.hero-stats h3 {
    font-size: 2rem;
    margin-bottom: 0.3rem;
}

/* 英雄区背景轮播样式 */
.hero-slideshow {
    position: absolute;
    inset: 0; /* top:0; right:0; bottom:0; left:0 */
    z-index: 0;
}
.hero-slideshow .slide {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    filter: brightness(0.6) saturate(0.95);
}
.hero-slideshow .slide.active {
    opacity: 1;
}

.hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.1));
    z-index: 1;
    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 2;
}


/* 按钮样式 */

.btn {
    display: inline-block;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn-primary {
    background: var(--white);
    color: var(--primary-color);
    animation: fadeInUp 1s ease 0.4s both;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.btn-outline {
    border: 2px solid var(--white);
    color: var(--white);
    background: transparent;
}

.btn-outline:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}


/* 内容区块通用样式 */

.section {
    padding: 80px 20px;
}

.section-gray {
    background: var(--bg-light);
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--text-color);
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 2px;
}

.section-intro {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 2rem;
    color: var(--text-light);
}

.label {
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-light);
    margin-top: 1rem;
}


/* 关于我们区块 */

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: var(--text-light);
    line-height: 1.8;
}

.about-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.stat-item {
    text-align: center;
    padding: 2rem;
    background: var(--white);
    border-radius: 10px;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.stat-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.stat-item h3 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.stat-item p {
    color: var(--text-light);
}

.overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.logo-card,
.info-card,
.quote-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    height: 100%;
}

.logo-card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.logo-image {
    width: 140px;
    height: auto;
    object-fit: contain;
}

.info-card ul {
    margin-top: 1rem;
    padding-left: 1.2rem;
    color: var(--text-light);
}

.info-card ul li {
    margin-bottom: 0.5rem;
}

.quote-card {
    background: linear-gradient(145deg, #eff6ff, #dbeafe);
    color: #1d4ed8;
}

.quote {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
}

.quote-author {
    font-weight: 600;
}


/* 服务项目网格 */

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: var(--white);
    padding: 2.5rem;
    border-radius: 10px;
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.service-card p {
    color: var(--text-light);
    line-height: 1.6;
}

.product-matrix {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.product-card {
    background: var(--white);
    padding: 1.8rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    position: relative;
}

.badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(37, 99, 235, 0.1);
    color: var(--primary-color);
    padding: 0.3rem 0.8rem;
    border-radius: 999px;
    font-weight: 600;
}

.series-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
}

.series-item {
    background: #e0e7ff;
    padding: 1.5rem;
    border-radius: 10px;
}

.series-item h4 {
    margin-bottom: 0.5rem;
    color: #1e3a8a;
}

.tech-grid,
.solutions-grid,
.market-grid,
.team-layout,
.achievements-grid,
.financial-grid,
.culture-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.tech-card,
.solution-card,
.market-card,
.achievement-card,
.financial-card,
.culture-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.solution-card h3,
.market-card h3,
.achievement-card h3,
.financial-card h3,
.culture-card h3 {
    margin-bottom: 0.8rem;
}

.team-layout {
    align-items: stretch;
}

.team-profile,
.team-culture {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
}

.team-culture ul {
    padding-left: 1.2rem;
    margin: 1rem 0;
    color: var(--text-light);
}

.timeline {
    border-left: 3px solid #e5e7eb;
    margin-left: 1rem;
    padding-left: 2rem;
}

.timeline-item {
    position: relative;
    margin-bottom: 1.5rem;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -2.35rem;
    top: 0.3rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-color);
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
}

.timeline-date {
    font-weight: 600;
    color: var(--primary-color);
}

.financial-card ul {
    padding-left: 1.2rem;
    color: var(--text-light);
}

.culture-card {
    background: linear-gradient(135deg, #eef2ff, #e0f2fe);
}

.cta-panel {
    margin-top: 2.5rem;
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    text-align: center;
}

.cta-text {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}


/* 团队介绍网格 */

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.team-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
}

.team-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.team-avatar {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.team-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.team-role {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 1rem;
}

.team-desc {
    color: var(--text-light);
    line-height: 1.6;
}


/* 联系我们区块 */

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.contact-item h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
}

.contact-item p {
    color: var(--text-light);
    font-size: 1.1rem;
}


/* 联系表单样式 */

.contact-form {
    background: var(--white);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e5e7eb;
    border-radius: 5px;
    font-size: 1rem;
    font-family: inherit;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.form-group textarea {
    resize: vertical;
}


/* 页脚样式 */

.footer {
    background: #1f2937;
    color: var(--white);
    padding: 3rem 20px 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
    margin-bottom: 1rem;
    color: var(--white);
}

.footer-section p {
    color: #d1d5db;
    line-height: 1.8;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: #d1d5db;
    text-decoration: none;
    transition: var(--transition);
}

.footer-section ul li a:hover {
    color: var(--white);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #374151;
    color: #9ca3af;
}


/* 动画效果 */

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* 响应式设计 - 平板设备 */

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: var(--white);
        width: 100%;
        text-align: center;
        transition: var(--transition);
        box-shadow: var(--shadow);
        padding: 2rem 0;
    }
    .nav-menu.active {
        left: 0;
    }
    .hero-title {
        font-size: 2rem;
    }
    .hero-subtitle {
        font-size: 1rem;
    }
    .about-content,
    .contact-content,
    .product-matrix,
    .series-list,
    .tech-grid,
    .solutions-grid,
    .market-grid,
    .team-layout,
    .achievements-grid,
    .financial-grid,
    .culture-grid {
        grid-template-columns: 1fr;
    }
    .about-stats,
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .section-title {
        font-size: 2rem;
    }
}


/* 响应式设计 - 手机设备 */

@media (max-width: 480px) {
    .hero {
        padding: 120px 20px 60px;
    }
    .hero-title {
        font-size: 1.5rem;
    }
    .section {
        padding: 60px 20px;
    }
    .services-grid,
    .team-grid,
    .about-stats {
        grid-template-columns: 1fr;
    }
}
