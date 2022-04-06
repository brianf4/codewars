function removeEveryOther() {

let newArr = [];

arr.forEach((element, index) => index % 2 === 0 ? newArr.push(element) : null);
}