
let iframe=document.querySelector(".destination")
let btn_output=document.getElementById("output");
let btn_intro=document.getElementById("intro");
let btn_var=document.getElementById("variables");
let btn_data_types=document.getElementById("data_types");
let btn_operators=document.getElementById("operators");
let btn_conditions=document.getElementById("conditions");
let btn_loops=document.getElementById("loops");
let btn_fn=document.getElementById("functions");

let buttons=[btn_intro,btn_output,btn_var,btn_data_types,btn_operators,btn_conditions,btn_loops,btn_fn];





function removeClass(x,buttons){
for(i=0;i<8;i++){
  if(i!=x){
    buttons[i].classList.remove("clicked")
    buttons[i].classList.add("notClicked")

  }
}
buttons[x].classList.remove("notClicked");
buttons[x].classList.add("clicked");
}


btn_intro.onclick=function(){
  iframe.src="pages/introduction.html";
  removeClass(0,buttons);
}

btn_output.onclick=function(){
iframe.src="pages/output.html";
removeClass(1,buttons);
}



btn_var.onclick=function(){
  iframe.src="pages/variables.html";
  removeClass(2,buttons);

}

btn_data_types.onclick=function(){
iframe.src="pages/data_types.html"
removeClass(3,buttons);
}

btn_operators.onclick=function(){
  iframe.src="pages/operators.html"
  removeClass(4,buttons);
}

btn_conditions.onclick=function(){
  iframe.src="pages/condition.html"
  removeClass(5,buttons);
}

btn_loops.onclick=function(){
  iframe.src="pages/loop.html"
  removeClass(6,buttons);
}

btn_fn.onclick=function(){
  iframe.src="pages/functions.html"
  removeClass(7,buttons);
}