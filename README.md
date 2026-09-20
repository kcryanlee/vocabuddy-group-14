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

## 專案結構
```
vocabuddy-group-14/
├── README.md
└── VocaBuddy.ipynb
```

`VocaBuddy.ipynb` 為主要程式，`README.md` 則包含專案說明、組員分工及執行方式。
