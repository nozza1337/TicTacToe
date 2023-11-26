var arr = document.querySelectorAll(".box")
var player=document.querySelector(".player")
var player2=document.querySelector(".player2")
var reset = document.querySelector(".restart")
var counter=0
var player1=0
var playercount2=0
player.innerHTML=`O=${player1}`
player2.innerHTML=`X=${playercount2}`

    for(var i of arr){
    i.addEventListener("click",function(){
        {
            if(this.innerText==""){
                counter%2==1 ? this.innerHTML="X": this.innerHTML="O"
                check()
                counter++
            }
        }
        if(this.innerText=="O"&&this.style.color=="green"){
            player.innerHTML=`O=${player1}`
        }
        else{
            player2.innerHTML=`X=${playercount2}`
        }
    })
}
function check(){
    var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 4, 8], [2, 4, 6], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8] 
      ];
      
      for (var combination of winningCombinations) {
        var [a, b, c] = combination
        var elements = [arr[a], arr[b], arr[c]]
        var innerHTML = elements.map(element => element.innerHTML)
      
        if (innerHTML.every(value => value === innerHTML[0] && value !== "")) {
          elements.forEach(element => element.style.color = "green")
          console.log("win")
          if (innerHTML[0] === "O") {
            player1++
          } else {
            playercount2++
          }
          disable()
        }
      }
  }

function disable(){
    for(var i of arr){
        i.style.pointerEvents = "none"
    }
}
reset.addEventListener("click", function() {
    for(var i of arr) {
        i.innerHTML = ""
        i.style.pointerEvents = "auto"
        i.style.color = "red";
    }
});
