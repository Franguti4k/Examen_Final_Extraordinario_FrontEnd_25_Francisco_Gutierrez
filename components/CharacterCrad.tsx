import { FunctionalComponent } from "preact/src/index.d.ts";
import { Character } from "../type.ts";


type Props = {
    character:Character
}

const CharacterCard:FunctionalComponent<Props> = (props) => {
    return(
        <div class="character-card">
            <img src={props.character.image} alt={props.character.name} />
            <p>{props.character.name}</p>
        </div>
    )
}

export default CharacterCard

