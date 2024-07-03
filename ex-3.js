// เริ่มเขียนโค้ดตรงนี้ 

function multiplicationTable(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        let rowResult = "";
        for (let j = 1; j <= n; j++) {
             rowResult += (i * j) + "\t";
        } 
        result += rowResult + "\n";
    }
    return result;
}
console.log(multiplicationTable(5));



