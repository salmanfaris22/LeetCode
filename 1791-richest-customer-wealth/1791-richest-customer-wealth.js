/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
       s=0
    for(i=0;i<accounts.length;i++){
        k=(accounts[i].reduce((acc,e)=>acc+e))
        if(k>s){
            s=k
        }
    }
    return s
};