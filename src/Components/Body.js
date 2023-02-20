// Imported useState and useEffect hooks from react.
import { useState, useEffect} from 'react';
// Imported useDispatch and useSelector from react-redux.
import { useDispatch, useSelector } from 'react-redux';
// Imported the 4 reducers from the wordSlice.js file. 
import { resetCount, increaseCount, getNewWord, setResult } from "../Features/wordSlice"; 
// Imported the keyboard to use from the Keyboard.js file.
import Keyboard from "./Keyboard";
// Imported the Display Images to use from the DisplayImages.js file.
import DisplayImages from "./DisplayImages";

/* Created a functional component Body, which uses hooks, functions and 
and variables. */
let Body = () => {
  // Stored the useSelector hook in a variable called 'word'.
  // Using useSelector, allows a randome word to be stored in the variable.
  const word = useSelector((state) => state.word.newWord);
  // Stored the useDispatch hook in a variable called 'dispatchHook'. 
  let dispatchHook = useDispatch();
  // An array storing the letters that have been guessed correctly are added here using the useState hook.
  const [correctLetter, setCorrectLetter] = useState([]);

  /* Created a functional component called startGame that uses the dispatch hook to reset the counter to 0, 
  get a new word, reset the result to an empty string and reset the correctLetter array*/
  const startGame = () => {
    dispatchHook(resetCount());
    dispatchHook(getNewWord());
    dispatchHook(setResult(''));
    setCorrectLetter([]);

    // Added a class name to all of the buttons on the keyboard, so they can be styled in the css file.
    const keyboardButtons = document.getElementsByName("icon-button")
        Array.from(keyboardButtons).forEach((btn) => {
            btn.disabled = false;
            btn.className = "button";
        });
    }

    // Created another functional component called checkAnswer.
    // It checks if what the user pressed on the keyboard was correct or not.
    const checkAnswer = (alphabet) => {
      /* When the button is pressed, and id is created using getElementbyId.
      If the letter is in the word the user is trying to guess, then the button colour is changed to green
      and the letter is added to the correctLetter array.
      If the letter is not in the word the user is trying to guess, then the button colour is changed to
      red and the increaseCount reducer is called. */
      let btn = document.getElementById(alphabet);
      if (word.includes(alphabet)) {
          btn.className = "button-green";
          setCorrectLetter([...correctLetter, alphabet]);    
      } else {
          btn.className = "button-red";
          dispatchHook(increaseCount());             
      }
  }

    /* The buttons are iterated through at the end of the game (won or lost), and the buttons
    are disabled and changed to grey. */ 
    const disableButtons = () => {
      const keyboardButtons = document.getElementsByName('icon-button');
      Array.from(keyboardButtons).forEach((btn) => {
          btn.className = 'button-grey';
          btn.disabled = true;
      });
  }

  /* Unicode numbers are used to create an array of letters (alphabet) from the keys 
  on the users keyboard. */
  let alphabet = [];
    for (let i = 65; i < 91; i++) {
        let char = String.fromCharCode(i);
        alphabet.push(char);
    }

    /* Variable to store the word the user is guessing. The word is split into separate characters, which
    are converted into underscores(_). If the user guesses one of the letters and it is added to the correctLetter
    array, the letter is displayed instead of an underscore. */ 
    let guessWord = word.split('').map(char => correctLetter.includes(char) ? char : '_').join(" ");
    
    // Created a functional component called useEffect. 
    // If the user guesses all of the letters correctly, the full word is displayed to the user and they have won.
    // The result is set to 1 in the setResult reducer as the user has won. 
    // The disableButton function is called to grey out the buttons and stop them functioning.
    useEffect(() => {
        if ((!(guessWord.includes("_"))) && (word !== '')) {
            dispatchHook(setResult(1));   
            disableButtons();
        }
    });

    // The result is retrived from the store using the useSelector hook. 
    // This allows the correct message (won or lost) to be displayed to the user.
    const result = useSelector((state) => state.word.result);
  
  /* startGame() returns a <div> containing a results bar, to tell the user if they have won or lost the game. 
  There is a 'state-container' class added to one of the <div> to allow the images to be displayed. The DisplayImages 
  component receives disableButtons as a prop. The keyboard is displayed and given a class name of 'alpha-container'.
  There is then a New Game button, which when clicked triggers the startGame() function.*/
  return (
    <div >
        {word &&  <div className="results">
            <p>Final Result: {result}</p>
        </div>}
        {word && <div className='state-container'>
            <DisplayImages disableButtons={disableButtons} />
            <p className='state-dash'>{guessWord}</p>
        </div>}
        {word && <div className='alpha-container'>
            {alphabet.map((alphabet, index) =>
                <Keyboard key={index} alphabet={alphabet} checkAnswer={checkAnswer} />
            )}
        </div>}
        <div id="newGame">
            <button className='btn' onClick={startGame}>New Game!</button>
        </div>
    </div>
  );
};

// Exported the component here to ensure it can be imported into the App.js file.
export default Body;
