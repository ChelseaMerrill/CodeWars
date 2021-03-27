// Welcome!
// https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
let hello = {english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
function greet(language) {
	for (let key in hello){
    if (language == key){
      return hello[key]
    }
    }
  return 'Welcome'
  }
console.log(greet)



// Problem #6
// Find the difference in age 
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
function differenceInAges(ages){
    let family = []
    let min = Math.min(...ages)
    let max = Math.max(...ages)
      family.push(min)
      family.push(max)
      family.push(max - min)
      return family
    }
    console.log(differenceInAges([29,83,67,53,19,2,96]))
    //[ 2, 96, 94 ]

// Problem #7
// Row Weights
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
function rowWeights(array){
    let totalWeights = []
    let groupA = 0
    let groupB = 0 
      for (let i = 0; i < array.length; i++){
        if (i % 2 === 0){
          groupA += array[i]
        }
        if (i % 2 === 1){
          groupB += array[i]
          }
      } 
          totalWeights.push(groupA)
          totalWeights.push(groupB)
      return totalWeights
  }
  console.log(rowWeights([29,83,67,53,19,28,96]))
  //[ 211, 164 ]



//Higher Order Functions
let numArr = [2, 4, 6, 8, 10]
function OddIndex (arr){
  return arr.map((num, index), index.length % 2 === 1)
}
console.log(OddIndex(numArr))

// Counting sheep
// https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// Expressions matter
// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}

// Squash the bugs
// https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
function findLongest(str) {
  let arr = str.split(' ');
  let newArr = arr.sort(function(a, b){return b.length - a.length})
  return newArr[0].length
}

//Transportation on Vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016
function rentalCarCost(d) {
  if (d < 3){
     return d*40 
  }
  if (d >= 3 && d < 7){
    return ((d*40) - 20)
  }
  if (d>= 7){
    return ((d*40) - 50)
  }
}
console.log(1)
//40

// Triple Trouble:
// https://www.codewars.com/kata/5704aea738428f4d30000914
function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}

function tripleTrouble(one, two, three) {
  let result = '';
  one = one.split('');
  two = two.split('');
  three = three.split('');
  ///_________Also______
  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i];
  }
  return result;
}

// Alternating case:
// https://www.codewars.com/kata/56efc695740d30f963000557
function alternatingCaps(str) {
  let alternate = str.charAt(0).toUpperCase();
  for(let i = 1; i < str.length; i++) {
      let previousChar = str.charAt(i - 1);
      if(previousChar === previousChar.toUpperCase())
          alternate += str.charAt(i).toLowerCase();
      else if(previousChar === previousChar.toLowerCase())
          alternate += str.charAt(i).toUpperCase();
  }
  return alternate;
}

// Find the calculation type
// https://www.codewars.com/kata/5aca48db188ab3558e0030fa
function calcType(a, b, res) {
  if (a+b===res){
    return "addition"
  }
  if (a-b===res){
    return "subtraction"
  }
  if (a*b===res){
    return "multiplcation"
  }
  else{
    return 'division'
  }
}
console.log((calcType(10,5,5)))
//'subtraction')

//FizzBuzz
// https://www.codewars.com/kata/5300901726d12b80e8000498
function fizzbuzz(n){
    if (i % 15 == 0)
      return 'FizzBuzz';
    else if (i % 5 == 0)
      return 'Buzz';
    else if (i % 3 == 0)
      return 'Fizz';
    else
      return i;
  }
console.log(10)
//[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']

// Growth of Population
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
function nbYear(p0, percent, aug, p) {
  let result =[];
  var x = percent/100
  for (let i=0; p0 <= p - 1; p0 += p0 * x + aug){
  currentValue = p0 + p0 * x + aug;
    result.push(currentValue)
  }
  return result.length
 }
console.log(nbYear(1500, 5, 100, 5000))
// 15

//Also***
function nbYear(p0, percent, aug, p) {
 for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
 return y;
}
console.log(nbYear(1500, 5, 100, 5000))
// 15


// https://www.codewars.com/kata/5a3e1319b6486ac96f000049/solutions/javascript
function pairs(ar){
  let count = 0
  for (let i = 0; i < ar.length; i+=2)
  if (Math.abs(ar[i] - ar[i+1]) === 1)
    count += 1
    return count
  };

  // Find Your Villain Name
  // https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript
  function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  
    return 'The' + ' ' + m[birthday.getMonth()] + ' ' + d[birthday.getDate() % 10]
  }
  console.log(getVillainName(new Date("May 3")))
  // "The Despicable Raisin"
  
  // LargestElements
  // https://www.codewars.com/kata/53d32bea2f2a21f666000256
  function largest(n,xs){
    let result = [];
    let sorted = xs.sort(function(a, b){return a - b});
   for (let i = sorted.length-1; i > sorted.length-n-1; i--){
    result.push(sorted[i])
     }
  let final = result.sort(function(a,b){return a-b})
  return final
}
//ALSO
 function largest(n,xs){
     return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}
console.log(largest(2,[10,9,8,7,6,5,4,3,2,1]))
//[9,10]


// Unique string characters
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b
function solve(a,b){
  let string = '';
   for (let i=0; i<a.length;i++){
     if (!(b.includes(a[i])))
     string += a[i]
   }
   for (let i=0; i <b.length; i++){
     if (!(a.includes(b[i])))
       string += b[i]
   }
   return string
 };
 console.log(solve("xyab","xzca"))
 //"ybzc"

 //  Separate basic types
// https://www.codewars.com/kata/60113ded99cef9000e309be3
function separateTypes(input) {
  let x = {number : [], string : [], boolean : []};
    for (let i=0; i<input.length; i++){
      if (typeof input[i] == 'number' ){
        x.number.push(input[i])
      }
      if (typeof input[i] == 'string'){
        x.string.push(input[i])
      }
      if (typeof input[i] == 'boolean'){
        x.boolean.push(input[i])
      }
    }
    for (let key in x)
      if(x[key].length == 0){
        delete(x[key])
      } 
   return x
  }

// Sort by Last Char
//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
function last(x){
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

//https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript
function findDifference(a, b) {
  return Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2])
}

//https://www.codewars.com/kata/5783d8f3202c0e486c001d23
function toNumberArray(stringarray){
  return  stringarray.map(Number)
}

//Elevator Distance: 
//https://www.codewars.com/kata/59f061773e532d0c87000d16
function elevatorDistance(array) {
  var x = 0;
  for (let i = 0; i < array.length - 1; i++) {
    x += Math.abs(array[i] - array[i + 1]);
  }
  return x;
}

//https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e
const gridIndex = (grid, indices) => {
  const x = grid.flat();
  return indices.map(i => x[i-1]).join('');
}