import React from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import { sportslist,electronicslist} from '../assets/filteredByCategories'
import '../styles/ProductTable.css'

function ProductTable() {
    return (
        <div className ='product-table'>
            <div className = 'product-table__header'>
                <span>Name</span><span>Price</span>
            </div>
            <div className = 'product-table__categories'>
                <CategoryProductRow title = 'Sporting Goods' list= {sportslist} />
                <CategoryProductRow title = 'Electronics' list= {electronicslist} />
            </div>
        </div>
    )
}

export {ProductTable}
