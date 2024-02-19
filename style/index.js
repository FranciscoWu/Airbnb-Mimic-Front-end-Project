let items = document.getElementsByClassName("banner-img");
let points = document.getElementsByClassName("point");
let leftBtn = document.getElementById("btn-left");
let rightBtn = document.getElementById("btn-right");
let content = document.querySelector(".bannercontent");
let index = 0;
let timer = null;

let clearActive = function() {
  for(let i = 0; i < items.length; i++) {
    items[i].className = "banner-img";
    points[i].className = "point";
  }
}

let goIndex = function() {
  clearActive();
  items[index].className = "banner-img active";
  points[index].className = "point active";
}

rightBtn.onclick = function() {
  if (index < items.length-1) {
    index++;
  } else {
    index = 0;
  }
  goIndex();
}

leftBtn.onclick = function() {
  if (index > 0) {
    index--;
  } else {
    index = items.length-1;
  }
  goIndex();
}

// 开启
timer = setInterval(()=>{
  rightBtn.onclick();
},2000)

// 当鼠标移入时候，关闭定时器
content.onmouseover = function() {
  clearInterval(timer);
}

// 当鼠标移出时 重新开启计时器
content.onmouseout = function() {
  timer = setInterval(()=>{
    rightBtn.onclick();
  },2000);
}

// 当点击原圆点时 跳转到 对应图片
for(let i = 0; i < points.length; i++) {
  points[i].addEventListener("click", function() {
    // 给所有的圆点添加监听事件
    let pointIndex = this.getAttribute("data-index");
    index = pointIndex;
    goIndex();
  })
}