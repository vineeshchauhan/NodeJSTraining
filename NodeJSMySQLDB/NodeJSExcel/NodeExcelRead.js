const XLSX = require('xlsx')
const workbook = XLSX.readFile('PPFAS_Monthly_Portfolio_Report_January_31_2022.xls')
const sheet_name_list = workbook.SheetNames;

//console.log(sheet_name_list)
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);

console.log(data)
console.log(typeof data)

const json = data[0];
for (const prop in data) {
    console.log(prop)
 } 

 data.forEach(function (arrayItem) {
 
    console.log(arrayItem);
    console.log('---------------------');
});