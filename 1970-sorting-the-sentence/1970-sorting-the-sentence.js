/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
        s=s.split(" ")
    s.sort((a,b)=>a[a.length-1]-b[b.length-1])
   c=''
   for(i of s){
       i=i.split("").splice(0,i.length-1).join("")
       c+=i+" "
   }
   return c.trim()
};