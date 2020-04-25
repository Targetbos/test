export function table() {
    var content = document.querySelector(".content");
    var input = document.createElement("input");
    input.classList.add("input-arg");
    input.placeholder = "Начни с 1";
    let btn = document.createElement("button");
    btn.classList.add("btn-arg");
    btn.innerHTML = "Проверить свой комп на производительность";
    content.append(input);
    content.append(btn);
    btn.onclick = () => {
            let value = document.querySelector(".input-arg").value;
            let div = document.createElement("div");

            var table = data => `<table class="table">${data.map(e=>
                                `<tr>${e.map(e=>
                                    `<td>${e}</td>`).join('')}
                                </tr>`).join('')}
                            </table>`; 
        div.innerHTML = table(generator(parseInt(value)));
        content.append(div);
    }
    
}
// генератор математической индукции
function generator(arg){
    var st = 2 ** arg;
    let arrY = [];
    let str = 1;
    for(let i = 1; i<arg+1; i++){
        arrY.push(gen(st, str, arrY));
        str*=2;
    }
    str = 1;
    let arrX = [];
    for(let f=1; f< st+1; f++){
        arrX.push(gen((2**st), str, arrX)); 
        str*=2;
    }
    let arrFull = uniArr(arrY, arrX, arg);
    return arrFull;
}
// Генератор булево
var gen=(st,strArr, m)=>{
    var inc1 = (arr)=>{ arr.push(1); return arr;}
    var inc0 = (arr)=>{ arr.push(0); return arr;}
    let p = 0;
    m = [];
    while (p<((st/2)/strArr)){
        for(let i=0;i<strArr;i++){
            inc0(m);
        }
        for(let d=0;d<strArr;d++){
            inc1(m);
        }
        p++;
    }   
    return m;
}
// объединение массивов
function uniArr(arr1, arr2, arg){
    arr2 = reversArr(arr2,arg);    
    arr1.map(e=> e.map((t,r)=> {arr2[r].push(t); return arr2[r];}));
    arr2 = reversArr(arr2,arg);
    let arrNum = createNumber(arg);
    let arr3 = []
    arr3 = arr3.concat(arrNum,arr2); 
    return arr3;
}
// реверс массивов
function reversArr(arr2,arg){
    for (let i= 0; i<2**arg; i++){
        arr2[i].reverse();   
    } 
    return arr2;
}
// создание порядкового номера для таблицы
function createNumber(arg){
    let number = 2**(2**arg);
    let arrNumber = [];
    let arrNumber2 = [];
    for(let i = 1; i<arg+1; i++){
        arrNumber.push(i);
    }
    for(let d=1; d<number + 1; d++){
        arrNumber.push(d);
    }
    arrNumber2.push(arrNumber);
    return arrNumber2;
}