var str = "malayalam";
var flag=0;
for(var i =0, j=str.length-1; i<str.length; i++, j--)
{
    if(str.charAt(i)!=str.charAt(j)){
        flag=1;
        break;
    }
}

if(flag==1)
    console.log("It is not palindrome")
else
    console.log("It is a palindrome")