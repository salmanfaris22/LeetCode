/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
      arr=[]
    for(i=start;i<start+n*2;i++){
        arr.push(i)
        i++
        
        if(arr.length===n){
            break
        }
       
    }
    
    return arr.reduce((acc,e)=>acc^e)
};