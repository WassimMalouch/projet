
let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let btn3=document.querySelector("#btn3")
let btn4=document.querySelector("#btn4")
let btn5=document.querySelector("#btn5")
let btn6=document.querySelector("#btn6")
let btn7=document.querySelector("#btn7")
let btn8=document.querySelector("#btn8")
let btn9=document.querySelector("#btn9")
let btn10=document.querySelector("#btn10")
let btn11=document.querySelector("#btn11")
let btn12=document.querySelector("#btn12")
let btn13=document.querySelector("#btn13")
let btn14=document.querySelector("#btn14")
let btn15=document.querySelector("#btn15")
let btn16=document.querySelector("#btn16")
let btn17=document.querySelector("#btn17")
let btn23=document.querySelector("#btn23")
let btn24=document.querySelector("#btn24")
let btn25=document.querySelector("#btn25")
let btn21=document.querySelector("#btn21")
let btn22=document.querySelector("#btn22")
let btn26=document.querySelector("#btn26")
let btn27=document.querySelector("#btn27")
let btn28=document.querySelector("#btn28")



let output1=document.querySelector(".output1")
let output2=document.querySelector(".output2")
let output3=document.querySelector(".output3")
let output4=document.querySelector(".output4")
let output5=document.querySelector(".output5")
let output6=document.querySelector(".output6")
let output7=document.querySelector(".output7")
let output8=document.querySelector(".output8")
let output9=document.querySelector(".output9")
let output10=document.querySelector(".output10")
let output11=document.querySelector(".output11")
let output12=document.querySelector(".output12")
let output13=document.querySelector(".output13")
let output14=document.querySelector(".output14")
let output15=document.querySelector(".output15")
let output16=document.querySelector(".output15")
let output17=document.querySelector(".output15")
let output23=document.querySelector(".output23")
let output24=document.querySelector(".output24")
let output25=document.querySelector(".output25")
let output21=document.querySelector(".output21")
let output22=document.querySelector(".output22")
let output26=document.querySelector(".output26")
let output27=document.querySelector(".output27")
let output28=document.querySelector(".output28")








if(document.title=="css_introduction")
{btn1.onclick=function(){
  output1.classList.remove("hide")
  output1.innerHTML = "<p style='color: red;text-align: center;'>Hello World!</p><p style='color: red;text-align: center;'>These paragraphs are styled with CSS.</p>"
  
 
}}
if(document.title=="css_paragraphs")
{
btn2.onclick=function(){
  output2.classList.remove("hide")
  output2.innerHTML = "<p style='color: #2b6777 ;background-color:grey;'>This is a paragraph</p>"
  
}
btn3.onclick=function(){
  output3.classList.remove("hide")
  output3.innerHTML = "<h1 style='text-align:center;color:red;'>Heading 1 (center)</h1><h2 style='text-align:left;color:blue;'>Heading 2 (left)</h2><h3 style='text-align:right;color:yellow;'>Heading 3 (right)</h3>"
  
}
btn4.onclick=function(){
  output4.classList.remove("hide")
  output4.innerHTML = "<h1 style='text-shadow:2px 2px;'>Text Shadow Effect</h1>  "
  
}


btn5.onclick=function(){
  output5.classList.remove("hide")
  output5.innerHTML = "<p style='font-family:'Times New Roman';'>This is a paragraph, shown in the Times New Roman font.</p>"
  
}
btn6.onclick=function(){
  output6.classList.remove("hide")
  output6.innerHTML = "<p style='font-family: Arial;'>This is a paragraph, shown in the Arial font</p>"
  
}
btn7.onclick=function(){
  output7.classList.remove("hide")
  output7.innerHTML = "<p style='font-family:'Lucida Console';'>This is a paragraph, shown in the Lucida Console font.</p>"
  
}
btn8.onclick=function(){
  output8.classList.remove("hide")
  output8.innerHTML = "<p style='font-style:normal;'>This is a normal text.</p>"
  
}
btn9.onclick=function(){
  output9.classList.remove("hide")
  output9.innerHTML = "<p style='font-style:italic;'>This is an italic text.</p>"
  
}
btn10.onclick=function(){
  output10.classList.remove("hide")
  output10.innerHTML = "<p style='font-style:oblique;'>This is an oblique text.</p>"
  
}
btn11.onclick=function(){
  output11.classList.remove("hide")
  output11.innerHTML = "<p style='font-weight:normal;'>This is a normal text.</p>"
  
}
btn12.onclick=function(){
  output12.classList.remove("hide")
  output12.innerHTML = "<p style='font-weight:bold;'>This is a bold text.</p>"
  
}
}
if(document.title=="css_backgrounds")
{
  btn13.onclick=function(){
    output13.classList.remove("hide")
    output13.innerHTML = "<h1 style='background:green;'>This is heading</h1><div style='background:green;opacity:0.3;' >This is div</div>"  
  }

  btn14.onclick=function(){
    output14.classList.remove("hide")
    output14.innerHTML = "<div style='background-image:url('bg.jpeg');'>This text is on this background image.</div>"  
  }
}
if(document.title=="css_borders")
{
  btn15.onclick=function(){
    output15.classList.remove("hide")
    output15.innerHTML = "<div style='border:2px solid red;'>red solid border </div>"  
  }
  btn16.onclick=function(){
    output16.classList.remove("hide")
    output16.innerHTML = "<div style='border:2px solid blue;border-radius:2px;'>blue rounded border.</div>"  
  }
  btn17.onclick=function(){
    output17.classList.remove("hide")
    output17.innerHTML = "<div style='border: 2px double yellow;'>yellow double border</div>"  
  }
  btn23.onclick=function(){
    output23.classList.remove("hide")
    output23.innerHTML = "<div style='border-style:dotted;'>dotted border</div>"  
  }
  btn24.onclick=function(){
    output24.classList.remove("hide")
    output24.innerHTML = "<div style='border-style:dashed;'>dashed border</div>"  
  }
  btn25.onclick=function(){
    output25.classList.remove("hide")
    output25.innerHTML = "<div style='border-style:inset;'>inset border</div>"  
  }
}
if(document.title=="css_links")
{
  btn21.onclick=function(){
    output21.classList.remove("hide")
    output21.innerHTML = "<a>This link is without decoration</div>"  
  }
}

if(document.title=="css_tables")
{
  btn22.onclick=function(){
    output22.classList.remove("hide")
    output22.innerHTML = "<table style='border-collapse:collapse;border:1px solid black;text-align:left';><tr><th style='padding:15px;text-align-align:left;border:1px solid #black'>Firstname</th><th  style='padding:15px;text-align-align:left;border:1px solid black'>Lastname</th><th  style='padding:15px;text-align-align:left;border:1px solid black'>Savings</th></tr><tr><td style='border:1px solid black;text-align:left;padding:15px';>Peter</td><td style='border:1px solid black;text-align:left;padding:15px';>Griffin</td><td style='border:1px solid black;text-align:left;padding:15px';>$100</td></tr></table>"  
  }
  btn26.onclick=function(){
    output26.classList.remove("hide")
    output26.innerHTML = "<table style='border-collapse:collapse;text-align:left';><tr><th style='padding:15px;text-align-align:left;background-color:#2b6777;color:white;'>Firstname</th><th  style='padding:15px;text-align-align:left;background-color:#2b6777;color:white;'>Lastname</th><th  style='padding:15px;text-align-align:left;background-color:#2b6777;color:white;'>Savings</th></tr><tr style='background-color:#f2f2f2;'><td style='border:1px solid black;text-align:left;padding:15px;'>Peter</td><td style='border:1px solid black;text-align:left;padding:15px;'>Griffin</td><td style='border:1px solid black;text-align:left;padding:15px;'>$100</td></tr><tr><td style='border:1px solid black;text-align:left;padding:15px;'>Lois</td><td style='border:1px solid black;text-align:left;padding:15px;'>Griffin</td><td style='border:1px solid black;text-align:left;padding:15px;'>$150</td></tr><tr style='background-color:#f2f2f2;'><td style='border:1px solid black;text-align:left;padding:15px;'>Joe</td><td>Swanson</td> <td style='border:1px solid black;text-align:left;padding:15px;'>$300</td></tr><tr><td style='border:1px solid black;text-align:left;padding:15px;'>Cleveland</td><td style='border:1px solid black;text-align:left;padding:15px;'>Brown</td><td style='border:1px solid black;text-align:left;padding:15px;'>$250</td></tr></table>"  
  }
}

if(document.title=="css_margin")
{
  btn27.onclick=function(){
    output27.classList.remove("hide")
    output27.innerHTML = "<div style='border: 1px solid black;margin-top: 10px;margin-bottom: 10px;margin-right: 15px;margin-left: 8px;background-color: lightblue;'>This div element has a top margin of 10px, a right margin of 15px, a bottom margin of 10px, and a left margin of 8px.</div>"  
  }
  btn28.onclick=function(){
    output28.classList.remove("hide")
    output28.innerHTML = "<div style='border: 1px solid black;padding-top: 10px;padding-right: 10px;padding-bottom: 15px;padding-left: 8px;background-color: lightblue;'>This div element has a top margin of 10px, a right margin of 15px, a bottom margin of 10px, and a left margin of 8px.</div>"  
  }

}