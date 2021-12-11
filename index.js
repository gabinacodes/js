console.log('hello pearls');
for (var i = 5; i > 0; i--) {
    alert(i);
    
}
document.getElementById("pre").style.display = "none";
document.getElementById("next").style.display = "none";
document.getElementById("appear").style.display = "none";
document.getElementById("input").value = "Enter the magic word";
document.getElementById("input").style.fontStyle = "italic"
document.getElementById("inPut").value = "Enter your name ";
document.getElementById("inPut").style.fontStyle = "italic"
document.getElementById("input").style.color = "grey";
document.getElementById("inPut").style.color = "grey"
document.getElementById("dis").style.display = "none";
document.getElementById("div1").style.display = "none"
        document.getElementById("div2").style.display = "none"
        document.getElementById("div3").style.display = "none"
document.getElementById("div1").onclick = function name(params) {
    document.getElementById("div1").style.display = "none"
}
document.getElementById("div2").onclick = function name(params) {
    document.getElementById("div2").style.display = "none"
}
document.getElementById("div3").onclick = function name(params) {
    document.getElementById("div3").style.display = "none"
    document.getElementById("next").style.display = "block"
}
document.getElementById("input").onclick = function name(params) {
     var type = ""
    

    document.getElementById("input").value = type
    document.getElementById("input").style.color = "black";
    document.getElementById("input").style.fontStyle = "normal"
}
document.getElementById("inPut").onclick = function name(params) {
    var type = ""
    
   document.getElementById("inPut").value = type
   document.getElementById("inPut").style.color = "black";
    document.getElementById("inPut").style.fontStyle = "normal"
}
document.getElementById("besti").innerHTML="WELCOME!!!";
document.getElementById("btn").onclick =function name(params) {
    var nam = ""
    nam = document.getElementById("inPut").value
    document.getElementById("best").innerHTML ="Hi " + nam + "!";
    document.getElementById("div1").style.display = "block"
    document.getElementById("div2").style.display = "block"
    document.getElementById("div3").style.display = "block"
   ;
    
    
    
}
document.getElementById("next").onclick = function name(params) {
    document.getElementById("pre").style.display = "flex"
    document.getElementById("appear").style.display = "inline"
    document.getElementById("next").style.display = "none" 
}
document.getElementById("pre").onclick = function name(params) {
    
    document.getElementById("appear").style.display = "none"
    document.getElementById("div1").style.display = "block"
        document.getElementById("div2").style.display = "block"
        document.getElementById("div3").style.display = "block"
        document.getElementById("pre").style.display = "none"
       
}
document.getElementById("btn3").onclick = function(){
    var x = document.getElementById("input").value;
    var s = "getta"
    if(x ==s){
        
        
        document.getElementById("besti").style.fontSize = "40px";
        document.getElementById("besti").style.color = "darkgrey";
        document.getElementById("dis").style.display = "block";
        document.getElementById("appear").style.display = "none";
        document.getElementById("getta").style.display = "none";

    }else{
        alert("Sorry, try again!")
    }
}
document.getElementById("btn2").onclick = function name(params) {
    var x = Math.floor((Math.random()*5)+1)
    var y = document.getElementById("in").value;
    if(x == y){
        alert("correct")
    }else{
        alert("oops try again!")
    }
}
var myArray = new Array();
myArray[0] = "pizza";
myArray[1] ="chocolate";
var x = 1;  
console.log(myArray);