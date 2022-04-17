//Prime Factorization 
const ps =require("prompt-sync");
let prompt=ps();
let num=prompt("enter number : ");
var arr=[];
var j=0;
for(var i =0 ; i<num;i++)
{
    if(num%i==0)
    {
        console.log("Factores are : "+i);
        arr[j]=i;
        j++;
    }
}
for(var k =0;k<arr.length;k++)
{
    console.log("Array elements : "+arr[k]);
}
