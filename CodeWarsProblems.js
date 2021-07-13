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


//https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details
function askForMissingDetails(list) {
  return list.filter(person => {
      for (var key in person) {
          if (!person[key])
              return person.question = 'Hi, could you please provide your ' + key + '.';
      }
  });
}
//Also
function askForMissingDetails(list) {
  return list.filter(function(a){

    for(var key in a){
      if (a[key] === null){
        a['question'] = `Hi, could you please provide your ${key}.`;
        return a;
      }
    }

  });
}

//https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
function sumStr(a,b) {
  return String(Number(a)+Number(b));
}

//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/javascript
function removeChar(str) {
  return str.slice(1, -1);
}

//https://www.codewars.com/kata/57a429e253ba3381850000fb/solutions/javascript
function bmi(weight, height) {
  var formula = (weight / Math.pow(height, 2));
  switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
    
  }
}

//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
function removeExclamationMarks(s) {
  return s.replace(/!/g,'');
 }

 //https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/javascript
 function howManyLightsabersDoYouOwn(name) {
  if(name == 'Zach'){
    return 18
  } else{
  return 0}
}

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return (Math.abs(dadYearsOld-(sonYearsOld*2)))
}

//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function find_average(array) {
  let x =0
  for(let i=0; i<array.length; i++){
    x += array[i]
  } return x / (array.length)
}

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}

//https://www.codewars.com/kata/58649884a1659ed6cb000072
function updateLight(current) {
  if (current == 'green'){
    return'yellow'
  }if (current == 'yellow'){
    return'red'
  }if (current == 'red'){
    return'green'
  }
}

const updateLight = current =>
  ({green: `yellow`, yellow: `red`, red: `green`})[current];

//https://www.codewars.com/kata/6089c7992df556001253ba7d
class Song {
  constructor(title, artist){
    this.title = title
    this.artist = artist
    this.doubleUser = []
  } 
  howMany(array){
    array = array.map(name => name.toLowerCase())
    let newArray = []
    for(let i = 0; i < array.length; i++){
      if(!this.doubleUser.includes(array[i])){
        newArray.push(array[i])
        this.doubleUser.push(array[i])
      }
    }
    return newArray.length
  }
}


//://www.codewars.com/kata/5865a75da5f19147370000c7/javascript

function addArrays(array1, array2) {
  if (array1.length !== array2.length) throw 'not equal';
  return array1.map((a,i) => a+array2[i])
  }
//AND
  function addArrays(arr1, arr2) {
    if(arr1.length !== arr2.length) return error;
    let arr = []
    for(let i = 0; i < arr1.length; i++) {
      arr.push(arr1[i] + arr2[i])
    }
    return arr
  }



 // https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
 function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}

//https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
function logicalCalc(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}

//https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

//https://www.codewars.com/kata/591588d49f4056e13f000001/train/javascript
function HQ9(code) {
  switch(code) {
    case 'H': return 'Hello World!';
    case 'Q': return 'Q';
    case '9': return '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
  }
}

//https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
function unusualFive() {
  return "hello".length;
}

//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
function array(arr){
  var data = arr.split(',');
  data.pop()
  data.shift();
  return data.length ? data.join(' ') : null;
  }

//https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
  function oddCount(n){
    return Math.floor(n/2);
  }

//https://www.codewars.com/kata/57126304cdbf63c6770012bd

function isDigit(s) {
  return parseFloat(s) === Number(s)
}