/* eslint-disable func-names */
/* eslint-disable semi */
/* eslint-disable no-underscore-dangle */
const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            width: 100%;
            height: 100vh;
           
            display: flex;
            flex-direction: column;
        }

        ::-webkit-scrollbar-track
        {
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
          border-radius: 10px;
          background-color: #F5F5F5;
        }
        ::-webkit-scrollbar
        {
          width: 12px;
          background-color: #F5F5F5;
        }
        ::-webkit-scrollbar-thumb
        {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          background-color: #FFF8DC;
        }

        .chat {
            width: 100%;
            display: flex;
            flex: auto;
            flex-direction: column-reverse;
            align-content: flex-end;
            overflow-y: scroll;
            background-color: #FFF8DC;
        }
        
        .messagesList{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-end;
            flex-direction: column;
        }

        .message-item{
            box-sizing: border-box;
            width: 100%;
            padding: 0 10px 20px 10px;
        }
        .message-text {
            word-wrap: break-word;
        }
    
       
    </style>
    <div class="header">
        <chat-header>
        </chat-header>
    </div>
    <div class='chat'>
        <div class='messagesList'>
        </div>
    </div>
    <div class='inputForm'>
        <form>
            <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
        </form>
    </div>
`;

class MessageForm extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$messagesList = this._shadowRoot.querySelector('.messagesList');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this)); 
        this.Id = 0;
        this.$form.addEventListener('click',this._click.bind(this)) 
    }

    connectedCallback() {
      if (`chat ${  this.Id}` in localStorage) {
        this.messages = JSON.parse(localStorage.getItem(`chat ${  this.Id}`));
      } else {
        this.messages = [];
      }
      this.messages.forEach((msg) => {
        const message = this.generateMessage(msg.name, msg.text, msg.timestamp);
        this.$messagesList.appendChild(message);
      });
    }

    _onSubmit(event) {
      event.preventDefault();
      if (this.$input.value.length > 0) {
        const msg = this.generateMessage();
        this.$input.$input.value = '';
        const msgStorage = msg.toObject();
        this.$messagesList.appendChild(msg);
        this.messages.push(msgStorage);
        localStorage.setItem(`chat ${  this.Id}`, JSON.stringify(this.messages));
      }
    }

    generateMessage(Name = 'Alexqrid', text = this.$input.value, time = null) {
      const msg = document.createElement('message-item');
      if (time) {
        msg.setAttribute('timestamp', time);
      }
      msg.setAttribute('text', text);
      msg.setAttribute('name', Name);

      return msg;
    }


    _onKeyPress(event) {
      if (event.keyCode === 13) {
        this.$form.dispatchEvent(new Event('submit'));
      }
    }
}

customElements.define('message-form', MessageForm);
