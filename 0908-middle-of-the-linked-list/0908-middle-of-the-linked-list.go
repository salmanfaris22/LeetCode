/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func middleNode(head *ListNode) *ListNode {
    temp := head 
    f:=1
 for temp !=nil{
    f++
    temp=temp.Next
 }
 for i:=1 ;i<f/2;i++{
    head=head.Next
 }
 if f%2==0{
    return head
 }
 return head.Next
}