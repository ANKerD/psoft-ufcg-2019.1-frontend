import { AuthService } from "./services/auth.js";

//Redireciona usuários não logados
if (!AuthService.isLoggedIn()) { window.location.href = "./"; }

const searchProfile = () {
    let id = (new URL(window.location.href)).searchParams.get("id");
    //Faz o fetch
    //return profile;
}

const fillProfile = (profile) => {
    //Preenche todos os dados referentes a disciplina
}

const fillComments = (comments) => {
    //Preenche todos os dados referentes a 
}

const giveLike = () => {
    //Manda like para o back
    //Atualiza contagem de likes
}

const comment = (idParentComment) {
    //Cria novo comentário (resposta ou não)
    //Atualiza comentários
}





