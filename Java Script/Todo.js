let h1 = document.createElement("h1");
h1.style.position = "absolute";
h1.style.left = "1050px";
h1.style.textDecoration = "underline";
h1.innerText = "Todo App";
let body = document.querySelector("body");
body.append(h1);
let btn = document.createElement("input");
btn.placeholder = "Enter new Task";
let bts = btn.style;
bts.height = "50px";
bts.width = "1535px";
bts.marginTop = "170px";
bts.padding = "20px";
bts.position = "absolute";
bts.left = "17%";
btn.style.border = "3px solid black";
bts.borderRadius = "10px";
bts.fontSize = "35px";
bts.transition = "0.5s ease-in-out 0s"
body.style.transition = "0.5s ease-in-out 0s";
body.appendChild(btn);
let head = document.createElement("h1");
head.innerText = "List";
body.append(head);
let hs = head.style;
hs.position = "absolute";
hs.top = "320px";
hs.left = "480px";
hs.fontSize = "100px";
let ul = document.createElement("ul");
body.append(ul);
let uls = ul.style;
uls.position = "absolute";
uls.top = "500px";
uls.left = "550px";
uls.fontSize = "50px";


btn.addEventListener('mouseenter',function(){
  btn.style.backgroundColor = "#e3f3ee";
  body.style.backgroundColor = "#9ce0ea";
  btn.style.cursor = "text";
  btn.style.scale = "1.02";
});
btn.addEventListener('mouseleave',function(){
  body.style.backgroundColor = "#fff";
  bts.backgroundColor = "#fff";
  btn.style.cursor = "text";
  btn.style.scale = "1";
});
btn.addEventListener('change',function(){
  let li = document.createElement("li");
  li.innerText = btn.value;
  li.style.padding = "5px";
  ul.appendChild(li);
  btn.value = "";
  let close1 = document.createElement("button");
  close1.innerHTML = "X";
  let cs = close1.style;
  cs.color = "red";
  cs.fontSize = "35px";
  cs.backgroundColor = "#e0d3d3";
  cs.width = "45px";
  cs.borderRadius = "5px";
  cs.transition = "0.15s ease-in-out 0s";
  cs.position = "absolute";
  cs.left = "700px";
  close1.addEventListener('mouseenter',function(){
    cs.scale = "1.15";
  });
  close1.addEventListener('mouseleave',function(){
    cs.scale = "1";
  });
  let item = document.body.children[4].firstElementChild;
  let k = 0;
  while(item){
    k++;
    item = item.nextElementSibling;
  }
  li.setAttribute("id",k);
  k = document.getElementById(k);
  k.appendChild(close1);
  close1.addEventListener('click',function(){
    this.parentElement.remove();
  });
});