/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
       dummy := &ListNode{Next: head}
    temp:=dummy.Next
    for temp !=nil && temp.Next != nil{
        if temp.Next.Val==temp.Val{
            temp.Next=temp.Next.Next
        }else{
            temp=temp.Next
        }
    }
    return dummy.Next
}