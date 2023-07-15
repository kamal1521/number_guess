var a=Math.floor(Math.random()*10);

var count=0;

function guessNumber()
{
    var val= document.getElementById("guessfield").value;
    if(val==a)
    {
        document.getElementById("result").textContent="Congratulations!!!!, you got the number in "+(count+1)+"tries.";
    }
    else if(val < a)
    {
        document.getElementById("result").textContent=count+"Oops! Try with a greater number";
        count++;
    }
    else
    {
        document.getElementById("result").textContent=count+"oops! Try with a smaller number";
        count++;
    }
}