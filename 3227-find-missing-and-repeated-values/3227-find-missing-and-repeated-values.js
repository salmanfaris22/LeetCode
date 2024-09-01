/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  grid=grid.flat()
    c=[]
    s = [...new Set(grid) ].sort((a,b)=>a-b)
    for(i=0;i<grid.length;i++){
        for(j=i+1;j<grid.length;j++){
            if(grid[i]===grid[j]){
                c.push(grid[i])
                
            }
        }
        
       
    }
    
    for(i=0;i<grid.length;i++){
    if(s[i]!==i+1){
      i++
        c.push(i)
        break
        
    }
    }
    

    
    return c
};