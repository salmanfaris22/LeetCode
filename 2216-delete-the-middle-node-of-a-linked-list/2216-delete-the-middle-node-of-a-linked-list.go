/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteMiddle(head *ListNode) *ListNode {
     slow, fast := head, head
    if head==nil || head.Next==nil{
        return nil
    }

 
     var prev *ListNode
    for fast!=nil && fast.Next != nil{
        prev = slow
        slow = slow.Next
        fast=fast.Next.Next
    }
    if prev !=nil{
      prev.Next = slow.Next
    }
   
    return head
}