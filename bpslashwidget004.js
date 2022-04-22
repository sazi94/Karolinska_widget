const { input, html } = window.CComponents;

    export class CustomSlashDivider extends HTMLElement {
        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = `
                <div class="container">
                    <input type="text"> 
                    <span class="slash">/</span>
                    <input class="right" type="text">
                </div>
                <style>
                    .container{
                        border: 1px solid #999;
                        display: inline-block;
                        border-radius: 3px;
                        background: #fff;
                        position: relative;  
                    }
                  
                    .container input{
                        border: none;
                        background: none;
                    }

                    .right{
                        margin-left: 6px;
                    }
                  
                    .slash{
                        transform: scale(3);
                        position: absolute;
                    }
                </style>
            `;
        }
    }
    customElements.define('custom-slashdivider', CustomSlashDivider);
