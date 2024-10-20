let fruits = ['персик','банан','яблоко'];
console.log (fruits);

console.log(fruits[1])

fruits[1] = 'манго';
console.log (fruits);

console.log(fruits.length);

// Додати ел напочаток
fruits.unshift('воздух','груша');
console.log (fruits);

// додати ел в кінець масиву
fruits.push ('морковка');
console.log (fruits);

// видал елемент напочатку
fruits.shift();
console.log (fruits);

// видал елемент вкінці
fruits.pop();
console.log (fruits);

for(let i=0; i<fruits.length; i=i+1){
	console.log(fruits[i]);
}

let mugivars = ['Luffy','Zoro','Brook','Sandgi'];

let  marks = [11,12,10,2];

for(let i=0; i<mugivars.length; i=i+1){
	console.log(mugivars[i]+' отримує оцінку ' + marks[i]);
}