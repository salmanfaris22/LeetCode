func missingNumber(nums []int) int {
    l:= len(nums)
    slices.Sort(nums)
    for i:=0;i<l;i++{
        if i!=nums[i]{
            return i
        }
    }

    return l
}