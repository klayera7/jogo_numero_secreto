alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 13;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 20');
    if(chute == numeroSecreto) {
        alert(`Isso ai, você descobriu o número secreto. "${numeroSecreto}" com ${tentativas} tentativas.`);
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    tentativas++
}
