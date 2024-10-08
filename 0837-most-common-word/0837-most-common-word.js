/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    arr1 =paragraph.toLowerCase().split(/[^A-z]/)
    arr=[]
     
    for(i=0;i<arr1.length;i++){
        f=0
            
        for(j=0;j<banned.length;j++){
     
            if(arr1[i]==banned[j]){
                f++
               
            
            }  
        }
        if(f==0 && arr1[i]!==""){
            arr.push(arr1[i])
        }
    }
   
    big = ""
    l=0
  
    for(i=0;i<arr.length;i++){
        f=0
        for(j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                f++
                
            } if(f>l){
                l=f
                 
                
                big=arr[i]
            }
                
            }
        }
           
        
    
    return big
};