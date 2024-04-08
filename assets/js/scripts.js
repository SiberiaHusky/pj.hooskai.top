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

        document.querySelector('#age').innerText = calcYearDiff()

        document.querySelector('#this_year').innerText = date.getFullYear();

        // 5 秒后变换页面背景颜色
        setTimeout(function () {
            document.body.style.backgroundColor = "#1a237e";
        }, 5000);
