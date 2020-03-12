document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!

  // move function
  document.addEventListener("keydown", function(e) {
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
  
  
  
  
  
})
