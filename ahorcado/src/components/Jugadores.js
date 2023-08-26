
function Jugadores(){
  return(
    <>
      <div>
        <h1>Juagadores: </h1>
        <form>
          <input type="radio" name="jugadores" /> 
          <strong>1:</strong> Te daremos una frase al azar
          <br/>
          <input type="radio" name="jugadores" /> 
          <strong>2: </strong> El primer jugador proporciona la frase, el segundo la adivina
        </form>
      </div>
    </>
  )
}