
import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../type.ts";
import CharacterCard from "../components/CharacterCrad.tsx";


type ApiResponse = {
    info:{
        pages:number,
    }
    results:Character[]
}

const CharactersList:FunctionalComponent = () =>{

    const [inputValue, setInputValue] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [characters, setCharacters] = useState<Character[]>([])
    const [page, setPage] = useState<number>(1)
    const [maxPages, setMaxPages] = useState<number>(1)

    useEffect(() => {
        getCharacters()
    },[page])

    useEffect(() => {
        getCharacters()
        setPage(1)
    },[name])

    const getCharacters = async() => {
        const request = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
        const response:ApiResponse = await request.json()
        console.log(response)
        setMaxPages(response.info.pages)
        const characters = response.results
        setCharacters(characters)
    }
    return(
        <div class="container">
            <h1 class="title">Rick and Morty Characters</h1>
            <div>
                <form  class="search-form" onSubmit={(e) => {
                    e.preventDefault()
                    setName(inputValue)
                }}>
                    <input class="search-input" type="text" name="name" placeholder="Nombre del personaje" value={inputValue} onInput={(e) => setInputValue(e.currentTarget.value)} />
                    <button type="submit" class="button">Buscar</button>
                </form>
                <div class="characters">
                    {characters.map((character)=> <a class="character-card" key={character.id} href={`/character/${character.id}`}><CharacterCard key={character.id} character={character}/></a>)}
                </div>
                <div class="pagination">

                    <button type= "button" class="button" onClick = {() => setPage(page - 1)} disabled = {page === 1}>anterior</button>
                    <span>{page} / {maxPages}</span>
                    <button type= "button" class="button" onClick = {() => setPage(page + 1)} disabled = {page === maxPages}>siguiente</button>

                </div>
            </div>
        </div>
    )
}

export default CharactersList