import React from 'react'
import '../styles/ProductRow.css'
function ProductRow() {
    const producto = 'Samsung s20 '
    const precio = '199.99'
    return (
        <div className='product-row'>
            <span>{producto}</span><span>{`$${precio}`}</span>
        </div>
    )
}

export { ProductRow }
