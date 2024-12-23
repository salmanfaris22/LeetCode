func countEven(num int) int {
    ans:=0
    for i := 2; i <= num; i++ {
		sum := 0
		for x := i; x > 0; x /= 10 {
			sum += x % 10
		}
		if sum%2 == 0 {
			ans++
		}
	}
	return ans
}