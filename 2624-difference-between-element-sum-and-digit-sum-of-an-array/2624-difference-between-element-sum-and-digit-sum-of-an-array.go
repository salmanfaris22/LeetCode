func differenceOfSum(nums []int) int {
 f := 0
	b := 0

	for _, i := range nums {
		f += i
        b+= sumOfDigits(i)
	
	}
  
	return f-b
}
func sumOfDigits(n int)int{
    sum:=0
    for n>0{
        sum+=n%10
        n /=10
    }
    return sum
}