// Exercise 1 //

// Write variables to get the value of the attributes of the specified link :
// * href
// * hreflang
// * rel
// * target
// * type

let newInput= document.getElementById("dI");
  dI.type; // 'text/html'
  dI.id; // 'dI'
  dI.value; // undefined
  dI.hreflang; // 'en-us'
  dI.href; // 'https://developers.institute/'
  dI.rel; // 'nofollow'
  dI.target; // '_self'


// Exercise 2 //
// Modify the style of the paragraph text (such as fontSize, fontFamily, color, etc. )through javascript code. 
let newStyle= document.getElementById("text");
text.style.background = 'darkcyan';
text.style.fontsize = '5rem';
text.style.fontfamily = 'helvetica';