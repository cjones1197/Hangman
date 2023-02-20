/* Created a functional component called Keyboard(). This creates each of the letters in the alphabet individually. 
alphabet and checkAnswer are passed as props to the functional component. When the button is clicked, this function is called. */
const Keyboard = ({ alphabet, checkAnswer }) => {
    return (
        <div>
            <div className='icon'>
                <button
                    className="button" 
                    id={alphabet} 
                    name='icon-button' 
                    onClick={() => checkAnswer(alphabet)}>{alphabet}
                </button>
            </div>
        </div>
    );
}
// Exported the component here to ensure it can be imported into the Body.js file.
export default Keyboard;