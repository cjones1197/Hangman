/* Created a functional component called Instructions(). This gives the user instructions (help) on how to play the game.
When the page first loads, these instructions will be displayed. If the user wants to access the instructions (request help) during 
the game, they can click on the "instructions" button and a <h2> will be displayed with <p> elements below. */
const Instructions = () => {
  return (
      <div>
          <h3>Instructions for Online Hangman</h3>
          <p>Aim: To correctly guess the unknown word. Each blank space (underscore) is where there should be a letter, and you need to guess which letter should be there.</p>
          <p>Warning: You can only pick an incorrect letter ten times.</p>
          <p>Instructions:</p>

          <div className="instructions-list">
              <ol>
                  <li>Click the 'New Game' button at the bottom of the screen.</li>
                  <li>To guess a letter, click it on the screen.</li>
                  <li>If you guess one of the letters in the word, the blank space will change into that letter.</li>
                  <li>If you guess incorrectly, then an image is displayed to show you your 'score'.</li>
                  <li>If you mangage to guess all of the letters in the word correctly (and before 10 incorrect guesses), then you win!</li>
                  <li>If you pick an incorrect letter ten times, then an image will be displayed and you lose!</li>
                  <li>To come back to this section at any time click on the "Instructions" button.</li>
                  <li>To hide this section, click on the "Hide Instructions" button.</li>
                  <li>If you want to start over at any time, just click the 'New Game' button.</li>
              </ol>
          </div>

      </div>
  ); 
};

// Exported the component here to ensure it can be imported into the App.js file.
export default Instructions;
