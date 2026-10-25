const DEFAULT_WORDS = [
  { en: "algorithm", zh: "演算法", category: "演算法", example: "This algorithm sorts the data quickly." },
  { en: "variable", zh: "變數", category: "基礎語法", example: "Store the score in a variable." },
  { en: "function", zh: "函式", category: "基礎語法", example: "Call the function with two numbers." },
  { en: "loop", zh: "迴圈", category: "基礎語法", example: "Use a loop to visit every item." },
  { en: "debug", zh: "除錯", category: "開發流程", example: "Debug the program before submitting it." },
  { en: "compile", zh: "編譯", category: "開發流程", example: "Compile the source code first." },
  { en: "recursion", zh: "遞迴", category: "演算法", example: "Recursion solves the smaller subproblem." },
  { en: "condition", zh: "條件", category: "基礎語法", example: "The condition must be true to continue." },
  { en: "integer", zh: "整數", category: "資料型別", example: "An integer has no decimal part." },
  { en: "array", zh: "陣列", category: "資料結構", example: "The array contains five values." },
  { en: "efficient", zh: "有效率的", category: "演算法", example: "We need an efficient solution." },
  { en: "practice", zh: "練習", category: "學習", example: "Practice a little every day." },
  { en: "binary search", zh: "二分搜尋", category: "演算法", example: "Use binary search to find a value in a sorted array." },
  { en: "sorting", zh: "排序", category: "演算法", example: "Sorting arranges the numbers in ascending order." },
  { en: "greedy", zh: "貪婪的", category: "演算法", example: "A greedy algorithm chooses the best option at each step." }
];

if (typeof module !== "undefined") module.exports = { DEFAULT_WORDS };
