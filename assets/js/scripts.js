        // 日期相关
        var date = new Date();

        var todayDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()

        function calcYearDiff() {
            const todayMs = new Date(todayDate).getTime()
            const targetMs = new Date('2007-03-14').getTime()
            const diffInMs = Math.abs(todayMs - targetMs)
            const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365)
            return Math.floor(diffInYears)
        }

        var ageElement = document.querySelector('#age');
        if (ageElement) {
            ageElement.innerText = calcYearDiff();
        }

        var yearElement = document.querySelector('#this_year');
        if (yearElement) {
            yearElement.innerText = date.getFullYear();
        }

        // 5 秒后变换页面背景颜色
        setTimeout(function () {
            document.body.style.backgroundColor = "#1a237e";
        }, 5000);

        // 获取所有带有 data-bgimg 属性的元素
        var elements = document.querySelectorAll('[data-bgimg]');

        // 循环处理每个元素
        elements.forEach(function (element) {
            // 获取 data-bgimg 属性的值
            var imgUrl = element.getAttribute('data-bgimg');

            // 将 data-bgimg 属性的值设置为背景图片
            element.style.backgroundImage = 'url(' + imgUrl + ')';
        });
