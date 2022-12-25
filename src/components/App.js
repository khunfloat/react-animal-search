import React, { useState } from "react"
import SearchBar from "./SearchBar"
import AnimalList from "./AnimalList"
import api from "../api"

const App = () => {

    const [animals, setAnimals] = useState([]);

    const searchAnimals = async (text) => {
        const res = await api.get('africa/animals', {
            params: { search: text }
        })

        setAnimals(res.data)
        
    }

    return (
        <div>
            <SearchBar onSubmit={searchAnimals}/>
            <AnimalList animals={animals} />
        </div>
    )
}

export default App
