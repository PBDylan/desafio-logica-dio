// Declarando as variáveis
let nome_usuario = "Pedrinho";
let nivel_xp = 3257;

// Criando categoria para utilizar switch case
let categoria;
if (nivel_xp <= 1000)
    categoria = "Ferro";
else if (nivel_xp <= 2000)
    categoria = "Bronze";
else if (nivel_xp <= 5000)
    categoria = "Prata";
else if (nivel_xp <= 7000)
    categoria = "Ouro";
else if (nivel_xp <= 8000)
    categoria = "Platina";
else if (nivel_xp <= 9000)
    categoria = "Ascendente";
else if (nivel_xp <= 10000)
    categoria = "Imortal";
else
    categoria = "Radiante";  // Caso o nivel_xp seja maior que 10000

// Estrutura de decisão para mensagens
switch (categoria) {
    case "Ferro":
        console.log("O Herói de nome " + nome_usuario + " está no nível de Ferro");
        break;
    case "Bronze":
        console.log("O Herói de nome " + nome_usuario + " está no nível de Bronze");
        break;
    case "Prata":
        console.log("O Herói de nome " + nome_usuario + " está no nível de Prata");
        break;
    case "Ouro":
        console.log("O Herói de nome " + nome_usuario + " está no nível de Ouro");
        break;
    case "Platina":
        console.log("O Herói de nome " + nome_usuario + " está no nível de Platina");
        break;
    case "Ascendente":
        console.log("O Herói de nome " + nome_usuario + " está no nível de Ascendente");
        break;
    case "Imortal":
        console.log("O Herói de nome " + nome_usuario + " está no nível de Imortal");
        break;
    case "Radiante":
        console.log("O Herói de nome " + nome_usuario + " está no nível de Radiante");
        break;
    default:
        console.log("O Herói de nome " + nome_usuario + " está em um nível desconhecido.");
        break;
}
