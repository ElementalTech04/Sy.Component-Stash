
class Main extends HTMLElement {
    constructor() {

        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                
                #container {
                    
                        
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        width: 100vw;
                    
                }
            </style>
            <div id="container">
                
                    
                        <h1>Hello World</h1>
                        
                        
                            <p>This is a paragraph</p>
                            <p>This is another paragraph</p>
                            <p>This is the last paragraph</p>
                        
                    
                
            </div>
        `;



    }
}

export default Main;