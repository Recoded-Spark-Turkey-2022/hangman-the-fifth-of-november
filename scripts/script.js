
const randomWord = ()=>{
  return fetch('https://random-word-api.herokuapp.com/word?number=1') //fetching from the api that generate random word every time
  .then(res=>res.json()) // turning the result of fetching to json  
}
randomWord().then(x);
function x(random){ 
     // this is the main function
  const letters="abcdefghijklmnopqrstuvwxyz";
let lettersArray=Array.from(letters);
let lettersContainer=document.querySelector(".letters")
lettersArray.forEach(letter =>{
let span= document.createElement("span");
let theLetter=document.createTextNode(letter)
span.appendChild(theLetter);
span.className="letter_box";
lettersContainer.appendChild(span);
});
 let words = random.toString();       // here I turned the result of fetching to be string
  console.log(words)
 let letterArray = Array.from(words);
document.querySelector(".game-info").innerHTML=letterArray;

let letterGuessContainer=document.querySelector(".letter_guess");
letterArray.forEach(letter =>
  {
    let wordSpan=document.createElement("span");
    letterGuessContainer.appendChild(wordSpan);
  });
   
  let guessSpan=document.querySelectorAll(".letter_guess span")
 
  let wrongs=0;
  let theDraw=document.querySelector(".draw");

  document.addEventListener("click", (e) =>{
    let status=false;
    if(e.target.className ==='letter_box'){
      e.target.classList.add("clicked");
      let theClicked=e.target.innerHTML;
      let chosen =letterArray;
    chosen.forEach((wordLetter,wordIndex) =>{
      if(theClicked==wordLetter){
        status=true;
      guessSpan.forEach((span,spanIndex)=>{
         if(wordIndex === spanIndex){
         span.innerHTML = theClicked;

         }
        });
      }
       
      });
      if (status!==true){
        wrongs++;
        theDraw.classList.add(`wrongs-${wrongs}`);
      }
  }

  });
}

