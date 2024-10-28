/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
 v=[]
   for(let i of s){
        if(i=="i"){
            v.reverse()
        }else{
            v.push(i)
        }
   }
   return v.join("")
};