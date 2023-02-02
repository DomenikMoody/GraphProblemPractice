function getNeighbors(row, col, graph) {
let coors = [];
  // Check top
if (row > 0 && graph[row - 1][col] === 1){
  coors.push([row -1 , col])
}
  // Check bottom
if (row < graph.length - 1 && graph[row + 1][col] === 1){
  coors.push([row + 1, col])
}
  // Check left
if (col > 0 && graph[row][col - 1] === 1){
  coors.push([row, col - 1])
}
  // Check right
if (col < graph[row].length && graph[row][col + 1] === 1){
  coors.push([row, col + 1])
}
  // Return neighbors
return coors
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [[row,col]]
  // Put the stringified starting node in visited
  visited.add(stack[0].toString())
  // Initialize size to 0
  let size = 0
  // While the stack is not empty,
  while(stack.length){
    let curr = stack.pop()
    size ++;
    const neighbors = getNeighbors(curr[0], curr[1], graph)
    neighbors.forEach(neighbor => {
      if(!visited.has(neighbor.toString())){
        stack.push(neighbor)
        visited.add(neighbor.toString())
      }
    })
  }
  return size;
    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
