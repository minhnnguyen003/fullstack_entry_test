const $template = document.createElement('template');

$template.innerHTML = `
<div class="quiz-zone">
            <div class="question-zone">
                <div class="question-block"></div>
            </div>
            <div class="answer-zone">
                <div class="line" id="line-1">
                    <div class="answer-block" id="1"></div>
                    <div class="answer-block" id="2"></div>
                </div>
                <div class="line" id="line-2">
                    <div class="answer-block" id="3"></div>
                    <div class="answer-block" id="4"></div>
                </div>
            </div>
        </div>

`;


export default class QuizZone extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$id1 = this.querySelector('#1');
        this.$id2 = this.querySelector('#2');
        this.$id3 = this.querySelector('#3');
        this.$id4 = this.querySelector('#4');
    };

    static get observedAttributes() {
        return ['id1', 'id2', 'id3', 'id4', 'id_correct'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName) {
            case 'id1':
                this.$id1.innerHTML = newValue;
                break;
            case 'id2':
                this.$id2.innerHTML = newValue;
                break;
            case 'id3':
                this.$id3.innerHTML = newValue;
                break;
            case 'id4':
                this.$id4.innerHTML = newValue;
                break;
        }
    }
}

window.customElements.define('quiz-zone', QuizZone);