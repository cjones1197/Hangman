// Imported useDispatch and useSelector from react-redux.
import { useDispatch, useSelector } from 'react-redux';
// Imported the setResult reducer from the wordSlice.js file. 
import { setResult } from "../Features/wordSlice"; 
// Imported the useEffect hook from react.
import { useEffect } from "react";

// Imported all of the images showing the different stages in hangman.
import state1 from '../Images/state1.GIF'
import state2 from '../Images/state2.GIF'
import state3 from '../Images/state3.GIF'
import state4 from '../Images/state4.GIF'
import state5 from '../Images/state5.GIF'
import state6 from '../Images/state6.GIF'
import state7 from '../Images/state7.GIF'
import state8 from '../Images/state8.GIF'
import state9 from '../Images/state9.GIF'
import state10 from '../Images/state10.gif'
import state11 from '../Images/state11.GIF'

// Created functional component called DisplayImages. 
// If an incorrect letter is guessed, then one of the images is displayed.
// The props 'disableButtons' comes from the Body.js file.
const DisplayImages = ({ disableButtons }) => {
    // The useSelector hook is used here to get the number of incorrect guesses.
    const count = useSelector((state) => state.word.count);
    // Stored the useDispatch hook in a variable called 'dispatchHook'. 
    let dispatchHook = useDispatch();
    // The image is retrieved here using getElementById and it is stored in a variable.
    let img = document.getElementById('state-img');

    /* A series of switch-case statements are used here to match the correct image to 
    the number of incorrect guesses from the user. */
    if (img) {
        switch (count) {
            case 0:
                img.src = state1;
                break;
            case 1:
                img.src = state2;
                break;
            case 2:
                img.src = state3;
                break;
            case 3:
                img.src = state4;
                break;
            case 4:
                img.src = state5;
                break;
            case 5:
                img.src = state6;
                break;
            case 6:
                img.src = state7;
                break;
            case 7:
                img.src = state8;
                break;
            case 8:
                img.src = state9;
                break;
            case 9:
                img.src = state10;
                break;
            case 10:
                img.src = state11;
            /* If the user loses the game, then the disableButtons() function is 
            called and the keyboard is disabled. */
            disableButtons();              
                break;
            default:
                img.src = state1;
                break;
        }
    };

    // If the user has had ten guesses, the store is updated using the setResult reducer.
    useEffect(() => {
        if (count === 10) {
            dispatchHook(setResult(0));
        } }, [count, dispatchHook]);

    // A <div> is returned with the image that matches the number of incorrect guesses from the user.
        return (
            <div>
                <img className='state-img' id='state-img' src={state1} alt='hangman drawing' />
            </div>
        );
    };
    
// Exported the component here to ensure it can be imported into the Body.js file.
export default DisplayImages;
