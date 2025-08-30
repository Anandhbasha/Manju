// // var
// var b=10
// var b= 60
// console.log(b);
// {
//     var d =10
// }
// console.log(d);

// {
//     let c=20
// }

// console.log(c);

// ++,--
// let num1 = 10
// console.log(++num1);
// console.log(num1);

// let value = 10
// let val1 = "10"
// console.log(value==val1);
// console.log(value===val1);

// // && 
// console.log(12<15 && 15<20 && 16>20);
// console.log(12<15 && 15<20 || 16>20);

// // ternary opeartor
// age = 17
// console.log(age>=18?"Elgible":"Not Eligible");

// // if
// if(age>=18){
//     console.log("Eliglible");    
// }

// let today = "Saturday"

// switch(today){
//     case "Monday":
//         console.log("Today is monday");
//         break
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break
//     case "Thursday":
//         console.log("Today is Thursday");
//         break
//     case "Friday":
//         console.log("Today is Friday");
//         break
//     case "Saturday":
//         console.log("Today is Saturday");
//         break
//     default:
//         console.log("Today is Sunday");       
// }


// loops
// while
// do while
// for
// let arr1 = [20,60,44,55,33]
// for(let x=0;x<arr1.length;x++){
//     console.log(arr1[x]);    
// }
// for of
// for(let x of arr1){
//     console.log(x);    
// }
// // for in 
// for(let x in arr1){
//     console.log(arr1[x]);    
// }
// foreach
// arr1.forEach((x)=>console.log(x))


// types of function
// // arrow
//    const arr=()=>console.log("Arrow is working");
   
//     arr()

// // IFFI
// const IFF =(function(){
// })
// IFF()
// // Ananoums
// const anous =function(){
// }
// anous()


// Map
let arr1 = [20,60,44,55,33] 
// arr1.map((x)=>console.log(x))
// reduce
// let total=0
// for(let i=0;i<arr1.length;i++){    
//     total+=arr1[i] //0+20 = 20+60=80+44=122+55 = 177+33 = 210
//     console.log(total);
// }
// console.log(total);

let total = arr1.reduce((acc,sum)=>acc+sum)
console.log(total);

// filter
console.log(arr1.filter((x)=>x%2==0))

// find
finds = arr1.find((x)=>x==22)
console.log(finds);

// async

let newPromise = async()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!a){
        console.log("Unable to connect APi");        
    }
    const data = await a.json()
    console.log(data);
    
}
newPromise()

// DOM
let btn = document.createElement('button')
btn.innerHTML = "Click"
btn.style.marginLeft="100px"
document.body.append(btn)

btn.addEventListener("click",()=>{
    btn.innerText = "Clicked"
})

let a = document.getElementById('clicks')
const btnClick = ()=>{
    a.textContent = "Deleted"
}


