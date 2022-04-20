
    const { input, html } = window.CComponents;

    export class CustomTextfield extends HTMLElement {
        constructor() {
            super();


            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.innerHTML = `
                <input type="number" maxlength="3">
                <style>
                    input{
                        border-radius:0.5em;
                    }
                </style>
            `;
        }
    }
    customElements.define('custom-textfield', CustomTextfield);


