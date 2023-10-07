/////////////////////// Q5 /////////////////////

let arr1 = [1,2,3];
function power(arr1){
    let arr2 = [];
    for(let i=0;i<arr1.length;i++){
       arr2.push(2 ** arr1[i]);
    }
    return arr2;

}
// let output =power(arr1);
// console.log(output);

// Q5 using forEach method
// arr1.forEach(function(number) {
//     console.log(2 ** number);
// });

//Q5 using map()
// let mapp = arr1.map(function q5(element){
//     return 2 ** element;
// });
// console.log(mapp);

/////////////////////// Q6 /////////////////////
let num = [4,9,10,"Shahd"];

let arr3= num.map(function evenOdd(elemnt){
   if(elemnt % 2 == 0){
      elemnt = 'even';
   }
   else if(isNaN(elemnt)){
      elemnt = 'N/A';
   }
   else if(elemnt % 2 !== 0){
      elemnt = 'Odd';
   }
   return elemnt;
});

// console.log(arr3);
/////////////////////// Q7 /////////////////////
let arr4 =[];
for(let i =0 ; i<=4 ; i++){
    let num =  prompt("please enter numbers");
    arr4.push(num);
}
let arr= arr4.map(function fizzbuzz(elemnt){
     if(elemnt % 3 == 0 && elemnt % 5 == 0){
        elemnt = 'FizzBuzz';
     }
    else if(elemnt % 3 == 0){
      elemnt = 'Fizz';
   }
   else if(elemnt % 5 == 0){
      elemnt = 'Buzz';
   }
   
   
   return elemnt;
});
console.log(arr);

/////////////////////// Q7 /////////////////////
let names = [];
for(let i =0 ; i<=4 ; i++){
    let nm =  prompt("please enter the names");
    names.push(nm);
}
const allNames = [];
names.forEach((name) => {
  allNames.push(name);
});

console.log(allNames);

/////////////////////// Q8 /////////////////////
// function series(){
// let objArr = [
// {   
//    "id": 70111470,
//    "title": "Die Hard",
//    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//    "rating": [4.0],
//    "bookmark": []
// } ,
// {
//    "id": 654356453,
//       "title": "Bad Boys",
//       "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//       "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": [5.0],
//       "bookmark": [{ id: 432534, time: 65876586 }]
// } ,
// {
//    "id": 65432445,
//    "title": "The Chamber",
//    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//    "rating": [4.0],
//    "bookmark": []
// } 
// ];

// let arrpairs = [];

// objArr.forEach((item) => {
//   arrpairs.push({ id: item.id, title: item.title });
// });

// return arrpairs;

// let res = series();
// console.log(res);
// let arrpairs = objArr.map((item) => { ///////////// Q9 using map
//    return { id: item.id, title: item.title };
//  });

//  return arrpairs;
// }

// let res = series();
// console.log(res); 


/////////////////////// Q10 ///////////////////// using filter
function filterSeriesByRating(series, maxRating) {
   return series.filter((item) => {
     return item.rating[0] < maxRating;
   });
 }
 
 let objArr = [
   {
     "id": 70111470,
     "title": "Die Hard",
     "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
     "rating": [4.0],
     "bookmark": []
   },
   {
     "id": 654356453,
     "title": "Bad Boys",
     "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
     "rating": [5.0],
     "bookmark": [{ id: 432534, time: 65876586 }]
   },
   {
     "id": 65432445,
     "title": "The Chamber",
     "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
     "rating": [4.0],
     "bookmark": []
   }
 ];
 
 let filteredSeries = filterSeriesByRating(objArr, 5); 
 console.log(filteredSeries);


/////////////////////// Q11 /////////////////////

let arrr= ["Java", "JavaScript", "Python", "C++", "PHP"];
let longestStr = arrr.reduce(function (longest, current) {

  if (current.length > longest.length) {
    return current; 
  } else {
    return longest; 
  }
}, "");

console.log(longestStr);

/////////////////////// Q12 /////////////////////

let pokemonData =[
   {
     "game_index": 76,
     "version": {
       "name": "red",
       "url": "https://pokeapi.co/api/v2/version/1/"
     }
   },
   {
     "game_index": 76,
     "version": {
       "name": "blue",
       "url": "https://pokeapi.co/api/v2/version/2/"
     }
   },
   {
     "game_index": 76,
     "version": {
       "name": "yellow",
       "url": "https://pokeapi.co/api/v2/version/3/"
     }
   },
   {
     "game_index": 132,
     "version": {
       "name": "gold",
       "url": "https://pokeapi.co/api/v2/version/4/"
     }
   },
   {
     "game_index": 132,
     "version": {
       "name": "silver",
       "url": "https://pokeapi.co/api/v2/version/5/"
     }
   },
   {
     "game_index": 132,
     "version": {
       "name": "crystal",
       "url": "https://pokeapi.co/api/v2/version/6/"
     }
   },
   {
     "game_index": 132,
     "version": {
       "name": "ruby",
       "url": "https://pokeapi.co/api/v2/version/7/"
     }
   },
   {
     "game_index": 132,
     "version": {
       "name": "sapphire",
       "url": "https://pokeapi.co/api/v2/version/8/"
     }
   },
   {
     "game_index": 132,
     "version": {
       "name": "emerald",
       "url": "https://pokeapi.co/api/v2/version/9/"
     }
   },
   {
     "game_index": 132,
     "version": {
       "name": "firered",
       "url": "https://pokeapi.co/api/v2/version/10/"
     }
   },
   {
     "game_index": 132,
     "version": {
       "name": "leafgreen",
       "url": "https://pokeapi.co/api/v2/version/11/"
     }
   },
   {
     "game_index": 132,
     "version": {
       "name": "diamond",
       "url": "https://pokeapi.co/api/v2/version/12/"
     }
   }];
   function displayName(pokemonData) {
      return pokemonData.reduce(function (namesArray, item) {
        namesArray.push(item.version.name);
        return namesArray;
      }, []);
    }
    
    let pokemonNames = displayName(pokemonData);
    console.log(pokemonNames);
    

/////////////////////// Q13 /////////////////////
var employee = {
   firstName: 'Rawan',
   sayHi: function(){
       console.log("Hi Coach ! " + this.firstName);
   }
}

employee.sayHi() //  Hi Coach ! Rawan , Bcause we used this.firstName of the object so that it print (this value) 


// *********************

var employee = {
   firstName: 'Rawan',
   info: {
       hasCar: true,
       hasPet: true
   },
   printInfo: function(){
       console.log("Car owner? " + this.hasCar);
   }
}

employee.printInfo() // Car owner? Undefined // because hasCar is in the scope of the info object and  when we called it in printinfo it will be undefined we should put this.info.hasCar so we can access it 



///***************************** */

var employee = {
   firstName: 'Rawan',
   info: {
       hasCar: true,
       hasPet: true,
       printAddress: function(){
           return this.data.address;
       },
       data: {
           address: "Zarqa"
       }
   },
}

employee.info.printAddress(); // Zarqa , because we used the this.data to access the addrees of the object data then called it 
