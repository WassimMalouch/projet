

console.log(document.title)

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









if(document.title=="html_tuto"){
btn1.onclick=function(){
  output1.classList.remove("hide")
  output1.innerHTML = "<h1 style='color:red'>This is Heading 1</h1>"
  output2.classList.add("hide")
  output3.classList.add("hide")
}

btn2.onclick=function(){
  output2.classList.remove("hide")
  output2.innerHTML = "<h2 style='color:blue'>This is Heading 2</h1>"
  output1.classList.add("hide")
  output3.classList.add("hide")
}

btn3.onclick=function(){
  output3.classList.remove("hide")
  output3.innerHTML = "<h3 style='color:yellow'>This is Heading 3 </h3>"

  output2.classList.add("hide")
  output1.classList.add("hide")
}

btn4.onclick=function(){
    output4.classList.remove("hide")
    output4.innerHTML = "<p style='color:red'>This is a paragraph.</p>"
  
  }
btn5.onclick=function(){
    output5.classList.remove("hide")
    output5.innerHTML = "<p style='color:blue'>This is another paragraph. </p>"
  
  }
  btn6.onclick=function(){
    output6.classList.remove("hide")
    output6.innerHTML = "<h1>This is heading 1</h1>  <p>This is some text.</p> <hr> <h2>This is heading 2</h2> <br> <p>This is some other text.</p>"
  
  }
  btn7.onclick=function(){
    output7.classList.remove("hide")
    output7.innerHTML = "<p style='color:red'>I'm red</p>"
  
  }
  btn8.onclick=function(){
    output8.classList.remove("hide")
    output8.innerHTML = "<p style='color:blue'>I'm blue</p>"
  
  }
  btn9.onclick=function(){
    output9.classList.remove("hide")
    output9.innerHTML = "<p style='font-size:50px'>I'm big</p>"
  }
}
  
if(document.title=="html_table"){

btn10.onclick=function(){
  output10.classList.remove("hide")
  output10.innerHTML = "<table style='border:1px solid red; width:350px; height:150px;'> <tr> <td style='border:1px solid red;'> salma </td> <td style='border:1px solid red;'> wassim </td> <td style='border:1px solid red;'> sayed </td> </tr> <tr>  <td style='border:1px solid red;'> 21 </td>  <td style='border:1px solid red;'> 20 </td>  <td style='border:1px solid red;'> 27 </td> </tr> </table>"
 
}

btn11.onclick=function(){
  output11.classList.remove("hide")
  output11.innerHTML = "<table style='border:1px solid red; width:350px; height:150px;'> <tr> <th style='border:1px solid black;'> First Name </th> <td style='border:1px solid black;'> salma </td> <td style='border:1px solid black;'> wassim </td> </tr> <tr>  <th style='border:1px solid black;'> age </th>  <td style='border:1px solid black;'> 21 </td>  <td style='border:1px solid black;'> 20 </td> </tr> </table>"
 
}
}

if(document.title=="html_lists"){
  btn12.onclick=function(){
    output12.classList.remove("hide")
    output12.innerHTML = "<ul><li>Web</li><li>Mobile</li><li>Desktop</li></ul>"
   
  }
  btn13.onclick=function(){
    output13.classList.remove("hide")
    output13.innerHTML = "<ol><li>Web</li><li>Mobile</li><li>Desktop</li></ol>"
   
  }
}
if(document.title=="html_classes_id"){
  btn14.onclick=function(){
    output14.classList.remove("hide")
    output14.innerHTML = "<head> <style> .city { background-color: tomato;color: white; border: 2px solid black; margin: 20px;padding: 20px;}</style> </head> <body><div class='city'><h2>London</h2><p>London is the capital of England.</p></div><div class='city'><h2>Paris</h2> <p>Paris is the capital of France.</p></div><div class='city'><h2>Tokyo</h2><p>Tokyo is the capital of Japan.</p></div>"
   
  }
  btn15.onclick=function(){
    output15.classList.remove("hide")
    output15.innerHTML = "<head> <style> #myHeader {   background-color: lightblue;color: black;padding: 40px; text-align: center;}</style></head><body><h1 id='myHeader'>My Header</h1>"
   
  

  }
}
