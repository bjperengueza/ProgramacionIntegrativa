class NosotrosCard extends HTMLElement {
    constructor() {
      super();
      this._tplContent = document.getElementById('card-template').content;
      this._shadowRoot = this.attachShadow({ mode: 'closed'});
    }
    
    connectedCallback() {
      this._shadowRoot.appendChild(this._tplContent.cloneNode(true));
    }
  }
  customElements.define('nosotros-card', NosotrosCard);

  class logosCard extends HTMLElement{
      constructor(){
          super()
      }

      connectedCallback(){
          this.innerHTML = 
          `
          <h2 style="text-align:center; color:black;">¿ Que te ofecemos en nuestra pagina virtual ?</h2>

          <p style="text-align:center;color:black;">Excelentes precios, productos de calidad y garantizados !</p>

       <div class="contenedor-elemento">
       <div class="elemento">
         <div class="logo-elemento"><img src="https://images.vexels.com/media/users/3/136815/isolated/preview/60dddfcb04d1f3fadea8f3a1354d4347-icono-de-configuracion-de-trazo-colorido.png" alt=""></div>
         <h2>Garantia </h2>
         <p> Todos nuestros productos cuentan con garantía. Tu compra tiene garantía contra defectos de fábrica. </p>
       </div>

       <div class="elemento">
         <div class="logo-elemento"><img src="https://www.elitelogis.com/wp-content/uploads/2022/05/CHECK-VISTO-400x400.png" alt=""></div>
         <h2>Calidad </h2>
         <p> Todos nuestros productos con de marcas originales y genuinas. </p>
       </div>

       <div class="elemento">
         <div class="logo-elemento"><img src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f4b2.png" alt=""></div>
         <h2>Precios </h2>
         <p> Tenemos los precios más competitivos del mercado. Cotiza con nosotros el producto que deseas y compara !</p>
       </div>

       <div class="elemento">
       <div class="logo-elemento"><img src="https://images.vexels.com/media/users/3/156251/isolated/preview/4568da0ef98ec1498bedb0c06f433f9d-icono-de-estilo-de-linea-de-avion-de-papel.png" alt=""></div>
       <h2>Envíos </h2>
       <p> Realizamos envíos a todo el país ! Todos nuestros envíos son certificados y asegurados.</p>
     </div>

     <div class="elemento">
       <div class="logo-elemento"><img src="https://sukhaonline.com/wp-content/uploads/2019/12/FORMA-PAGO.png" alt=""></div>
       <h2>Metodo de Pago </h2>
       <p> Ponemos a tu disposición varios métodos de pago: Efectivo, Depósito, Transferencia, Paypal, Zelle.</p>
     </div>

     <div class="elemento">
       <div class="logo-elemento"><img src="https://cdn-icons-png.flaticon.com/512/2755/2755572.png" alt=""></div>
       <h2>Mercado Líderes </h2>
       <p> Mercado lideres, con más de 7000 ventas concretadas de manera exitosa.</p>
     </div>
       </div>
       `
      }
  }customElements.define('logos-card', logosCard);