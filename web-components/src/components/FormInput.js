import './MessageForm';

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
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$input = this._shadowRoot.querySelector('input');
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
