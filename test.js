
let fullname = "sneka priya"

let boyfreinds = ["lingaswaran","lokesh kanakaraj","joyal"];
setTimeout(function (){
    console.log(["lingaswaran","lokesh kanakaraj","joyal"])
},0)


let fav_food = "curd rice";

console.log("name is "+fullname+" boyfreinds are "+boyfreinds+" favourite food is "+fav_food);
console.log(`name is ${fullname} boyfriends are ${boyfreinds} favourite food is ${fav_food}`)
// function greet(name){
//     console.log("GOOD MORNING "+name);
// }

// greet("linges")


// function trigger(greet){
//     let name = "lingeshwaran";
//     greet(name);
// }


let linga = function (ling){
    console.log(ling)
}

linga("raj kishore")


function add(sum,num1,num2){
    sum(num1,num2)
}
add(function (num1,num2){
    console.log(num1+num2)
},10,10)





// let add = function (num1,num2){
//     console.log(num1+num2)
// }
// add(10,10)




function icecream(makeicecream,flavour){
    makeicecream(flavour)
}
icecream(function(flav){
    console.log(`${flav} flavoured icecream`)
}
,"cotton candy");

// for(let i = 0; i < boyfreinds.length; i++){
//     console.log(boyfreinds[i])
// }


//array methods map filter foreach
function foreach(func){
    let boyfreinds = ["lingaswaran","lokesh kanakaraj","joyal"];
    func(boyfreinds)
}

boyfreinds.forEach(function (sneka){
    console.log(sneka);
})
// 