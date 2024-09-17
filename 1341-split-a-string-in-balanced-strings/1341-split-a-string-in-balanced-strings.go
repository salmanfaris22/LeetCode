func balancedStringSplit(s string) int {
    
    ans,c:=0,0
    
    for _,l:=range s{
        if l=='L'{
            c++
        }else{
            c--
        }
        if c==0{
            ans++
        }
    }
    return ans
}