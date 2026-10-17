# VocaBuddy

VocaBuddy 是一個以 Python 開發的簡易英文單字學習程式，提供單字瀏覽、單字數量統計及隨機測驗功能。本專案使用 Google Colab 進行開發，並透過 GitHub 進行版本控制與小組協作。

## 組員與分工

| 姓名 | GitHub | 分工 |
| --- | --- | --- |
| 李東諺 | @kcryanlee | 建立 Repository、專案設定、組員分工|
| 劉品宏 | @hung-Liu | 新增單字、單字測驗程式、README 整理|
| 張峻源 | @anbychang | 單字測驗功能、最終確認 |
| 顏孟呈 | @chasyen | 作業繳交 |

## 功能

目前 VocaBuddy 提供以下功能：

- 顯示所有英文單字及中文解釋
- 顯示目前單字總數
- 隨機抽取單字進行中文翻譯測驗
- 判斷答案是否正確，答錯時顯示正確答案

## 單字資料

目前單字庫包含：

| English | 中文 |
| --- | --- |
| apple | 蘋果 |
| book | 書 |
| computer | 電腦 |
| competition | 競賽 |
| program | 程式 |
| python | 蟒蛇 |
| integer | 整數 |

## 使用方式

1. 透過下方連結在 Google Colab 開啟 `VocaBuddy.ipynb`。
2. 執行 Notebook 中的程式。
3. 依照選單輸入對應的數字：

```text
1 顯示單字
2 顯示單字總數
3 單字測驗
4 離開
```

選擇「單字測驗」後，程式會隨機抽取一個英文單字，使用者輸入中文意思後，程式會立即判斷答案。

## Google Colab

[VocaBuddy.ipynb](https://colab.research.google.com/github/kcryanlee/vocabuddy-group-14/blob/main/VocaBuddy.ipynb)

## E2 網頁版

`ytp-e2/app/` 是可在瀏覽器使用的單字卡版本，提供：

- 間隔複習：答對後延長下次複習時間，答錯則立即回到複習佇列。
- CSV 匯入與匯出：支援 `en,zh,category` 格式；分類欄可省略。自行匯入的單字會保存在瀏覽器本機。
- 快速測驗：從目前單字庫產生四選一中文題目。
- 離線使用：以 Service Worker 快取頁面與核心資源。

先確認 Node.js 可用，再執行核心邏輯測試：

```text
node ytp-e2/app/test.js
```

要在瀏覽器開啟，請從 `ytp-e2/app/` 啟動本機伺服器：

```text
python -m http.server 8000
```

接著開啟 `http://localhost:8000`。不要直接雙擊 `index.html`，因為 Service Worker 需要 localhost 或 HTTPS。

## 專案結構
```
vocabuddy-group-14/
├── README.md
└── VocaBuddy.ipynb
```

`VocaBuddy.ipynb` 為主要程式，`README.md` 則包含專案說明、組員分工及執行方式。
