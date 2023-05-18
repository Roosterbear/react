// We run yarn test
// test is the name in package.json 
// inside "scripts":{ "test":"jest" }


test('Esta prueba no debe fallar', ()=>{
  // To see the error, change 1 to 0
  if(1===0){
    throw new Error('No se puede dividir por cero');
  }
});