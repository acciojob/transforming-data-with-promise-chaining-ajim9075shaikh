//your JS code here. If required.
const btn=document.getElementById("btn").addEventListener("click", clickFunction)
const input=document.getElementById("ip").value
let finalResult;
let promise=new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
promise
   .then(function(result) {
    return result * 2;
  })
  .then(function(result) {
    return result - 3;
  })
  .then(function(result) {
    return result / 2;
  })
  .then(function(result) {
    finalResult = result + 10;
    console.log(finalResult); // Print final result
  });
.catch(function(error) {
    console.log('Error occurred!', error);
  });