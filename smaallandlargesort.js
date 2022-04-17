//With Sorting Array find second largest and smallest
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
let n = array.length;
print2largest(array, n);
function print2largest(arr, arr_size)
{
    let i;
    if (arr_size < 2)
    {
        document.write(" Invalid Input ");
	    return;
    }	
array.sort();

		
    for (i = arr_size - 2; i >= 0; i--)
    {

	    if (arr[i] != arr[arr_size - 1])
        {
	        console.log("The second largest element is " + arr[i]);
		    return;
	    }
    }

console.log("There is no second largest element:");
}
print2Smallest(array, n);
function print2Smallest( arr, arr_size)
{
    let i, first, second;
 
    /* There should be atleast two elements */
    if (arr_size < 2)
    {
        document.write(" Invalid Input ");
        return;
    }
 
    first=Number.MAX_VALUE ;
    second=Number.MAX_VALUE ;
    for (i = 0; i < arr_size ; i ++)
    {
        /* If current element is smaller than first
        then update both first and second */
        if (arr[i] < first)
        {
            second = first;
            first = arr[i];
        }
 
        /* If arr[i] is in between first and second
        then update second */
        else if (arr[i] < second && arr[i] != first)
            second = arr[i];
    }
    if (second == Number.MAX_VALUE )
        document.write("There is no second smallest element\n");
    else
        console.log("The smallest element is " + first + " and second "+
            "Smallest element is " + second +'\n');
}
	
