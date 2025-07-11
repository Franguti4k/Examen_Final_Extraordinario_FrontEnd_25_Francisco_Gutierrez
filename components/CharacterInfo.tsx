import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../type.ts";

type Props = {
    character:Character
}


const CharacterInfo:FunctionalComponent<Props> = (props) => {
    return(
        <div class= "container">
            <a href="/" class= "back-link" data-ancestor = "true" aria-current = "true">Volver</a>
            <div class= "character-detail">
                <img src={props.character.image} alt={props.character.name} width= "200" />
                <div class= "character-info">
                    <h1 class= "title">{props.character.name}</h1>
                    <ul>
                        <li><strong>Status: </strong> {props.character.status}</li>
                        <li><strong>Species: </strong> {props.character.species}</li>
                        <li><strong>Gender: </strong> {props.character.gender}</li>
                        <li><strong>Origin: </strong> {props.character.origin.name}</li>
                        <li><strong>Location: </strong> {props.character.location.name}</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default CharacterInfo