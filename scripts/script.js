const randomWord = ()=>{
    return fetch('https://random-word-api.herokuapp.com/word?number=1') //fetching from the api that generate random word every time
    .then(res=>res.json()) // turning the result of fetching to json  
}
randomWord().then(x) // I told the brwoser here to wait until the fetching is done then invok the function
let words;
let letterarr;
let lettersI;  // here I declared some variables in the global scope so I have access to them from outsid the function 
let indexnum;

function x(random){    // this is the main function
  words = random.toString();       // here I turned the result of fetching to be string
  console.log(words)
  letterarr = words.split('')      // here I made an array of the letters of the string that we got frome the fetching
  // here I applayed map method on the array of letters
  lettersI = letterarr.map((letter,index)=>{       
    let input = document.createElement('div')
    input.setAttribute('id',`letter-${letter}`)     // this line to create an element for each letter in the array so if we have word of 5 letters it will make 5 divs
    input.classList.add('boxes')                  // giving a class for each div I create so we can design easly in the css
    input.innerHTML = `<span id =${index}>_ </span>`       //creating to hold the space that will be letter then and give it an Id of the index 
    document.getElementById('holder').appendChild(input)  // appending the dives we create to the main div which called holder(check the html to understand better)
  })
  //after I finished of creating the elements that I will use now I will start working on making events to the letter buttons so if the user clicked the right letter it will appear in the blanks we made for before(spans)
  let spans = document.querySelectorAll('.boxes span') // getting all the spans that will hold the letters of the word 
  document.addEventListener('click',e=>{     // this event Listener for all the buttons
      if(e.target.className === 'letter-btn'){   // this if statmente to make the event listen for the letters buttons only
        e.target.classList.add('clicked') // adding new class for the buttons that we clicked so we can design them after the clicking
      let clickedLetter = e.target.value  //getting the value of the clicked letter which is the letter it self
      letterarr.forEach((letter,letterIndex) => {   // looping in the array of the random word letters to see if the clicked letter is in the word or not
        
        if(clickedLetter==letter){          //checking if the clicked letter equal any letter of the array
        spans.forEach((span,spanIndex)=>{   // if the statment is true I will loop on the array of spans to change the inner text of the span
          if(spanIndex === letterIndex){    // when the place of the span equal the place of the letter
            span.innerHTML = clickedLetter  // change this span inner text to be the letter it self
          }
        })
        }
        
      });
      }
  })
  //now we finished the clicking letters part and we can move to the next part
  
  
    
  
   
}



