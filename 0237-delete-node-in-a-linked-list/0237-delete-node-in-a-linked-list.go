/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteNode(node *ListNode) {

    if node==nil || node.Next == nil{
        return
    }
  
            node.Val=node.Next.Val
            node.Next=node.Next.Next
      

      
    
}