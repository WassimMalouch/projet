


let intro=document.getElementById("intro");
let basics=document.getElementById("basics");
let tables=document.getElementById("tables");
let headings=document.getElementById("headings");
let paragraphs=document.getElementById("paragraphs");
let styles=document.getElementById("styles");
let attributes=document.getElementById("attributes");
let elements=document.getElementById("elements");

let headers=document.getElementById("headers");
let classeId=document.getElementById("classe-id");
let layout=document.getElementById("layout");


let buttons=[intro,basics,headings,paragraphs,styles,attributes,elements,tables,headers,lists,classeId,layout]
function removeClass(x,buttons){
  for(i=0;i<12;i++){
    if(i!=x){
      buttons[i].classList.remove("clicked")
      buttons[i].classList.add("notClicked")

    }
  }
  buttons[x].classList.remove("notClicked");
  buttons[x].classList.add("clicked");
  }



let destination=document.querySelector(".destination");

intro.onclick=function(){
  destination.src="pages/html_tuto.html#html_intro";
  removeClass(0,buttons);
}
basics.onclick=function(){
  destination.src="pages/html_tuto.html#html_basic";
  removeClass(1,buttons);

}
headings.onclick=function(){
  destination.src="pages/html_tuto.html#html_headings";
  removeClass(2,buttons);

}
paragraphs.onclick=function(){
  destination.src="pages/html_tuto.html#html_paragraphs";
  removeClass(3,buttons);

}
styles.onclick=function(){
  destination.src="pages/html_tuto.html#html_styles";
  removeClass(4,buttons);

}
attributes.onclick=function(){
  destination.src="pages/html_tuto.html#html_attributes";
  removeClass(5,buttons);

}


tables.onclick=function(){
  destination.src="pages/html-tables.html#html_tables";
  removeClass(7,buttons);

}
headers.onclick=function(){
  destination.src="pages/html-tables.html#html_headers";
  removeClass(8,buttons);

}

lists.onclick=function(){
  destination.src="pages/html-lists.html#html_lists";
  removeClass(9,buttons);

}
classeId.onclick=function(){
  destination.src="pages/html-classes-id.html#html_classe_id";
  removeClass(10,buttons);

}

layout.onclick=function(){
  destination.src="pages/html-classes-id.html#html_layout";
  removeClass(11,buttons);

}






