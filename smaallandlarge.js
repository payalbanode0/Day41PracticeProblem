//Array 2nd largest and smallest
let r = Math.floor(Math.random() * 10 );
let r2= Math.floor(Math.random() * 10 );
let r3 = Math.floor(Math.random() * 10 );
let r4 = Math.floor(Math.random() * 10 );
let r5 = Math.floor(Math.random() * 10 );
let r6 =  Math.floor(Math.random() * 10 );
let r7 = Math.floor(Math.random() * 10 );
let r8 = Math.floor(Math.random() * 10 );
let r9 = Math.floor(Math.random() * 10 );
let r10 = Math.floor(Math.random() * 10 );
console.log("r : "+r+" r2: "+r2+" r3: "+r3+" r4: "+r4+" r5: "+r5+" r6: "+r6 +" r7: "+r7+" r8: "+r8+" r9: "+r9+" r10 : "+r10)
var array = [r,r2,r3,r4,r5,r6,r7,r8,r9,r10];
var i=0,j=0;
var lar,lar2nd;
lar=array[0];
for(i=1;i<array.length;i++)
{
    if(array[i]>lar)
    {
        lar=array[i];
        j=i; 
    }
}
console.log("largest is : "+lar);
lar2nd=array[0];
for(i=1;i<array.length;i++)
{
    if(i==j)
    {
        continue;
    }
    else if(array[i]>lar2nd)
    {
        lar2nd=array[i];
    }
}
console.log("2nd Largest element is : "+lar2nd)
var k,sml=array[0],sml2=array[0];
for(i=1;i<array.length;i++)
{
    if(array[i]<sml)
    {
        sml=array[i];
        k=i; 
    }
}
console.log("smallest element is : "+sml)
for(i=1;i<array.length;i++)
{
    if(i==k)
    {
        continue;
    }
    else if(array[i]<sml2)
    {
        sml2=array[i];
    }
}
console.log("2nd Smallest is : "+sml2);
