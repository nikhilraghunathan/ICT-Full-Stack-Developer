var a=5, b=2, c=3;
function biggest(a,b,c)
{
        if(a>b)
        {    if (a>c)
            { console.log("a is biggest"); }
        }
        else
        {    if(b>c)
            { console.log("b is biggest"); }
            else { console.log("c is biggest");}
        }
}
biggest(a,b,c);