func search(nums []int, target int) int {
    for i:=0;i<len(nums);i++{
        if nums[i]==target{
            return i
        }
    }
    return -1
}