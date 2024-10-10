func nextGreaterElements(nums []int) []int {
   arr:=[]int{}
    for i:=0;i<len(nums);i++{
        c:=0
        num:=-1
        for j:=i;j<len(nums);j++{
            if nums[i]<nums[j]{
               c++

                  num=nums[j]
                    break
               
            }
        }
       if c==0{
          for j:=0;j<len(nums);j++{
            if nums[i]<nums[j]{
               c++

                  num=nums[j]
                    break
               
            }
        }
       }
             arr = append(arr,num)
        
    }
    return arr
}