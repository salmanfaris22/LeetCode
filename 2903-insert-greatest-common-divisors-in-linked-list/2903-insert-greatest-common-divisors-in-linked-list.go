/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func insertGreatestCommonDivisors(head *ListNode) *ListNode {
    
   
    temp := head
    for temp != nil && temp.Next != nil {
       num:= gcd(temp.Val,temp.Next.Val)
       gcdNode:=&ListNode{Val:num}
       gcdNode.Next=temp.Next
       temp.Next = gcdNode
       temp=gcdNode.Next

    }
    
    return head

   
}
func gcd(a, b int) int {
    
    for b != 0 {
        a, b = b, a % b
    }
    return a
}