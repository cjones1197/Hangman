// Imported createSlice from the redux toolkit.
import { createSlice } from "@reduxjs/toolkit";
// Imported the wordList containing the array of words to use.
import wordList from '../wordList'


 // Created a slice here called wordSlice. It is given a name of "word".
 // The slice contains an initial state.
 export const wordSlice = createSlice({
    name: "word",
    initialState: {
        'newWord': '',
        'count': 0,
        'result': '',
    },
    // Contained within an object, there are 4 reducers below: 
    reducers: {
        // The resetCount reducer takes state as a parameter.
        // It resets the count to 0, when a new game is started.
        resetCount: (state) => {
            state.count = 0;
        },
        // The increaseCount reducer takes state as a parameter.
        // The count increases by one when there is an incorrect guess.
        increaseCount: (state) => {
            state.count += 1;
        },
        // The getNewWord reducer takes state as a parameter.
        // It gets a new word from the word list imported at the top of this page. 
        // To get a random word from the word list, Math.floor and Math.random are used.
        // The word is then converted into upper case and stored in newWord.
        getNewWord: (state) => {
            let newWord = wordList[Math.floor(Math.random() * wordList.length)];
            newWord = newWord.trim().toUpperCase();
            state.newWord = newWord;
        },
        // The setResult reducer takes state and action as parameters.
        // It displays a message to the user depending on the outcome of their game.
        // If the user loses, they are told the correct word.
        // If the user wins, they are told that they have won.
        // Otherwise, the result is set to a blank.
        setResult: (state, action) => {
            switch (action.payload) {
                case 0:
                    state.result = `Sorry, you lost this time! The correct word is: ${state.newWord}`;
                    break;
                case 1:
                    state.result = 'You are a winner! Congratulations!';
                    break;
                default:
                    state.result = "";
                    break;
            }
        },
          
    }
 }
 );

 // Exported the reducers so that they can be used.
 export const {resetCount, increaseCount, getNewWord, setResult} = wordSlice.actions;
 export default wordSlice.reducer;
