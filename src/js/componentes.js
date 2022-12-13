import '../css/componentes.css'
import '/src/styles.css'
//import webpacklog from '../assets/img/webpack-logo.png'


export const Saludar = (nombre)=>{
     console.log('Creando etiqueta H1');

     const h1 = document.createElement('h1');
     h1.innerText = `Hola ${nombre}`;

     document.body.append(h1);

     //Img
    // const img = document.createElement('img');
    // img.src = webpacklog;
    // document.body.append(img);
}