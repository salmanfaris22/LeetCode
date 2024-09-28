func countEven(num int) int {
     f:=0
    for i:=1;i<=num;i++{
        k:=i
        sum:= 0

    for k > 0 {
        sum += k % 10 
        k = k / 10     
    }
    if sum%2==0{
        f++
    }
    }
    return f
}