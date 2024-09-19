func reverse(x int) int {
    s := 1
	if x < 0 {
		s = -1
		x = -x
	}

	r := 0
	for x != 0 {
		r = r*10 + x%10
		x /= 10
	}

	r *= s

	if r < -1<<31 || r > (1<<31)-1 {
		return 0
	}
	return r
}