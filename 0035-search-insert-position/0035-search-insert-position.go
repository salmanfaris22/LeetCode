func searchInsert(nums []int, target int) int {
s := -1
	for i := 0; i < len(nums); i++ {
		if nums[i] < target {

			s = i

		}
	}

	return s + 1
    }