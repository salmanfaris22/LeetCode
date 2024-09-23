func buildArray(nums []int) []int {
    s := make([]int, len(nums)) 
    for i := 0; i < len(nums); i++ {
        s[i] = nums[nums[i]]
    }
    return s

}