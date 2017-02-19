var left=document.getElementsByClassName("btn-left")[0];
var right=document.getElementsByClassName("btn-right")[0];
var tus=document.getElementsByClassName("banner-tu")[0];
var btnbox=document.getElementsByClassName("ban-btn")[0];
var btns=btnbox.getElementsByTagName("li");
var tuk=tus.getElementsByTagName("a")[0];
var mk=tuk.offsetWidth;
// console.log(btnbox)
var num=0;
// console.log(btns)
for(var i=0;i<4;i++){
    btns[i].index=i;
    btns[i].onclick=function () {
        // console.log(this)
        num=this.index;
        // console.log(num)
        tus.style.marginLeft=num*-mk+"px";
        for(var j=0;j<4;j++){
            btns[j].style.background="rgba(255,255,255,0.3)";
        }
        btns[num].style.background="rgba(255,255,255,1)";
    }
}
// console.log(num)

var t=setInterval(move,3000);
function move(){
    num++;
    if(num==-1){
        num=3;
    }
    if(num==4){
        num=0;
    }
    for(var i=0;i<4;i++){
        btns[i].style.background="rgba(255,255,255,0.3)";
        btns[num].style.background="rgba(255,255,255,1)";
    }


    // console.log(mk)
    tus.style.marginLeft=num*-mk+"px";
}
right.onclick=function(){
    move();
}
left.onclick=function(){
    num-=2;
    move();
}


