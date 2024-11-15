// async function greet()
// {
//     throw "404";
//     // abc.abc();
//     return "hello!";
// }
// greet()
// .then((result)=>{
//     console.log("promise was successfull");
//     console.log("result was:",result)
// })
// .catch((err)=>{
//     console.log("Promise was rejected!");
//     console.log("errr:",err)
// })
// let demo = async ()=>{
//     return 5;
// }
// function getNum()
// {
// //    console.log(5);
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
        
//         resolve(num);
//     },9000)
    
// })
// }
// async function demo() {
//     const num =await getNum(); // Wait for the promise to resolve
//     console.log(num); // Log the resolved value
// }

// demo();
let h1 = document.querySelector("h1");

function changecolor(color) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         h1.style.color = color;
         resolve(`Color was changed to ${color}!`);
      }, 1000);
   });
}

async function demo() {
   let result = await changecolor("red");
   console.log(result); // Print the result for red
   result = await changecolor("orange");
   console.log(result); // Print the result for orange
   result = await changecolor("blue");
   console.log(result); // Print the result for blue
}

demo();



// demo();