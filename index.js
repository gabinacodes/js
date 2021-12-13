console.log('hello pearls');
    

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
    
     document.getElementById("besti").style.display = "none"
    document.getElementById("input").value = type
    document.getElementById("input").style.color = "black";
    document.getElementById("input").style.fontStyle = "normal"
    document.getElementById("besti").style.display = "none"
}
document.getElementById("inPut").onclick = function name(params) {
    var type = ""
    
   document.getElementById("inPut").value = type
   document.getElementById("inPut").style.color = "black";
    document.getElementById("inPut").style.fontStyle = "normal"
}

document.getElementById("btn").onclick =function name(params) {
    var nam = ""
    nam = document.getElementById("inPut").value
    document.getElementById("best").innerHTML ="Hi " + nam + "!";
    document.getElementById("best").style.fontSize = "41px"
    document.getElementById("best").style.color = "#64236461"
    document.getElementById("best").style.fontFamily = "cursive"
    document.getElementById("besti").style.textAlign = "center"
    document.getElementById("best").style.margin = "2% 3%" 
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
        
        
        document.getElementById("dis").style.display = "block";
        document.getElementById("appear").style.display = "none";
        document.getElementById("getta").style.display = "none";

    }else{
        document.getElementById("besti").style.display = "block"
        document.getElementById("besti").style.fontSize = "12px";
        document.getElementById("besti").style.color = "red";
        document.getElementById("besti").innerHTML = "Try Again";
       
        document.getElementById("input").style.border = "2px solid red";
        
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