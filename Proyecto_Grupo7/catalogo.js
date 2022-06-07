class BeautyCard extends HTMLElement {
    constructor() {
      super();
      this._tplContent = document.getElementById('card-template').content;
      this._shadowRoot = this.attachShadow({ mode: 'closed'});
    }
    
    connectedCallback() {
      this._shadowRoot.appendChild(this._tplContent.cloneNode(true));
    }
  }
  customElements.define('beauty-card', BeautyCard);
  

  class Slider extends HTMLElement{
    
    constructor(){
        super()
    }
    
    connectedCallback(){
        this.innerHTML = `
        <center>
<div class="slider">
      <ul>
        <li>
  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hackett-london-oton-o-2018-ropa-hombre-1537872330.jpg?crop=1xw:1xh;center,top&resize=1200:*" alt="">
 </li>
        <li>
  <img src="https://3.bp.blogspot.com/-2C2w87_FBJU/V64890P-JgI/AAAAAAAAKFo/XL7wGYFNKbsRp7aTkKy56RLdsvOlFykTgCLcB/s1600/ropa.jpg" alt="">
</li>
        <li>
        <img src="https://i.ytimg.com/vi/fg66_RU0CHQ/maxresdefault.jpg" alt="">
</li>
        <li>
  <img src="https://i.pinimg.com/originals/de/ac/c1/deacc149a58b95425eed594b02350952.jpg" alt="">
</li>
      </ul>
    </div>
    </center>
   `
    }
}

window.customElements.define('slider-g1',Slider)

