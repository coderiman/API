// let jsonRes = '{"fact":"The cat has 500 skeletal muscles (humans have 650).","length":51}'
// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);
// let student = {names:"iman Samanta",uid:37};
// console.log(JSON.stringify(student));
let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     // response.json()
//     return response.json();
// }).then((data)=>{console.log(data.fact); return fetch(url)})
// .then((response)=>{
//     return response.json();
// }).then((data2)=>{console.log(data2.fact)})
// .catch((err)=>{
// console.log(err);
// })
let btn  = document.querySelector("button");
let btn2 = document.querySelector("#button2");
btn.addEventListener("click",async ()=>{
    let fact =await getFact();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText=fact;
})
btn2.addEventListener("click",async ()=>{
    let fact =await getImage();
    console.log(fact);
    let img = document.querySelector("#result2");
    img.src=fact;
})
async function getImage()
{   
    try{
        let res =await axios.get(url2);
        console.log(res.data.message);
        // let data = await res.json();
        return res.data.message;
    }catch(e)
    {
        console.log("error-",e);
        return "no face found";
    }
    
    
}
async function getFact()
{   
    try{
        let res =await axios.get(url);
        // console.log(res);
        // let data = await res.json();
        return res.data.fact;
    }catch(e)
    {
        console.log("error-",e);
        return "no face found";
    }
    
    
}
 // Ensure axios is imported

const url4 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url4, config);
        return res.data; 
    } catch (error) {
        console.error("Error fetching joke:", error.message); // Log the error
        return null; 
    }
}
(async () => {
    let hi = await getJokes();
    console.log(hi);
})();

let url5 = "http://universities.hipolabs.com/search?name=";
let country = "nepal";
async function getUniversity()
{
    try{
        let country = document.querySelector("input").value;
        let res = await axios.get(url5+country);
        // console.log(res);
        return res;
    }catch(e)
    {
        console.log(e);
    }
}
let btn4 = document.querySelector("#uni");
btn4.addEventListener("click",async ()=>{
    let university =await getUniversity();
    console.log(university.data);
})