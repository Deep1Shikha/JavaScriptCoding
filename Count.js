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
            return function(x) {
                return a * d * c + b * a + d;
            };
        };
    };
};

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

console.log(curriedQuadratic(2)(3)(4)(5))

 







