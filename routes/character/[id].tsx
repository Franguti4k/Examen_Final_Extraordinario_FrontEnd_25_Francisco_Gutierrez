import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import CharacterInfo from "../../components/CharacterInfo.tsx";
import { Character } from "../../type.ts";


export const handler:Handlers = {
    GET: async (_req: Request, ctx:FreshContext<unknown, Character>) =>{
        const {id} = ctx.params
        const request = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const response:Character = await request.json()
        return ctx.render(response)
    }
}

const Page = (props:PageProps) => {
    return(
        <CharacterInfo character={props.data}/>
    )
}

export default Page