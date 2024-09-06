function determinarMenorMaior() {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(" Digite o primeiro numero: ", (primeiroNumero: string) => {
    let numero1 = parseInt(primeiroNumero);

    rl.question(" Digite o segundo numero: ", (segundoNumero: string) => {
      let numero2 = parseInt(segundoNumero);

      if (numero1 > numero2) {
        console.log(`O numero ${numero1} é maior do que o numero ${numero2} `);
      } else {
        console.log(`O numero ${numero2} é maior do que o numero ${numero1} `);
      }
      rl.close();
    });
  });
    
}
determinarMenorMaior();