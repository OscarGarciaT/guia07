const ejecutarCodigo = () => {
    // alert("Hola, mundo!")
    var titulo = document.getElementById('titulo1')
    titulo.textContent = 'Album de fotos'

    var descripcion = document.getElementsByClassName('text-muted')[1]
    descripcion.innerHTML = 
    `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de 
        <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">
    Codepen - Taj Uddin</a>.
    </span>`

    var pElement = document.getElementsByTagName('p')[2]

    pElement.className = 'd-none';

    var svgs = document.getElementsByTagName('svg')

    const imageAttributes = [ 
        { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'}, 
        { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia'}, 
        { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'},
        { url: 'https://images.unsplash.com/photo-1653896775515-ae85244f58a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camara'},
        { url: 'https://images.unsplash.com/photo-1653865507270-731da1afface?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'reposo'},
        { url: 'https://images.unsplash.com/photo-1653883094445-9a53d0e9ac2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'cueva'},
        { url: 'https://images.unsplash.com/photo-1653936999234-6574484abc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'guerra'},
        { url: 'https://images.unsplash.com/photo-1653559260129-d4347e4c8df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'casa'},
        { url: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'mesa'},
    ]

    for (let i = svgs.length; i > 1 ; i--){
        const img = document.createElement('img')
        img.setAttribute('src',imageAttributes[i - 2].url)
        img.setAttribute('alt',imageAttributes[i - 2].alt)
        svgs[i - 1].replaceWith(img)
    }


}

ejecutarCodigo()