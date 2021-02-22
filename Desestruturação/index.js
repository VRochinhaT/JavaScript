const numerosPares = [2,4,6];
const numerosImpares = [1,3,5];

// ... faz com que a estrutura seja aberto, coletando assim os dados e não a estrutura em si
const numeros = [...numerosPares, ...numerosImpares];

// desestrutura os arrays fazendo declarações individuais
//const [num1, num2] = [1 , 2]

// pode se usar ... para fazer com q uma variavel pegue todos os valores restantes
const [num1, num2, ...outros] = [1 , 2, 3, 4, 5]

// é possivel definir valores default para variaveis
const [nome1 = 'Ad'] = [];

//adicionar novas propriedades a objetos ja existentes
const pessoa = {
    nome: 'Vitor',
    idade: 25
};
const pessoaComTelefone = {...pessoa, telefone: 12344567789};

//busca propriedades de um objeto pelo nome delas
const { nome } = pessoa;

//é possivel desestruturar dentro de um função
function imprimeDados({nome, idade}) {
    console.log(nome, idade);
}

imprimeDados(pessoa)