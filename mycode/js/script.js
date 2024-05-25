document.addEventListener('click', function(e) {
    // 创建特效元素
    var effect = document.createElement('div');
    effect.className = 'click-effect';
  
    // 设置特效元素的位置
    effect.style.left = e.clientX - 15 + 'px'; // 减去宽度的一半，使其居中
    effect.style.top = e.clientY - 15 + 'px'; // 减去高度的一半，使其居中
  
    // 添加特效元素到<body>标签
    document.body.appendChild(effect);
  
    // 当动画完成后移除这个特效元素
    effect.addEventListener('animationend', function() {
      effect.parentNode.removeChild(effect);
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    var area = document.getElementById('txt-container');
    var originalText = area.textContent; // 保存原始文本


    area.addEventListener('mouseenter', function () {
        this.textContent = shuffleText(this.textContent);
    });
    
    area.addEventListener('mouseleave', function () {
        this.textContent = originalText; // 鼠标离开时恢复原始文本
    });
});

// 文本乱序函数
function shuffleText(text) {
    var arr = text.split(''); // 将文本转换为字符数组
    var n = arr.length;

    for(var i=0 ; i<n-1 ; ++i) {
        var j = Math.floor(Math.random() * n); // 随机选取一个索引
        var temp = arr[i]; // 交换字符
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    return arr.join(''); // 将乱序后的字符数组转换为字符串
}


document.addEventListener('DOMContentLoaded', function () {
    var text = " 大家好！ 我是朱庆森，一名技术爱好者"; 
    var container = document.getElementById('text-container');
    container.innerHTML = '';

    // 将每个字符包裹在span标签内
    for(var i = 0; i < text.length; i++) {
        var span = document.createElement('span');
        span.textContent = text[i];
        span.className = 'letter';
        container.appendChild(span);
    }

    var letters = document.querySelectorAll('.letter');

    // 按顺序显示每个字符
    container.addEventListener('mouseenter', function() {
        var letters = container.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = 1;
            }, index * 200); // 每个字符间隔200毫秒显示一次
        });
    });

    // 鼠标移出时，隐藏所有字符
    container.addEventListener('mouseleave', function() {
        var letters = container.querySelectorAll('.letter');
        letters.forEach(letter => {
            letter.style.opacity = 0;
        });
    });
});