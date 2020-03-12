document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!

  // move function
  let start = document.getElementById("move-button")

  start.addEventListener("click", function(e) {
    console.log('start')
    // let yPosition = parseInt(document.getElementById('robot').attributes[2].value)
    
    setInterval(function() {
        
        move('down')
      }, 1000
    )
    
    window.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
          move('left') // move left
        }
        if (e.key === "ArrowRight") {
          move('right') // move right
        }
        if (e.key === "ArrowUp") {
          move('up') // move up
        }
        if (e.key === "ArrowDown") {
          move('down') // move down
        }
      });
  });


})


// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     move('left') // move left
//   }
//   if (e.key === "ArrowRight") {
//     move('right') // move right
//   }
//   if (e.key === "ArrowUp") {
//     move('up') // move up
//   }
//   if (e.key === "ArrowDown") {
//     move('down') // move down
//   }
// });


