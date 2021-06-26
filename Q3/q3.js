function reduce(){

    let array=[1,2,3,4,5,6,7]
    let ans = array.reduce((accumulator,sum)=>{return accumulator+sum},0)

    header.innerHTML+=ans
}

let sumbutton = document.getElementById('sum')
let flatbtn = document.getElementById('flatit')
let header = document.getElementById('ans1')


sumbutton.addEventListener('click',reduce)
flatbtn.addEventListener('click',flatit)

//flatten array
function flatit()
{
     const array=[1,2,3,[4,5,[6,7,8,10]]];
     const flattened=array.reduce(function(accumulator, currentValue) {
        return [...accumulator,...currentValue]
      },
      []
    );
     console.log(flattened);
}

flatit();


