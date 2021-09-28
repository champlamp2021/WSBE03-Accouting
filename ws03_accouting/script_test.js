const balance =document.getElementById('balance');//คงเหลือ
const money_plus=document.getElementById('money-plus');//รายรับ
const money_minus=document.getElementById('money-minus');//รายจ่าย
const list=document.getElementById('list');//ประวัติธุรกรรม
const form=document.getElementById('form');//เพิ่มธุรกรรม
const text=document.getElementById('text');//ระบุชื่อธุรกรรม
const amount=document.getElementById('amount');//ระบุจำนวนเงิน

//อาเรย์
let dataTransaction=[
    {id:1,text:'ค่าขนม',amount:-100},
    {id:2,text:'เงินเดือน',amount:+20000},
    {id:3,text:'ค่าห้อง',amount:-8000}
];
console.log(dataTransaction);

/*
const Transections=dataTransaction;


function addDataTolist(Transections){
    console.log(Transections);
    //กรองเอาเครื่องหมาย 
    const symbol=Transections.amount<0 ?'-':'+';
    console.log(symbol);
}

function init(){
    transactions.forEach(addDataTolist);
    addDataTolist(Transections);

}
addDataTolist(Transections);
*/