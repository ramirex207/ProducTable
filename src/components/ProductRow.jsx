import React from 'react'
import '../styles/ProductRow.css'
function ProductRow(props) {
    const name = props.name
    const status = props.status
    const imagen = props.image
    console.log(imagen)
    return (
        <div className= "product-row" >
            <img src={imagen} alt={`Es el avatar de ${name} `} />
            <span>{name}</span>
            <span>{`${status}`}</span>
        </div>
    )
}

export { ProductRow }
