import { AuthService } from "./services/auth.js";
import { http } from "./utils/http.js";
import { userTokenPath } from '../config.js';
import { searchSubjects } from './utils/perfilUtils.js';
import '../components/Comment.js';

import  '../components/SubjectOnRanking.js';

//Redireciona usuários não logados
if (!AuthService.isLoggedIn()) { window.location.href = "./"; }

const token = localStorage.getItem(userTokenPath);

http.addHeader("Authorization", "Bearer " + token);

loginLogoutButton.onclick = AuthService.logout;

const fillResult = (result) => {
    let subjects = document.querySelector("#subjects");
    subjects.innerHTML = "";
    result.forEach((subject) => {
        let newElem = document.createElement("subject-rank-comp");
        newElem.setAttribute('id', subject.id);
        newElem.setAttribute('name', subject.name);
        newElem.setAttribute('likes', subject.likes);
        newElem.setAttribute('comments', subject.comments);
        subjects.appendChild(newElem);
    });
}

const updateSubjects = event => searchSubjects(event, fillResult);

commentIcon.onclick = updateSubjects;
commentIcon.onclick();
