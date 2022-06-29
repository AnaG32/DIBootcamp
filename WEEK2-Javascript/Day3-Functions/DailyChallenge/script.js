// Daily Challenge //
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

let x, y, str;

for(x=1; x <=8; x++)
{
   for (y=1; y < x; y++)
     {
    str=str+("*");        
      }
 console.log(str);
 document.write(str +"<br>");
 str='';    
}