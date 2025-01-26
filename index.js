let x=0
let y = 0
function decr() {
      y-=1
     console.log(y)
    document.getElementById("count").innerText=y+x
}
function incr() {
    x+=1
    console.log(x)
    document.getElementById("count").innerText=x+y
}
function rst() {
    x=0
    y=0
    console.log(x,y)
    document.getElementById("count").innerText=x
}