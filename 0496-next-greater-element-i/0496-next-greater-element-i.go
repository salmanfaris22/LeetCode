func nextGreaterElement(nums1 []int, nums2 []int) []int {
       arr:=[]int{}
    for i:=0;i<len(nums1);i++{
        f:=0
         p:=0
        for j:=0;j<len(nums2);j++{
           
            if nums1[i] == nums2[j] || f>=1{
                f++
                 if nums1[i]<nums2[j]{
                     arr = append(arr,nums2[j])
                     p++
                     break
                     
                 }
            }
            
            
        }
        if p==0{
                arr=append(arr,-1)
                
            }
    }
    
    return arr
}