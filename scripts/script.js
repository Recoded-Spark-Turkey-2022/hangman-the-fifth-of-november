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
  console.log(letterarr)
  lettersI = letterarr.map((letter,index)=>{       // here I applayed map method on the array of letters
    
    let input = document.createElement('div')     // this line to create an element for each letter in the array so if we have word of 5 letters it will make 5 divs
    input.classList.add('boxes')                  // giving a class for each div I create so we can design easly in the css
    input.innerHTML = `<span id = letter-${letter}>_ </span>`       //creating to hold the space that will be letter then and give it an Id of the index 
    document.getElementById('holder').appendChild(input)   // appending the holding element to the divs
    for(i=0;i<letterarr.length;i++){                // I looped here through the array of letters so I can call only the buttons that true
     let lett = document.getElementById(letterarr[i]) //here I called the buttons that equal the letters of the word
     lett.addEventListener('click',e=>{  // here I'm applaying event listener on the buttons
        e.preventDefault()
        // here I am trying to change the span inner text to be the letter but I did't succeded yet
     })
    }
  })
}



