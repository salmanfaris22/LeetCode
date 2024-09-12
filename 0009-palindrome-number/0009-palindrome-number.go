func isPalindrome(x int) bool {
    if x<0 || (x>0 && x%10 ==0){
        return false
    }
    y:=0
    for ;y<x;x/=10{
        y=y*10 + x%10
    }
    return y==x || x == y/10
}