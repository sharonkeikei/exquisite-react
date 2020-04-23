import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  
  const[formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  const fieldComponents = () => {
    return (
      props.fields.map(field => {
        if (typeof field === 'string') {
          return (
            <div>{field}</div>
          )
        } else {
          return (
            <input
              key={field.key}
              placeholder={field.placeholder}
              name={field.key}
              value={formFields[field.key]}
              type="text" 
              onChange={onInputChange}
            />
            )
        }
      })
    )
  }


  const onInputChange = (event) => {
    console.log(event.target);
    const newFormField = {
      ...formFields
    }

    newFormField[event.target.name] = event.target.value;
    setFormFields(newFormField);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    let sentence = '';
    props.fields.forEach(field => {
      if (typeof field === 'string') {
        sentence += field;
      } else {
        sentence += formFields[field.key]
      }
    });
    // Put all the words together in a sentence.
    props.onSubmitCallback(sentence);
    // reset state
    setFormFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    })


  } 

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit} >
        <div className="PlayerSubmissionForm__poem-inputs">
          {fieldComponents()}
        </div>
        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
