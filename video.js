let vdata=JSON.parse(localStorage.getItem("clickvdo"));
console.log(vdata);

let iframe=document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${vdata.videoId}`;
iframe.src.height="50%";
iframe.height="70%";
iframe.width="98%";
iframe.setAttribute("allowfullscreen",true);

 let head=document.createElement("h1");
 head.textContent=vdata.snippet.title;
 let desp=document.createElement("h3");
 desp.textContent=vdata.snippet.description;

let vdetail=document.getElementById("vdetail");
let inside_vdetail=document.getElementById("inside_vdetail");
inside_vdetail.height="100%";
inside_vdetail.append(iframe,head,desp);
vdetail.append(inside_vdetail);


let suggest=vdata.arr;
console.log('suggest:', suggest);
suggest.forEach(element => {   

let box=document.createElement("div");
box.setAttribute("id","box");
let ifram=document.createElement("iframe");
// console.log(element);
ifram.src=`https://www.youtube.com/embed/${element.id.videoId}&maxResults=${8}`;
ifram.setAttribute("allowfullscreen",true);
ifram.width="98%";
box.append(ifram);
document.getElementById("suggest").append(box);
 
});
