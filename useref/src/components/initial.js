import {useRef, useState} from 'react'

const Initial = ()=>{
  const textInput = useRef();
  const [showNext, setShowNext] = useState(true);

  return(
    <div>
      <h1>Ask a question</h1>
      <input
        ref={textInput}
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