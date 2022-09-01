// El componente Item no tiene componentes hijos. OK
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo. OK
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App. OK
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0) OK
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock") OK

import { useState } from "react";

export default function Item({item, contadorTotal, setContadorTotal}) {
  
  const [stock, setStock] = useState(item.stock);

  const buy = () => {
    if (stock > 0) {
      setContadorTotal(contadorTotal + 1);
      setStock(stock - 1)
    }
  }

  return (
    <div className='producto'>
      {/* maquetar Item aquí */}
      <h3>{item.producto.nombre}</h3>
      <p>{item.producto.descripcion}</p>
      <h5>En stock: {stock > 0 ? 
        <span style={{color: "black", backgroundColor: "white"}}>{stock}</span>
        : <span>AGOTADO</span>
      }</h5>
      {/* voy viendo el stock disponible del item para que me permita comprar productos o no */}
      {stock > 0 ?
        <button
          onClick={buy}>
          Comprar
        </button>
        : <button
          disabled = {true}>
          Sin stock
        </button>
      }
    </div>
  )
}
