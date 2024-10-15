func findMaxConsecutiveOnes(nums []int) int {
  f := 0
  max:=0
	for _, x := range nums {
		if x == 1 {
			f++
     	if f>max{
                max=f
            } 
		} else {
			f = 0
		}
	}

	return max
}