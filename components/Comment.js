// import 

class Comment extends HTMLElement{
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="css/commentComp.css">
            <div id="commentBody">
            <div id="author">João Marcos Lima</div>
            <div id="answerTo">Em resposta à <span id="answerToName">Anderson Dantas</span></div>
            <div id="commentContent">Nam ac leo eget neque bibendum facilisis. Duis tristique egestas maximus. Donec ut justo quis ex porttitor vulputate. Cras pulvinar diam et mi nullam.</div>
            </div>
            <div id="replyButtom">Responder</div>`;
        this.$shadow.querySelector("#answerToName").onclick = async (event) => {
            goToComment(2);
        }
    }
}

window.customElements.define('comment-comp', Comment);