// code your solution here
function superbowlWin(record) {
    // Use the find() method to locate the first game with a win ("W")
    const win = record.find(game => game.result === "W");
    
    // Return the year of the win if found, otherwise return undefined
    return win ? win.year : undefined;
  }
  
  module.exports = superbowlWin;
  