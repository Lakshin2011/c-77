var fruits =["mango","litchi","cherry"];
fruits.push("melon");
fruits.unshift("banana");
fruits.pop();
console.log(fruits);
document.getElementById("a1").innerHTML=fruits;
var numbers =["7","20","11"];
var maxime = Math.max.apply(Math,numbers);
document.getElementById("a2").innerHTML=maxime;
