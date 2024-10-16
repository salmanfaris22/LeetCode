func plusOne(digits []int) []int {
     n := len(digits)
    

    for i := n - 1; i >= 0; i-- {
        digits[i]++ 
        if digits[i] < 10 { 
            return digits
        }
        digits[i] = 0  
    }
    

    return append([]int{1}, digits...)
}