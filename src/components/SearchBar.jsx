import '../styles/SearchBar.css'
import React from 'react'

function SearchBar() {
    return (
        <div className = 'search-bar__conteiner'>
            <input type="text" value='Search...'/>
            <div className = 'search-bar__products'>
                <input id = "show-products"   type="checkbox"/>
                <label htmlFor="show-products">Only show products on Stock</label>
            </div>
            
        </div>
    )
}

export { SearchBar }
