func singleNumber(nums []int) int {
var sum int
    for i:=0;i<len(nums);i++{
        sum^=nums[i]
    }
     return sum
}