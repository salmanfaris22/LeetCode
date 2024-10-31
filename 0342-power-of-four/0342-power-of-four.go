func isPowerOfFour(n int) bool {
  if n == 1 {
        return true
    }
    if n < 4 {
        return false
    }

    for n > 4 {
        if n % 4 != 0 {
            return false
        }
        n /= 4
    }
    return n == 4
}