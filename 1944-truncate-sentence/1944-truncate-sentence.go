func truncateSentence(s string, k int) string {
      arr := strings.Split(s, " ")
      var str string
      for i,v:=range arr{
          str += v
          if(i==k-1){
              return str
          }
          str+=" "
      }
      return str
}