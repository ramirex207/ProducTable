import React, { useState, useEffect } from 'react'
import { CategoryProductRow } from './CategoryProductRow'
import { sportslist,electronicslist} from '../assets/filteredByCategories'
import '../styles/ProductTable.css'

function ProductTable() {
    const [dataCharacters, setDataCharacters] = useState([])
    const fetchCharacters = async ()=>{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        response.json().then(response => setDataCharacters(response.results))
    }
    useEffect(() => {
        fetchCharacters()
    }, [])

    const [dataEpisodes, setDataEpisodes] = useState([])
    const fetchEpisodes = async () => {
        const responseEpi = await fetch ('https://rickandmortyapi.com/api/episode')
        responseEpi.json().then(responseEpi => setDataEpisodes(responseEpi.results))
    }
    useEffect(() => {
        fetchEpisodes()
    }, [])
    
    return (
        <div className ='product-table'>
            <div className = 'product-table__header'>
                <span>'Rick & Morty'</span>
                <span>Status</span>
            </div>
            <div className = 'product-table__categories'>
                <CategoryProductRow title = 'Character' list= {dataCharacters} />
                <CategoryProductRow title = 'Episodes' list=  {dataEpisodes}/>
            </div>
        </div>
    )
}

export {ProductTable}
