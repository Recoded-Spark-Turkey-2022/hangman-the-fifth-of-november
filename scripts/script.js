const randomWord = ()=>{
    return fetch('https://random-word-api.herokuapp.com/word?number=1') //fetching from the api that generate random word every time
    .then(res=>res.json()) // turning the result of fetching to json  
}
randomWord().then(x) // I told the brwoser here to wait until the fetching is done then invok the function
let words; //a variable to store the random word 
let letterarr;  // a variable to store array for the letters of the random word   
let livesnum = 5;     // this is the number of lives when the game will start
function x(random){    // this is the main function
  words = random.toString();       // here I turned the result of fetching to be string
  console.log(words)
  letterarr = words.split('')      // here I made an array of the letters of the string that we got frome the fetching
  // here I applayed map method on the array of letters
  letterarr.map((letter,index)=>{       
    let input = document.createElement('div')      // this line to create an element for each letter in the array so if we have word of 5 letters it will make 5 divs
    input.setAttribute('id',`letter-${letter}`)     // giving an Id to each element we create(the id will be letter-(the letter in the array))
    input.classList.add('boxes')                  // giving a class for each div I create so we can design easly in the css
    input.innerHTML = `<span id =${index}>_ </span>`       //creating to hold the space that will be letter then and give it an Id of the index 
    document.getElementById('holder').appendChild(input)  // appending the dives we create to the main div which called holder(check the html to understand better)
  })
  //after I finished of creating the elements that I will use now I will start working on making events to the letter buttons so if the user clicked the right letter it will appear in the blanks we made for before(spans)
  let spans = document.querySelectorAll('.boxes span') // getting all the spans that will hold the letters of the word 
  document.addEventListener('click',e=>{     // this event Listener for all the buttons
    e.preventDefault();  
    if(e.target.className === 'letter-btn'){   // this if statmente to make the event listen for the letters buttons only
        let status = false     // this variable for check if the letter is true or false(this one will help us on setting the lives and drawing the hangman if the letter is false )
        e.target.classList.add('clicked') // adding new class for the buttons that we clicked so we can design them after the clicking
        let clickedLetter = e.target.value  //getting the value of the clicked letter which is the letter it self
        letterarr.forEach((letter,letterIndex) => {   // looping in the array of the random word letters to see if the clicked letter is in the word or not
        
          if(clickedLetter==letter){          //checking if the clicked letter equal any letter of the array
           status =true;                      //so if the letter user click is right no lives will be descreased
           spans.forEach((span,spanIndex)=>{   // if the statment is true I will loop on the array of spans to change the inner text of the span
             if(spanIndex === letterIndex){    // when the place of the span equal the place of the letter
               span.innerHTML = clickedLetter  // change this span inner text to be the letter it self
              }
            })
          } 
        });
       if(status === false){ livesnum--       // each time the  user clicking the false letter then the statuse will be fauls and the lives number will be descreased by 1
         if(livesnum>4){lives.innerText = `You Have ${livesnum} lives`}  
         else  if(livesnum===4){lives.innerText = `You Have ${livesnum} lives`, img.innerHTML = `<img id="img2" src="images/the stand.png" alt="hanging stand">`} // for first mistake show me the first picture 
         else  if(livesnum===3){lives.innerText = `You Have ${livesnum} lives`, img.innerHTML = `<img id="img2" src="images/the head.png" alt="hanging stand">`} // for second mistake show me the second picture
         else  if(livesnum===2){lives.innerText = `You Have ${livesnum} lives`, img.innerHTML = `<img id="img2" src="images/the hand.png" alt="hanging stand">`} // for third mistake show me the third picture
         else if(livesnum === 1){lives.innerText = `This is your last chance`, img.innerHTML = `<img id="img2" src="images/the legs.png" alt="hanging stand">`}  // for forth mistake show me the forth picture
         else if(livesnum < 1){lives.innerHTML = `Game over<br>good luck next time`,
          img.innerHTML = `<img id="img2" src="images/last phase.png" alt="hanging stand">`, //showing the last image
           btns = document.querySelectorAll('.letter-btn'),btns.forEach(btn=>btn.classList.add('clicked'))} //if the lives number is smaller than 1 this meane that the game is over and all the letter-btn will not work any more 
        };
        
        
      }
  })
  
  let lives = document.createElement('p')  //creating the paragraph of counting lives
  document.getElementById('counter').appendChild(lives)  // adding the paragraph to the counter div
  lives.innerText = `You Have 5 lives`   //assigning the default massege for the counting lives

  let img = document.getElementById('img-container') //calling the images countainer
  
  let rest = document.getElementById('rest')   // calling the play again button
  rest.addEventListener('click',e=>{          // setting event listener to the button
    e.preventDefault()
    window.location.reload();               // reloding the page when the button clicked so the user can start again
  });
  
   
}



