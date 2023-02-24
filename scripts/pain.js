'use strict'
const card = document.getElementById('cardProducto');
const producto1 = [];
const producto2 = [];
const producto3 = [];
const precio = 25000;
const paintCard = (opc) => {
opc = opc;
const fragment = document.createDocumentFragment();
const templateProducto = document.querySelector('#templateProducto').content;

if (opc === 'CORAL' ){
    for (let i of producto1){
        const cloneTemp = templateProducto.cloneNode(true);
        //cloneTemp.querySelector('.title-card').innerHTML = "Resumen de <i>compra</i>";//
        cloneTemp.querySelector('.total').innerHTML = `TOTAL: ${(i.unidades * precio)}`;
        cloneTemp.querySelector('.cantidad').innerHTML = `unidades: ${i.unidades}`;
        cloneTemp.querySelector('.color').innerHTML = `color: ${'<img src="../asests/img/coral.png"></img>'}`;
        fragment.appendChild(cloneTemp);    
    };

} else if (opc === 'TURQUESA' ){
        for (let i of producto2){
            const cloneTemp = templateProducto.cloneNode(true);
            //cloneTemp.querySelector('.title-card').innerHTML = "Resumen de <i>compra</i>";//
            cloneTemp.querySelector('.total').innerHTML = `TOTAL: ${(i.unidades * precio)}`;
            cloneTemp.querySelector('.cantidad').innerHTML = `unidades: ${i.unidades}`;
            cloneTemp.querySelector('.color').innerHTML = `color: ${'<img src="../asests/img/Turquesa.jpg"></img>'}`;
            fragment.appendChild(cloneTemp);    
        }
    
    } else if (opc === 'ROSADO' ){
        for (let i of producto3){
            const cloneTemp = templateProducto.cloneNode(true);
            //cloneTemp.querySelector('.title-card').innerHTML = "Resumen de <i>compra</i>";//
            cloneTemp.querySelector('.total').innerHTML = `TOTAL: ${(i.unidades * precio)}`;
            cloneTemp.querySelector('.cantidad').innerHTML = `unidades: ${i.unidades}`;
            cloneTemp.querySelector('.color').innerHTML = `color: ${'<img src="../asests/img/rosa.jpg"></img>'}`;
            fragment.appendChild(cloneTemp);    
        }
    
     }
    
    
    
    card.appendChild(fragment);
}
function addProducto1 (Cant,Color){
    let product1 = {
       unidades : Cant,
       color: Color,
    }
    producto1.push(product1);
    
};
function addProducto2 (Cant,Color){
    let product2 = {
       unidades : Cant,
       color: Color,
    }
    producto2.push(product2);
    
};
function addProducto3 (Cant,Color){
    let product3 = {
       unidades : Cant,
       color: Color,
    }
    producto3.push(product3);
    
};


export{paintCard,addProducto1,addProducto2,addProducto3 }