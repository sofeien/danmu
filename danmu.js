/*jslint browser: true*/
/*global $, jQuery, alert*/
$(function () {
    'use strict';
    
    var showDanmu = (function () {
        var colors = ['red', 'blue', 'Black', 'BlueViolet', 'Crimson', 'Darkorange', '#e68c32', 'Fuchsia', 'OrangeRed', 'SlateBlue', 'Teal'];
        var danmuWall = $('#danmu');
        var temp;
        const speed = 800;   //每100px移动需要的时间 
        return function (msg) {
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            do {
                var top = Math.floor(Math.random() * 20) * 25 + 3;
            }
            while (top === temp);
            temp = top;
            var bullet = $('<span></span>').text(msg);
            $(bullet).css('position', 'absolute');
            $(bullet).css('top', top);
            $(bullet).css('left', danmuWall.width() + 'px');
            $(bullet).css('color', randomColor);
            $(bullet).css('font-size', '25px');
            $(bullet).css('white-space', 'nowrap');
            danmuWall.append(bullet);
            var destance = danmuWall.width() * 2;
            var during = destance/100*speed;
            $(bullet).animate({
                left: -destance + 'px'
            }, during, 'linear');
        };
    })();

    $('#fire').click(function () {
        showDanmu($('input#word').val());
    });

    $('#clear').click(function () {
        $('#danmu').empty();
    });
});
