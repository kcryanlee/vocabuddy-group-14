const assert = require("assert");
const { scheduleReview, countDue } = require("./srs.js");
const { parseCsv, validateWords } = require("./csv.js");

assert.deepStrictEqual(scheduleReview(1, true, 100), { box: 2, due: 102 });
assert.deepStrictEqual(scheduleReview(5, true, 100), { box: 5, due: 116 });
assert.deepStrictEqual(scheduleReview(4, false, 100), { box: 1, due: 101 });
assert.strictEqual(countDue([{ due: 99 }, { due: 100 }, { due: 101 }], 100), 2);

const rows = parseCsv('en,zh\n"binary search",二分搜尋\narray,陣列');
assert.deepStrictEqual(rows[0], { line: 2, fields: ["binary search", "二分搜尋"] });
assert.deepStrictEqual(validateWords(rows, [{ en: "array", zh: "陣列" }]).words, [{ en: "binary search", zh: "二分搜尋", category: "未分類", example: "" }]);
assert.strictEqual(validateWords(parseCsv("loop,迴圈\nLoop,重複"), []).errors.length, 1);
assert.deepStrictEqual(parseCsv("English,Chinese,Category\nstack,堆疊,資料結構")[0].fields, ["stack", "堆疊", "資料結構"]);

console.log("VocaBuddy tests passed");
