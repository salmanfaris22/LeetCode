func largestNumber(nums []int) string {
    n := make([]string, len(nums))
	for i, v := range nums {
		n[i] = strconv.Itoa(v)
	}

	sort.Slice(n, func(i, j int) bool {
		return n[i]+n[j] > n[j]+n[i]
	})
	fmt.Println(n)
	if n[0] == "0" {
		return "0"
	}
	return strings.Join(n, "")
}