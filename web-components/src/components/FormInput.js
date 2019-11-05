/* eslint-disable semi */
/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
    <style>
    :host {
        display: flex;
        flex-direction: row;
        height: 50px;
        box-sizing: border-box;
        background-color: #FFFFFF ;
        align-item: 
    }
        
        input {
            border: 0;
            outline: 0;
            width: 100%;
            height: 90%;
        }
        .clip {
            height: 32px;
            width: 40px;
            margin: 5px 15px;
            background: url(https://image.flaticon.com/icons/svg/0/177.svg);
            background-repeat: no-repeat;
        }
        .send {
            height: 32px;
            width: 40px;
            margin: 5px 15px;
            background: url(https://image.flaticon.com/icons/svg/309/309395.svg);
            background-repeat: no-repeat;
        }
    </style>
    <button class='clip'></button>
    <input type="text">
    <button class='send'></button>
`;

class FormInput extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$input = this.shadowRoot.querySelector('input');
        /* this.$button = this.shadowRoot.querySelector('send');      
        вот я хочу взять эту кнопочку и навесить на неё ивент,
        чтобы по нажатию на неё отправлялось сообщение,
        но сама логика отправки сообщения зашита в файле "MessageForm.js"
        если я тут добавляю такой обработчик события:
        this.$button.addEventListener('click', this.buttonClick.bind(this));
        то можно ли описать this.buttonClick  так,
        чтобы вызывался обработчик _onSubmit из файла "MessageForm.js":
        buttonClick(){
            this.dispatchEvent(new Event('submit'));
        }
        Всплывёт ли это событие выше и обработается ли обработчиком _onSubmit из файла "MessageForm.js"
        если в данном классе FormInput нет обработчика события submit?
        Какой подход более правильный, как реализовать отправку сообщения по нажатию на кнопку?
        */
    }

    static get observedAttributes() {
        return ['name', 'value', 'placeholder', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue);
    }

    get value() {
        return this.$input.value;
    }
}

customElements.define('form-input', FormInput);
