
function compile() {
  
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var iframe = document.querySelector("iframe");
 
  
    document.querySelector(".try").onclick = function() {
      iframe.srcdoc=`
        <html>
        <head><style>${css.value}</style></head>
        <body>
          ${html.value}
          <script>${js.value}</script>
        </body>
      </html>
      `
    };
  }
  compile();