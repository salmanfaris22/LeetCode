class Solution {
  List<int> getConcatenation(List<int> nums) {
    List<int>arr=[...nums,...nums];
    return  arr;
  }
}