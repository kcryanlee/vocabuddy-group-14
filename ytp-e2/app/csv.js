function splitCsvLine(line) {
  const fields = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (quoted && character === '"' && line[index + 1] === '"') {
      value += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === "," && !quoted) {
      fields.push(value.trim());
      value = "";
    } else {
      value += character;
    }
  }

  fields.push(value.trim());
  return fields;
}

function parseCsv(text) {
  return text
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .map((line, index) => ({ line: index + 1, fields: splitCsvLine(line) }))
    .filter((row) => row.fields.some((field) => field))
    .filter((row) => {
      const first = row.fields[0].toLowerCase();
      const second = row.fields[1].toLowerCase();
      return !(row.line === 1 && ["en", "english"].includes(first) && ["zh", "chinese"].includes(second));
    });
}

function validateWords(rows, existingWords) {
  const known = new Set(existingWords.map((word) => word.en.toLowerCase()));
  const words = [];
  const errors = [];

  for (const row of rows) {
    if (row.fields.length < 2 || row.fields.length > 3) {
      errors.push({ line: row.line, reason: "每列必須有 en,zh，分類欄可省略" });
      continue;
    }

    const en = row.fields[0].toLowerCase();
    const zh = row.fields[1];
    if (!en || !zh) {
      errors.push({ line: row.line, reason: "英文與中文都不能空白" });
    } else if (known.has(en)) {
      errors.push({ line: row.line, reason: `重複單字：${en}` });
    } else {
      known.add(en);
      words.push({ en, zh, category: row.fields[2] || "未分類", example: "" });
    }
  }

  return { words, errors };
}

if (typeof module !== "undefined") module.exports = { splitCsvLine, parseCsv, validateWords };
