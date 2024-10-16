func removeDuplicates(nums []int) int {
     if len(nums) == 0 {
        return 0
    }
    
    x := 1 
    

    for i := 0; i < len(nums)-1; i++ {
        if nums[i] != nums[i+1] {
            nums[x] = nums[i+1]
            x++
        }
    }
    
    return x
}