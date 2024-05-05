class HelloWorldShadow extends HTMLElement {
  constructor() {
    super();
    this.name = 'World';
  }
  connectedCallback() {
    
    const
      shadow = this.attachShadow({ mode: 'closed' }),
      hwMsg = `Hello ${ this.name }`;
    
    // append shadow DOM
    shadow.append(
      document.getElementById('hello-world-slot').content.cloneNode(true)
    );
    
    // find all slots with a hw-text class
    Array.from( shadow.querySelectorAll('slot.hw-text') )
      
      // update first assignedNode in slot
      .forEach( n => n.assignedNodes()[0].textContent = hwMsg );
    
  }
  /* shadow and template
  connectedCallback() {
    
    const
      
      shadow = this.attachShadow({ mode: 'closed' }),
      template = document.getElementById('hello-world').content.cloneNode(true),
      hwMsg = `Hello ${ this.name }`;
    
    Array.from( template.querySelectorAll('.hw-text') )
      .forEach( n => n.textContent = hwMsg );
    
    shadow.append( template );
    
  }
  
   */
  /* with shadow
  connectedCallback() {
    
    const shadow = this.attachShadow({ mode: 'closed' });
    
    shadow.innerHTML = `
    <style>
      p {
        text-align: center;
        font-weight: normal;
        padding: 1em;
        margin: 0 0 2em 0;
        background-color: #eee;
        border: 1px solid #666;
      }
    </style>

    <p>Hello ${ this.name }!</p>`;
    
  } */
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
customElements.define( 'hello-world-shadow', HelloWorldShadow );