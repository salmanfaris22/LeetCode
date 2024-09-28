/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
     f=0
    for(i=1;i<=num;i++){
        n=String(i).split("")
        r=n.reduce((acc,e)=> acc+Number(e),0)
        if(r%2==0){
            f++
        }
      
    }
    return f
};