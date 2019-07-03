import { AuthService } from "./services/auth.js";
import { SubjectsService } from "./services/subjects.js";
import '../components/Comment.js';
import { http } from "./utils/http.js";
import { userTokenPath } from '../config.js';

import  '../components/SubjectOnRanking.js';

//Redireciona usuários não logados
if (!AuthService.isLoggedIn()) { window.location.href = "./"; }

const token = localStorage.getItem(userTokenPath);

http.addHeader("Authorization", "Bearer " + token);

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


const updateSubjects = async (event) => {
    if (event) {
        if (event.type == 'click') {
            console.log("prevent");
            event.stopPropagation();
            event.preventDefault();
        }

        if (event.type == 'keydown' && event.key != 'Enter') 
            return;
    }
    // TODO: loading message...
    SubjectsService.findOrdered(type.value, desc.value).then( async (subjects) => {
        fillResult(subjects);
    })
}

commentIcon.onclick = updateSubjects;
commentIcon.onclick();
