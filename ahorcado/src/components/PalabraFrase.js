import './PalabraFrase.css';

function PalabraFrase(){
  return(
    <>
      <div>
        <h1>Adivinar: </h1>
        <div>
        <form>
          <input type="radio"  name="adivinar"/> Palabra
          <br/>
          <input type="radio" name="adivinar"/> Frase
          <br/>
          <button>
            Aceptar
          </button>
        </form>
        </div>
      </div>
    </>
  )
}

export default PalabraFrase;