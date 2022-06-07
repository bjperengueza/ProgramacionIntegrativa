function video() {
    //constante elemento crea un div 
    const elemento = document.createElement('div');
    const shadowRoot = elemento.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <center><iframe width="560" height="315" src="https://www.youtube.com/embed/64SHBtxlqy4" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <center><h2>Programacion Integrativa</h2></center></center>
    `;
    // se crea variable "contiene" y permite buscar esa clase en el html
    const contiene = document.querySelector('.cont2');

    contiene.appendChild(elemento);
}

