function verificarParOuImpar() {
  const readline = require("readline");
  const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  teclado.question("Digite um numero: ", (numero: string ) => {
    
    let numeroConvertido = parseInt(numero);
    
    if (numeroConvertido % 2 == 0){
        console.log("O numero digitado é PAR");
    } else {
        console.log("O numero digitado é IMPAR");
    }
    teclado.close();
  });
}
verificarParOuImpar()