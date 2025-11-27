/* 
    文件作用：script.js - 网站的JavaScript交互文件
    这个文件包含了网站的所有交互功能和动态效果，包括：
    - 移动端导航菜单的展开/收起功能
    - 平滑滚动到页面锚点
    - 表单提交处理
    - 导航栏滚动时的样式变化
    - 页面元素的动画效果
*/

// 等待DOM加载完成后再执行代码
document.addEventListener('DOMContentLoaded', function() {

    // ========== 移动端导航菜单切换功能 ==========
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // 点击汉堡菜单按钮时切换导航菜单的显示/隐藏
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // 添加动画效果到汉堡菜单图标
            hamburger.classList.toggle('active');
        });
    }

    // 点击导航链接后关闭移动端菜单
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ========== 平滑滚动功能 ==========
    // 为所有锚点链接添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认的跳转行为

            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // 如果链接为空，不执行滚动

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // 计算目标位置（考虑固定导航栏的高度）
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                // 平滑滚动到目标位置
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== 导航栏滚动效果 ==========
    // 当页面滚动时，改变导航栏的样式（添加背景阴影等效果）
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            // 滚动超过100px时，增强导航栏的阴影效果
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            // 回到顶部时，恢复原始阴影
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ========== 表单提交处理 ==========
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // 阻止表单的默认提交行为

            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            // 简单的表单验证
            if (!formData.name || !formData.email || !formData.message) {
                alert('请填写所有必填项！');
                return;
            };

            // 邮箱格式验证
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('请输入有效的邮箱地址！');
                return;
            }

            // ========== 数据保存方案 ==========
            // 方案1：保存到浏览器本地存储（localStorage）
            // 数据保存在浏览器的本地存储中，可以在同一浏览器中查看
            // 注意：这种方式只能在同一台电脑的同一浏览器中查看数据
            const savedData = JSON.parse(localStorage.getItem('contactFormData') || '[]');
            const newEntry = {
                ...formData,
                timestamp: new Date().toLocaleString('zh-CN'), // 添加提交时间
                id: Date.now() // 添加唯一ID
            };
            savedData.push(newEntry);
            localStorage.setItem('contactFormData', JSON.stringify(savedData));
            console.log('表单数据已保存到本地存储，共', savedData.length, '条记录');

            // 方案2：发送到服务器（需要后端支持）
            // 取消下面的注释，并配置您的服务器API地址
            /*
            fetch('https://your-server.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('数据已发送到服务器：', data);
            })
            .catch(error => {
                console.error('发送失败：', error);
            });
            */

            // 方案3：发送邮件（需要邮件服务支持）
            // 可以使用 EmailJS、Formspree 等第三方服务
            // 或通过后端服务器发送邮件

            // 显示提交成功消息
            alert('感谢您的留言！我们会尽快与您联系。\n\n提示：数据已保存到浏览器本地存储。');

            // 清空表单
            contactForm.reset();
        });
    }

    // ========== 滚动动画效果 ==========
    // 当元素滚动到视口中时，添加淡入动画
    const observerOptions = {
        threshold: 0.1, // 当元素10%可见时触发
        rootMargin: '0px 0px -50px 0px' // 提前50px触发
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 为需要动画的元素添加观察
    const animateElements = document.querySelectorAll('.service-card, .product-card, .series-item, .tech-card, .solution-card, .market-card, .team-card, .team-profile, .team-culture, .stat-item, .achievement-card, .financial-card, .culture-card, .timeline-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ========== 页面加载完成后的初始化 ==========
    // 确保页面加载时导航栏样式正确
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    }

    // ========== 英雄区背景轮播（自动切换） ==========
    const heroSlides = document.querySelectorAll('.hero-slideshow .slide');
    if (heroSlides.length) {
        let currentSlide = 0;
        const slideInterval = 5000; // 切换间隔（毫秒）

        // 显示第一张
        heroSlides[currentSlide].classList.add('active');

        function showNextSlide() {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }

        let slideTimer = setInterval(showNextSlide, slideInterval);

        // 鼠标悬停时暂停轮播，离开时恢复
        const heroEl = document.querySelector('.hero');
        if (heroEl) {
            heroEl.addEventListener('mouseenter', function() {
                clearInterval(slideTimer);
            });
            heroEl.addEventListener('mouseleave', function() {
                slideTimer = setInterval(showNextSlide, slideInterval);
            });
        }
    }

    console.log('网站初始化完成！');
});
