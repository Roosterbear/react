// This is a very simple test
describe('Probando modulo ficticio <Describe />', ()=>{
  test('Esto no debe fallar como BIC', ()=>{
   const message1 = 'Hola Mundo';

   const message2 = message1.trim();

   expect( message1 ).toBe( message2 );
  });
});