/**
 * Created by dupenghui on 2015/1/22.
 */
define(function(requrie){
    var html5LoadCtrl=["$scope","$element",function($scope,$element){
        var $=requrie("jquery")
        var loadCanvasShow = function(text, flag) {

             var bodyElem = document.body || document.querySelector("body") || document.querySelectorAll("body")[0] || document.getElementsByTagName("body")[0];
             document.body.style.height = window.screen.height + "px";
             bodyElem.style.cssText = "overflow:hidden;";

            var cover_div, canvas_elem;
            cover_div = document.createElement("div");

            cover_div.className = "canvas_outer";
            cover_div.style.cssText = "position:absolute;left:0px;top:0px;width:100%;height:100%;opacity:0.4;z-index:999998;background:gray";
            cover_div.style.height = window.screen.height + "px";
            canvas_elem = document.createElement("canvas");
            canvas_elem.className = "canvas_loading";
            canvas_elem.style.cssText = "margin:-75px -75px; width:280px; height:150px;  position: absolute; top:50%;opacity:1; left:50%;z-index:999999";

  /*          if ($(".canvas_outer").length === 0) {
                $element.append(cover_div);
                cover_div.style.display = "block";
            }*/
            if ($(".canvas_loading").length === 0) {
                $element.append(canvas_elem);
                var canvas = $(".canvas_loading")[0];
                var ctx = canvas.getContext('2d');
                if (!ctx) {
                    return;
                }

                // canvas 绘制文本
                ctx.font = "20px Arial"
                ctx.fillStyle = 'black';
                ctx.fillText(text ? text.toString() : "数据加载中。。。", 0, 148);

                ctx.clearRect(0, 0, 128, 128);// 擦除画布
                ctx.fillStyle = 'transparent';
                ctx.fillRect(0, 0, 128, 128);
                ctx.fillStyle = 'black';// 定义点的颜色
                var base = 0;
                var update = function() {
                    ctx.save();// 把当前绘图状态保存起来
                    ctx.clearRect(0, 0, 128, 128);// 擦除画布
                    ctx.translate(64, 64);// 把坐标原点移到画布中央
                    base = (++base === 13) ? (base - 12) : base;// 使用base来指示最大的圆点所在的位置，实现旋转动画的效果
                    var angle = Math.PI / 6;// 画12个点，所以每个点之间的角度是1/6 PI
                    var beginAngle = angle * base;
                    for ( var i = 1; i <= 12; i++) {
                        ctx.beginPath();// 开始一个路径
                        if (i === 1) {
                            ctx.rotate(beginAngle);
                        } else {
                            ctx.rotate(angle);// 每次调用rotate之后，其旋转角度并不会还原，而是接着上一次的
                        }
                        ctx.arc(0, -48, i * 0.8 + 1, 0, 2 * Math.PI, true);// 绘制一个圆点
                        ctx.closePath();// 闭合路径
                        ctx.fill();
                    }
                    ctx.restore();// 还原绘图状态，如果不还原，则下一次调用roatate时会接着这次的位置旋转，而不是初始位置
                }
                update();
                setInterval(update, 50);
                canvas_elem.style.display = "block";
            }

            $(".canvas_outer").show();
            $(".canvas_loading").show();
            $(".canvas_loading").bind("touchestart touchemove", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
            $(".canvas_outer").bind("touchestart touchemove", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });

        };
        loadCanvasShow("canva 效果")
    }]
    return html5LoadCtrl


})