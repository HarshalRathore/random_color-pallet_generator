var array = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var color = "#";
function clr_generator() {
    for(var i=1;i<=6;i++) {
        color+=array[Math.floor(Math.random()*16)];
    }
}
document.getElementById("btn").addEventListener("click", function() {
    for(var j=1;j<=5;j++) {
        clr_generator();
        document.getElementById(j).style.backgroundColor = color;
        document.getElementById(j+"_hex").innerHTML = color;
        color = "#";
    }
    clr_generator();
    document.getElementById("h1").style.color = color;
    document.getElementById("h2").style.color = color;
});
    