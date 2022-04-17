//Sum of value = 0
const ps =require("prompt-sync");
let prompt=ps();
let num1= prompt("Enter a number for Magic Number : ");
if(isMagic(num1))
console.log(num1 + " Magic Number");
else console.log(num1 + " Not a Magic Number");

function isMagic( n)
{
    var sum = 0;
    while(n>0 || sum > 9)
    {
        if(n ==0)
        {
            n =sum;
            sum =0;
        }
        sum += n%10;
        n /= 10;
    }
    return (sum = 1);
}
