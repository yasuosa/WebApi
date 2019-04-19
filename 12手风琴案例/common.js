//根据id获取对应的元素
function my$(id) {
    return document.getElementById(id);
}


function animate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;
        for(var key in json){
            if(key=="opacity"){
                var current=getStyle(element,key)*100;
                var target=json[key]*100;
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style.opacity=current/100;
            }else if(key=="zIndex"){
                element.style[key]=json[key];
            }else {
                var current=parseInt(getStyle(element,key));
                var target=json[key];
                var step=(target-current)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                current+=step;
                element.style[key]=current+"px";
            }
            if(current!=target){
                flag=false;
            }
        }
        if(flag){
            clearInterval(element.timeId);
            if(fn){
                fn();
            }
        }
        //测试代码:
        console.log("目标位置"+target+"当前位置"+current+"每次移动步数"+step);
    },20);
}

function getStyle(element,attr) {
    return window.getComputedStyle(element,null)[attr]
    ||document.currentStyle[attr]||0;
}



