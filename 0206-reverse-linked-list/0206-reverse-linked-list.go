/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
    var prev *ListNode = nil
	temp := head
	var next *ListNode = nil
	for temp != nil {
		next = temp.Next
		temp.Next = prev
		prev = temp
		temp = next
	}

     return prev

}