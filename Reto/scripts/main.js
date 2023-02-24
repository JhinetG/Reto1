import{paintCard,addProducto1,addProducto2,addProducto3} from './pain.js';
const btnCalcular = document.getElementById('btnCalcular');
  btnCalcular.onclick= function(){ 
    const cant = document.getElementById('cantidad').value;
    const opc = document.getElementById('color').value;
    if (opc === 'coral'){
        addProducto1(cant,opc)
        document.getElementById('cantidad').value;
        document.getElementById('color').value;
    }else  if (opc === 'turquesa'){
      addProducto2(cant,opc)
      document.getElementById('cantidad').value;
      document.getElementById('color').value;
    } if (opc === 'rosado'){
    addProducto3(cant,opc)
    document.getElementById('cantidad').value;
    document.getElementById('color').value;
}
   if (opc === 'coral'){
    paintCard("CORAL");
  }else{ if (opc === 'turquesa'){
      paintCard("TURQUESA");
  }if (opc === 'rosado'){
    paintCard("ROSADO");
}
}
}