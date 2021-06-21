const $template = document.createElement('template');

$template.innerHTML = `
<div class="quiz-zone">
            <div class="question-zone">
                <div class="question-block">Which team has won the most Stanley Cups in the NHL?</div>
            </div>
            <div class="answer-zone">
                <div class="line" id="line-1">
                    <div class="answer-block" id="a1">Chicago Blackhawks</div>
                    <div class="answer-block" id="a2">Toronto Maple Leafs</div>
                </div>
                <div class="line" id="line-2">
                    <div class="answer-block" id="a3">Detroit Red Wings</div>
                    <div class="answer-block" id="a4">Montreal Canadians</div>
                </div>
            </div>
        </div>

`;


export default class QuizZone extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$id1 = this.querySelector('#a1');
        this.$id2 = this.querySelector('#a2');
        this.$id3 = this.querySelector('#a3');
        this.$id4 = this.querySelector('#a4');
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

    connectedCallback() {
        this.$id1.onclick = () => {
            this.$id1.style.transform = 'scale(1.1)';
            this.$id2.style.transform = 'scale(1)';
            this.$id3.style.transform = 'scale(1)';
            this.$id4.style.transform = 'scale(1)';
        }
        this.$id2.onclick = () => {
            this.$id1.style.transform = 'scale(1)';
            this.$id2.style.transform = 'scale(1.1)';
            this.$id3.style.transform = 'scale(1)';
            this.$id4.style.transform = 'scale(1)';
        }
        this.$id3.onclick = () => {
            this.$id1.style.transform = 'scale(1)';
            this.$id2.style.transform = 'scale(1)';
            this.$id3.style.transform = 'scale(1.1)';
            this.$id4.style.transform = 'scale(1)';
        }
        this.$id4.onclick = () => {
            this.$id1.style.transform = 'scale(1)';
            this.$id2.style.transform = 'scale(1)';
            this.$id3.style.transform = 'scale(1)';
            this.$id4.style.transform = 'scale(1.1)';
        }
    };
}

window.customElements.define('quiz-zone', QuizZone);