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
            ${this.getAnswerToContent()}
            <div id="commentContent">${this.getContent()}</div>
            </div>
            <div id="replyButtom">Responder</div>
            <div id="deleteButton">Remover</div>`;
            

        this.$shadow.querySelector("#replyToName").addEventListener('click', async (event) => {
            let gotoCommentEvent = new CustomEvent('goComment', {
                detail: {
                    targetComment: this.attr('answer-id')
                }
            });

            window.dispatchEvent(gotoCommentEvent);
        });

        this.attr('active') && this.$shadow.querySelector("#replyButtom").addEventListener('click', async (event) => {
            let gotoCommentBox = new CustomEvent('selectCommentToReply', {
                detail: {
                    commentId: this.attr('id')
                }
            });

            window.dispatchEvent(gotoCommentBox);
        })

        this.$shadow.querySelector("#deleteButton").addEventListener('click', async (event) => {
            let deleteComment = new CustomEvent('deleteComment', {
                detail: {
                    commentId: this.attr('id')
                }
            });

            window.dispatchEvent(deleteComment);
        });
    }

    getContent() {
        return this.attr('content') || '<span class="delete">Este comentáro foi removido pelo autor</span>';
    }

    getAnswerToContent() {
        if (this.attr('answer-id') != null)
            return `<div id="answerTo">Em resposta à <span id="replyToName">${this.attr('answer-author')}</span></div>`;
        else
            return '<div id="answerTo" style="display:none;">Em resposta à <span id="replyToName"></span></div>'
    }
}

window.customElements.define('comment-comp', Comment);