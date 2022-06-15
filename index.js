const reader = require('xlsx');
const fs = require('fs');

const file = reader.readFile('./convert.xls');
const sheets = file.SheetNames;

var data = [];

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.map((res) => {
    data.push(res);
  });
}

fs.writeFileSync(`./output.json`, JSON.stringify(data), (res) => {
  res && console.log(res);
});
