//出现隐藏li
$('.fj').on('mouseenter',function(){
    $(this).next().show();
    // $(this).find('li').css('background','white')
})
$('.fj').on('mouseleave',function(){
    $(this).next().hide()
})
//li变白
$('.leftNav>ul>li').on('mouseenter',function(){
    $(this).css('background','white');
    $(this).css('color','#b01d1d')

})
$('.leftNav>ul>li').on('mouseleave',function(){
    $(this).css('background','#b01d1d');
    $(this).css('color','white')
})
//轮播
temp = document.getElementById('img');
 a = temp.getElementsByTagName('li');
 var shu=document.getElementById('NUM')
 b = shu.getElementsByTagName('li');
        var x = a.length;//让b等于a的长度，这样就会从第一张开始循环
        function xunhuan() {
            for (i = 0; i < a.length; i++) {//隐藏所有图片，设置class为空
                a[i].style.display = 'none';
                b[i].setAttribute('class', '');
            }
            x++;//每循环一次加一
            if (x >= a.length) {//x大于长度则重新回到0
                x = 0;
            }
            a[x].style.display = 'block';//每次显示一张图片
            b[x].setAttribute('class', 'blue');//每次更改一个li的class
        }
        var time = setInterval(xunhuan, 1000);//定时函数
        function yiru(n) {
            b[n].onmouseenter = function () {//鼠标移入}
                clearInterval(time);//清除计时器
                for (var i = 0; i < b.length; i++) {//隐藏所有鱼片，更改所有clss
                    a[i].style.display = 'none';
                    b[i].setAttribute('class', '');
                }
                a[n].style.display = 'block';//显示鼠标移入的图片
                b[n].setAttribute('class', 'blue');//更改鼠标移入的背景颜色
            }
            b[n].onmouseleave = function () {//鼠标离开继续循环
                x = n;//从鼠标离开的地方开始循环
                time = setInterval(xunhuan, 1000);
            }
        }
        for (var n = 0; n < b.length; n++) {//循环设定鼠标移入事件
            yiru(n);
        }
//右边公告


//购物车
//出现大盒子
$('.i_car').on('mouseenter',function(){
    $(this).find('.last').css('display','block')
})
$('.i_car').on('mouseleave',function(){
    $(this).find('.last').css('display','none')
})
//删除
$('.clear>.close').on('click',function(){
    // $(this).parent('li').index();
    $(this).parents('li').remove()
})