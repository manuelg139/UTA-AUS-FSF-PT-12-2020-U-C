​
        document.getElementById("button1").addEventListener("click", function(){
​
            document.getElementById("box").style.height = "250px";
            document.getElementById("box").style.removeProperty ("opacity") 
            document.getElementById("box").style.background ="orange"});
​
        document.getElementById("button2").addEventListener("click", function(){
​
            document.getElementById("box").style.background = "blue";
            document.getElementById("box").style.removeProperty ("opacity") 
        });
​
        document.getElementById("button3").addEventListener("click", function(){
​
            document.getElementById("box").style.opacity = "50%";
​
        });
​
        document.getElementById("button4").addEventListener("click", function(){
​
            document.getElementById("box").style.removeProperty ("opacity") ;
            document.getElementById("box").style.background ="orange";
            document.getElementById("box").style.height = "150px";
​
