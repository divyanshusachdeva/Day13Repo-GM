var num = 454534;
var temp = num;
var remainder, reverse=0;

while(num>0)
{
    remainder = num%10;
    reverse = reverse*10 + remainder;
    num = parseInt(num/10);
}

if (temp == reverse)
    console.log("It is a palindrome.")
else
    console.log("It is not a palindrome")