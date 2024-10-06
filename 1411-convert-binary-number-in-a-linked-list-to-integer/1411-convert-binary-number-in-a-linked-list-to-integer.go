/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 import (
	
	"strconv"
)
func getDecimalValue(head *ListNode) int {
    binaryStr:= ""
    for head != nil {
        binaryStr+=strconv.Itoa(head.Val)
        head=head.Next
    }
   decimalValue, err := strconv.ParseInt(binaryStr, 2, 64)
    if err != nil {
        fmt.Println("Error:", err)
        return 0
    }

    return int(decimalValue)
}