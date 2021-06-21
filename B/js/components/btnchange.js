import checkAnswer from "../models/checkAnswer.js";
import loadAnswer from "../models/createAnswer.js";
import loadQuestion from "../models/loadQuestion.js";


const $template = document.createElement('template');

$template.innerHTML = `
        <div class="btn" id="play-btn">Play</div>
        <div class="btn" id="next-btn">Next</div>
        <div class="btn" id="submit-btn">Submit</div>
`;

export default class Btn extends HTMLElement {
    constructor()
    {
        super();
        this.appendChild($template.content.cloneNode(true))
        this.$playBtn = this.querySelector("#play-btn");
        this.$nextBtn = this.querySelector("#next-btn");
        this.$submitBtn = this.querySelector('#submit-btn');
    };

    getObservedattributes() {
        return ['current-state'];
    }

    connectedCallback() {
        this.$playBtn.oncick = () => {
        }
        this.$submitBtn.onclick = () => {
            if(checkAnswer()) alert("You got the right answer");
        } 
    }

    atrributeChangedCallback(attrName, oldValue, newValue) {
        switch(attrName)
        {
            case 'current-state':
            {
                this.$nextBtn.style.display = none;
                this.$playBtn.style.display = none;
                this.$submitBtn.style.display = none;

                if(newValue == 'next') this.$nextBtn.style.display = block;
            }
        }    
    }
}

window.customElements.define('top-btn', Btn)