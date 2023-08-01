const getcolor = ()=>{
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcolor = "#" + randomnumber.toString(16);
document.body.style.backgroundColor = randomcolor;
document.getElementById("colorcode").innerHTML = randomcolor;
   navigator.clipboard.writeText(randomcolor)
}
document.getElementById("btn").addEventListener("click",getcolor)
getcolor()
