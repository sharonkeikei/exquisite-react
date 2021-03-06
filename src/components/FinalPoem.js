import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = ({finalPoemSubmitted, isFinalPoemVisible, showFinalPoem}) => {
  

  const finalPoemDisplayed = finalPoemSubmitted.map((sentence , i) => {
    return (
      <p key={i}>
        {sentence}
      </p>
    )
  })
  //conditional rendering depending on whether the final poem is showing or not
  return (
    <div className="FinalPoem">
      {isFinalPoemVisible && (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          {finalPoemDisplayed}
        </section>
      )}

      {!isFinalPoemVisible && (
        <div className="FinalPoem__reveal-btn-container">
          <button
            className="FinalPoem__reveal-btn" 
            onClick={showFinalPoem}
          >
            We are finished: Reveal the Poem
          </button>
        </div>
      )}
    </div>
  );
}


FinalPoem.propTypes = {
  finalPoemSubmitted: PropTypes.array.isRequired,
  isFinalPoemVisible: PropTypes.bool.isRequired,
  showFinalPoem: PropTypes.func.isRequired,
}



export default FinalPoem;
