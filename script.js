document.addEventListener('DOMContentLoaded', function() {
    // 设置当前时间
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.querySelectorAll('.status-time').forEach(el => {
        el.textContent = `${hours}:${minutes}`;
    });

    // 第一个手机的消息数据
    const messages1 = [
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "x mm",
            event: "成都·我们只爱嫩妹®️",
            content: "#导航",
            time: "2023-04-27 08:26:54"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "sky me",
            event: "成都砂舞总群",
            content: "#导航",
            time: "2023-04-27 08:28:03"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "Li Love (@Li_Love6)",
            event: "魔都光明顶狼友讨论区",
            content: "#照片",
            time: "2023-04-27 08:28:12"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "王小明",
            event: "成都砂舞总群",
            content: "#位置",
            time: "2023-04-27 08:29:12"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "张三",
            event: "成都·我们只爱嫩妹®️",
            content: "#价格",
            time: "2023-04-27 08:29:32"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "李四",
            event: "魔都光明顶狼友讨论区",
            content: "#联系",
            time: "2023-04-27 08:30:20"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "赵六",
            event: "成都砂舞总群",
            content: "#照片",
            time: "2023-04-27 08:30:25"
        }
    ];

    // 第二个手机的消息数据
    const messages2 = [
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "欣 欣 (@lwxxxxxc)",
            event: "公群6810 已押1...",
            content: "#验群",
            time: "2025-04-27 08:35:46"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "海阔天空 (@LDH_8B8)",
            event: "公群5002 已押5...",
            content: "#报备 4",
            time: "2025-04-25 03:14:36"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "雪茄 (@aab669999)",
            event: "公群7262 已押1...",
            content: "私户 #有吗 ？",
            time: "2025-04-25 03:18:08"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "艾希 (招一道精聊卡U车，大车包养，小车扶持）",
            event: "公群9715 已押1...",
            content: "80400   #报备",
            time: "2025-04-25 03:19:11"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "歆婷 (@xting0926)",
            event: "公群1682 已押4...",
            content: "#稍等",
            time: "2025-04-25 03:19:20"
        },
        {
            title: "自动私信",
            subtitle: "私信发送成功",
            user: "盛天(回u尾号认准后10位:g4eGTc8Jvm)",
            event: "公群998 已押11...",
            content: "#报备  50W",
            time: "2025-04-25 03:40:21"
        }
    ];

    // 渲染第一个手机的消息
    renderMessages('messages', messages1);

    // 渲染第二个手机的消息
    renderMessages('messages2', messages2);

    // 渲染消息的函数
    function renderMessages(containerId, messages) {
        const messagesContainer = document.getElementById(containerId);

        // 先清空容器
        messagesContainer.innerHTML = '';

        // 添加消息并设置动画效果
        messages.forEach((msg, index) => {
            const messageEl = document.createElement('div');
            messageEl.className = 'message';

            messageEl.innerHTML = `
                <div class="message-header">${msg.title}</div>
                <div class="message-subheader">${msg.subtitle}</div>
                <div class="message-user">用户：<span style="font-weight: 600">${msg.user}</span></div>
                <div class="message-event">来源：<span style="font-weight: 600">${msg.event}</span></div>
                <div class="message-content">内容：<span style="font-weight: 600">${msg.content}</span></div>
                <div class="message-time">时间：${msg.time}</div>
                <div class="message-buttons">
                    <button class="message-button">历史</button>
                    <button class="message-button">屏蔽</button>
                    <button class="message-button active">✓ 处理</button>
                    <button class="message-button">删除</button>
                </div>
            `;

            // 设置延迟显示，创建滚动效果
            messageEl.style.opacity = '0';
            messageEl.style.transform = 'translateY(20px)';
            messageEl.style.transition = 'all 0.3s ease';

            messagesContainer.appendChild(messageEl);

            // 延迟显示
            setTimeout(() => {
                messageEl.style.opacity = '1';
                messageEl.style.transform = 'translateY(0)';
            }, index * 200);
        });

        // 滚动到底部
        setTimeout(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 100);

        // 添加新消息的动画效果
        setInterval(() => {
            // 随机选择一条消息
            const randomIndex = Math.floor(Math.random() * messages.length);
            const randomMsg = messages[randomIndex];

            // 创建新消息元素
            const newMessageEl = document.createElement('div');
            newMessageEl.className = 'message';

            // 更新时间为当前时间
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const currentTime = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${hours}:${minutes}:${seconds}`;

            newMessageEl.innerHTML = `
                <div class="message-header">${randomMsg.title}</div>
                <div class="message-subheader">${randomMsg.subtitle}</div>
                <div class="message-user">用户：<span style="font-weight: 600">${randomMsg.user}</span></div>
                <div class="message-event">来源：<span style="font-weight: 600">${randomMsg.event}</span></div>
                <div class="message-content">内容：<span style="font-weight: 600">${randomMsg.content}</span></div>
                <div class="message-time">时间：${currentTime}</div>
                <div class="message-buttons">
                    <button class="message-button">历史</button>
                    <button class="message-button">屏蔽</button>
                    <button class="message-button active">✓ 处理</button>
                    <button class="message-button">删除</button>
                </div>
            `;

            // 设置初始样式
            newMessageEl.style.opacity = '0';
            newMessageEl.style.transform = 'translateY(20px)';
            newMessageEl.style.transition = 'all 0.3s ease';

            // 添加到容器
            messagesContainer.appendChild(newMessageEl);

            // 触发动画
            setTimeout(() => {
                newMessageEl.style.opacity = '1';
                newMessageEl.style.transform = 'translateY(0)';

                // 滚动到底部
                messagesContainer.scrollTop = messagesContainer.scrollHeight;

                // 如果消息太多，移除最早的消息
                if (messagesContainer.children.length > 15) {
                    messagesContainer.removeChild(messagesContainer.children[0]);
                }
            }, 10);
        }, 5000); // 每5秒添加一条新消息
    }
});
