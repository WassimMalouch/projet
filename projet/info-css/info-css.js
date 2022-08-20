


let intro=document.getElementById("css-intro");
let paragraph=document.getElementById("css-paragraphs");
let backgrounds=document.getElementById("backgrounds");
let borders=document.getElementById("borders");
let links=document.getElementById("links");
let tables=document.getElementById("css-tables");
let margin=document.getElementById("css-margin");






let destination=document.querySelector(".destination");

intro.onclick=function(){
  console.log("hello")
  destination.src="pages/css-introduction.html#CSS_intro";
}
paragraph.onclick=function(){
  console.log("hello")
  destination.src="pages/css-paragraphs.html#css_paragraphs";
}
backgrounds.onclick=function(){
  console.log("hello")
  destination.src="pages/css-backgrounds.html#css_backgrounds";
}
borders.onclick=function(){
  console.log("hello")
  destination.src="pages/css-borders.html#css_borders";
}
links.onclick=function(){
  console.log("hello")
  destination.src="pages/css-links.html#css_links";
}
tables.onclick=function(){
  console.log("hello")
  destination.src="pages/css-tables.html#css_tables";
}
margin.onclick=function(){
  console.log("hello")
  destination.src="pages/css-margin.html#css_margin";
}


