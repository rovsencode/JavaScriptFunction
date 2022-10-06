const personRovshen={
    firstname: "Rovshan",
    lastname: "Khalilov",
    salary: 500,
}
const personTunar = {
    firstname: "Tunar",
    lastname: "Aliyev",
    salary: 400,
    }
const personFerid = {
    firstname: "Ferid",
    lastname: "Hacizade",
    salary: 600,
}
var sum = 0;
  var avarage = 0;
const Works = [personRovshen, personTunar, personFerid];

function Avarage(arr) { 
    Works.forEach(function (workers) {
    console.log(workers);
})
    for (let i = 0; i < arr.length; i++){
        sum += Works[i].salary;
     }
    return sum/Works.length;
}

// Works.forEach(function (workers) {
//     console.log(workers);
// })
console.log(Avarage(Works));


// Sum();
//  console.log(sum);


// function myForEach(arr,callback) {
//     for (let i = 0; i < arr.length; i++){
//         callback(arr[i]);
//       
    
// }
// console.log(myForEach(Works, callback));