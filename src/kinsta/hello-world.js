class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.name = 'World';
  }
  connectedCallback() {
    this.textContent = `Hello ${ this.name }!`;
  }
  // component attributes
  static get observedAttributes() {
    return ['name'];
  }
  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    
    if (oldValue === newValue) return;
    this[ property ] = newValue;
    
  }
}
customElements.define( 'hello-world', HelloWorld );