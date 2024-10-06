/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeElements(head *ListNode, val int) *ListNode {
    dummy:=&ListNode{Next:head}
    temp := dummy
    for temp.Next != nil {
       
        
        if temp.Next.Val == val {
            temp.Next = temp.Next.Next
        }else{
         temp = temp.Next
        }
    } 
    return dummy.Next
}