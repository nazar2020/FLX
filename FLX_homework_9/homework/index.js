// Your code goes here
/*const date = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
]; */

/*1*/

const findType=(arguments)=>{
    let type = [];
    for(let i = 0;i<arguments.length;i++){
        type.push(typeof(arguments[i]));
    }
    return type;
} 
findType();
/*2*/

const executeforEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++){
        func(arr[i]);
    }
}

/*3*/
const map = (arr, func) => {
    let newArr = [];
    executeforEach(arr,(el)=>{
        newArr.push(func(el));
    });
    return newArr;
}
// it goes to map
// const editor = (el) => {
//     return el + 3;
// }

/*4*/
const filter = (arr, func) => {
    let newArr = [];
    executeforEach(arr,(el) => {
		if (func(el)) {
			newArr.push(el);
		}
	});
    return newArr;
}

// it goes to filter
// const filterFunc = (el) => {
//     if (el > THREE)
//     return el
// }

/*5*/
const getAmountOfAdultPeople=(data)=> {
    return filter(data,el=> {
        return el.age > 18;
    }).length;
}
 getAmountOfAdultPeople();
/*6*/
const getAdultBananaGreenLovers = (data) => {
    return map(filter(data, el => {
        return (el.age >= 18 && el.favoriteFruit === 'banana'&&el.eyeColor==='green');
    }), el => {
        return el.name;
    })
}

getAdultBananaGreenLovers();
/*7*/

const getKeys = (obj) => {
    let newArr = [];
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            newArr.push(key);
        }
    }
    return newArr;
}
getKeys();
/*8*/
const getValues = (obj) => {
    let newArr = [];
    for (let value in obj){
        if(obj.hasOwnProperty(value)){
            newArr.push(obj[value]);
        }
    }
    return newArr;
}
getValues();

 /*9*/

// const showFormattedDate = (obj) => {
//     locale = 'en-us'
//     month = obj.toLocaleString(locale, {month: 'short'})
//     return `It is ${obj.getDate()} of ${month}, ${obj.getFullYear()}`
// }
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const showFormattedDate = (date) => {
    return `It is ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`
}
showFormattedDate();
/*10*/
const isEvenYear=(date)=> {
    let year = date.getFullYear();
    return year % 2 === 0;   
}
isEvenYear();

/*11*/
const isEvenMonth=(date)=> {
    let month = date.getMonth() + 1;
    return month % 2 === 0;
}
isEvenMonth();