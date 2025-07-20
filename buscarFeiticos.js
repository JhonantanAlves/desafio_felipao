//O Mestre dos Magos quer um dicionário digital de feitiços.
// O sistema deve permitir que o usuário busque um feitiço pelo nome e receba sua descrição correspondente. Caso o feitiço não esteja no dicionário,
// o sistema deve informar que "Feitico nao encontrado".

let feiticos= {}

feiticos.Lumus = {
    descricao: "Cria uma luz na ponta da varinha"
}
feiticos.Expelliarmus = {
    descricao: "Desarma o oponente, fazendo com que ele solte o que estiver segurando"
}
feiticos.ExpectoPatronum = {
    descricao: "Invoca um Patrono, uma manifestacao mágica que afasta Dementadores"
}
feiticos.WingardiumLeviosa = {
    descricao: "Faz objetos levitarem"
}
feiticos.Alohomora = {
    descricao: "Destranca portas e objetos trancados"
}

function buscarFeiticos(nome) {

    let resultado = feiticos[nome]
    if(resultado !== undefined){
       return (resultado.descricao);
    } else {
        return ("Feitico nao encontrado");
    }
}

console.log(buscarFeiticos("Lumus"));