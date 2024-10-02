func firstMissingPositive(nums []int) int {
     arr:=[]int{}
  s:=0
sort.Ints(nums)
    for _,v:=range nums{
    if(v>0 && s!=v){
        s=v
        arr=append(arr,v)
    }
   }
  
   for i:=0;i<len(arr);i++{
       if arr[i]!=i+1{
          return i+1
       }
         
   }

  return s+1
}