var a=123456789, rem=0, x=0;
// var rem=0;
// var x=0;
while(a>0)
{
    rem=a%10;
    x=x*10+rem;
    a=parseInt(a/10);
}
console.log(x);