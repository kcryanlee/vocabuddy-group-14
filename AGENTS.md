## 1. 這是什麼專案

VocaBuddy 是英文單字學習專案，包含 Python Notebook 與 E2 網頁版。
- `VocaBuddy.ipynb`：單字瀏覽、數量統計、翻譯測驗與隨機抽字。
- `ytp-e2/app/`：原生 HTML、CSS、JavaScript 網頁，提供間隔複習、快速測驗、CSV 匯入匯出與離線快取。
- 網頁版以 localStorage 保存複習紀錄與自行匯入的單字。

## 2. 怎麼跑起來

- Notebook：透過 `README.md` 的 Google Colab 連結開啟並執行程式。
- Notebook 實際選單為 1–5，輸入 5 離開；README 的選單說明尚未同步。
- 網頁版：在倉庫根目錄執行 `python3 -m http.server 8000 --bind 127.0.0.1 --directory ytp-e2/app`。
- 瀏覽器開啟 `http://127.0.0.1:8000/`；Service Worker 需要本機回環位址或 HTTPS。
- 核心邏輯測試：確認 Node.js 可用後，在倉庫根目錄執行 `node ytp-e2/app/test.js`。
- `test.js` 使用 Node.js 內建 `assert`，檢查複習排程與 CSV 邏輯。

## 3. 程式碼慣例

- 沿用現有程式碼格式，只修改任務相關檔案，不自行加入套件。
- JavaScript 使用分號、camelCase 函式與變數名稱，常數使用大寫加底線。
- 獨立 JavaScript 檔案主要使用兩個空白縮排；HTML 內嵌程式依所在層級縮排。
- 字串主要使用雙引號；需要插值時使用模板字串。
- 每個新增的 JavaScript 函式上方，加上「// 用途：」開頭的繁體中文說明。
- `words.js` 的單字物件使用 `en`、`zh`、`category`、`example` 欄位。
- `srs.js` 管理複習排程，`csv.js` 管理 CSV 解析與驗證。
- `index.html` 包含樣式、畫面操作與事件處理；`sw.js` 管理離線快取。
- 共用邏輯目前透過 `typeof module !== "undefined"` 判斷是否提供 CommonJS 匯出。

## 4. 協作規矩

- 使用繁體中文溝通，先閱讀相關檔案，再依任務範圍修改。
- 使用者要求先看草稿或確認時，先提供內容，確認後才寫入。
- 保留既有資料與功能，避免覆蓋使用者已完成的修改。
- 修改後依影響範圍執行核心測試或瀏覽器操作檢查。
- 修改完成後說明改了哪些檔案、做過哪些檢查；未經確認，不自行 commit 或 push。
- 無法執行的檢查需明確說明，不宣稱已通過。

## 5. 不要做的事

- 不做任務以外的重構、整批格式調整或檔案變更。
- 不自行加入套件、框架、建置流程或測試工具。
- 不任意刪除既有單字、Notebook 內容或使用者資料。
- 不直接雙擊 `index.html` 作為 Service Worker 功能的驗證方式。
- 不把尚未實作的函式、工具或指令寫成專案現況。
