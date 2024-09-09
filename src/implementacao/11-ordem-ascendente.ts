function ordenarAscendente() {
  const readline = require("readline");
  const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  teclado.question("Digite o primeiro numero: ", (primeiroNumero: string) => {
    let numero1 = parseInt(primeiroNumero);
    teclado.question("Digite o segundo numero: ", (segundoNumero: string) => {
      let numero2 = parseInt(segundoNumero);
      teclado.question(
        "Digite o terceiro numero: ",
        (terceiroNumero: string) => {
          let numero3 = parseInt(terceiroNumero);

          let arrayNumeros: number[] = [numero1, numero2, numero3];

          let numeroMaior: number = 0;
          let numeroMenor: number = 0;
          let numeroMeio: number = 0;

          numeroMenor = arrayNumeros[0];
          

          for (let i = 0; i < arrayNumeros.length; i++) {
            if (numeroMaior < arrayNumeros[i]) {
              numeroMaior = arrayNumeros[i];

            } else if ( arrayNumeros[i] < numeroMenor) {
              numeroMenor = arrayNumeros[i];

            } else {
                numeroMeio = arrayNumeros[i];
            }

            teclado.close();
          }
          console.log(numeroMenor,numeroMeio, numeroMaior);
        }
      );
    });
  });
}
ordenarAscendente();
