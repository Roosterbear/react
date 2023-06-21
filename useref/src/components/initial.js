// useRef: used to inputs
// useState: to manage data or 'state' of a component
import {useRef, useState} from 'react'

const Initial = ()=>{
  // A reference to useRef, where we are going to store the user data
  const textInput = useRef();
  // In the state, we need 2 values: the state and the set
  // Look that we need a INITIAL state between parenthesis (false)
  const [showNext, setShowNext] = useState(false);

  const handleChange = ()=>{
    if(textInput.current.value.length >= 5) setShowNext(true)
    else setShowNext(false);
  }


  // Now create a validation to launch an error
  // Print the text in a div with other text on button click
  return(
    <div>
      <h1>Ask a question</h1>
      <input
        ref={textInput}
        onChange={handleChange}
        name="question"
        type="text"
        className="form-control"
        />
        {
          showNext &&
          <button className="btn">
            Next
          </button>
        }
    </div>
  )
}

export default Initial;