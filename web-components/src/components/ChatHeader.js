const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-direction: row;
            font-family: sans-serif;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color:#f50DA7;
        }
        .chatInfo{
            flex: auto;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
        }
            .chatInfo{
                display:flex;
                height: 100%;
            }            
        .chatInfo .avatar{
            height: 30px;
            width: 30px;
            margin: 5px 15px;   
            border-radius: 50%;      
            background: url(https://image.flaticon.com/icons/svg/145/145842.svg);
        }
        .senderInfo {
            display: flex;
            flex-flow: column wrap;
            height: 100%;
            justify-content: center;
            align-conten: center;
            align-items: center;
            
        }
        .backButton{
            height: 30px;
            width: 30px;
            margin: 0px 15px;
            background: url(https://image.flaticon.com/icons/svg/271/271218.svg);
        }
        .searchButton{
            height: 20px;
            width: 20px;
            margin: 0px 15px;
            background: url(https://image.flaticon.com/icons/svg/483/483356.svg)
        }
        
        .settingsButton{
            height: 20px;
            width: 20px;
            margin: 0px 15px;
            background: url(https://image.flaticon.com/icons/svg/149/149810.svg)
            
        }
    </style>
    <button class='backButton'></button>
    <div class='chatInfo'>
        <div class='avatar'></div>
        <div class='senderInfo'> 
            <div class='name'>Alexqrid</div>
            <div class='lastTime'>last seen at 20:00</div>
        </div>
    </div>
    <button class='searchButton'></button>
    <button class='settingsButton'></button>

    
    
`;


class ChatHeader extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('chat-header', ChatHeader);
