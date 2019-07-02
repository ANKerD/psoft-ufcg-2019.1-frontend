// import 

class Comment extends HTMLElement{
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.render();
    }

    attr(attribute){ return this.getAttribute(`data-${attribute}`); }

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="css/commentComp.css">
            <div id="commentBody">
            <div id="author">${this.attr('author')}</div>
            ${this.__getAnswerToContent()}
            <div id="commentContent">${this.attr('content')}</div>
            </div>
            <div id="replyButtom">Responder</div>`;

        this.$shadow.querySelector("#replyToName").addEventListener('click', async (event) => {
            let gotoCommentEnvent = new CustomEvent('goComment', {
                detail: {
                    targetComment: this.attr('answer-id')
                }
            });

            window.dispatchEvent(gotoCommentEnvent);
        });

        this.$shadow.querySelector("#replyButtom").addEventListener('click', async (event) => {
            let gotoCommentEnvent = new CustomEvent('selectCommentToReply', {
                detail: {
                    commentId: this.attr('id')
                }
            });

            window.dispatchEvent(gotoCommentEnvent);
        })
    }

    __getAnswerToContent() {
        if (this.attr('answer-id') != null)
            return `<div id="answerTo">Em resposta à <span id="replyToName">Anderson Dantas</span></div>`;
        else
            return '<div id="answerTo" style="display:none;">Em resposta à <span id="replyToName"></span></div>'
    }
}

window.customElements.define('comment-comp', Comment);