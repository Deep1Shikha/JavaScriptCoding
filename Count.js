let a = document.querySelector(".count1")
a.addEventListener('click', count)

let b = document.querySelector(".count2")
b.addEventListener('click',SumArray)
   


function count(){

    let arr = ["monkey", "donkey", "bunny", "sheep"];
    arr.map(element => {

        let len = element.length;
        document.write(`${element} has length ${len} <br>`)
        
        })

}

function SumArray(){

     const arr = [1,2,3,4,5]
     let ans = arr.reduce( (sum,element) => {
         sum+=element;
         console.log(sum)
         return sum;
     },0)
     document.write(`Total = ${ans}`)
}


//Closure example
function apple(x){
    console.log("You are in Apple");
    function google(y,z) {
     console.log(x*y);
    }
    google(7,2);
    console.log("Back in Apple")
 }
 apple(3);

 //Currying
 // Curried function example
var curriedQuadratic = function(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a * d * c + b * a + d;
            };
        };
    };
};
console.log(curriedQuadratic(7)(3)(4)(5))

/* Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit.

For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
 */

function AdditivePersistence(){
    let num = 99999999999;
     console.log(num)
    let val = num;
    let sum = 0
    let remainder = 0
    let count =0;
   while(val){
        remainder = val%10;
        val = Math.floor(val/10)
        sum = sum+remainder;
        console.log(val+" "+sum)
        if(sum>9 && val == 0)
        {
         count++;
         val = sum;
         sum = 0;
        }
    }
  
  return count+1;
}

let found = AdditivePersistence();
console.log(found)


 







