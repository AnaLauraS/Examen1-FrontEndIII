// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item. OK
// El componente Listado es el padre de:
// - varios Item. OK
// ESTADO: Listado no necesita manejar un estado. OK
// MÉTODOS: Listado no requiere de métodos. OK
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos. OK

import React from 'react';
import datos from './data.json';
import Item from './Item';

export default function Listado({contadorTotal, setContadorTotal}) {
  return (
    <div className='container'>
      {/* renderizamos los Item aquí */}
      {datos.map (item => 
      <Item key={item.id} item={item} contadorTotal={contadorTotal} setContadorTotal={setContadorTotal}/>
      )}
    </div>
  )
}
