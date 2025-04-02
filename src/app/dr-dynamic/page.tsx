/* eslint-disable @next/next/no-img-element */

import { Characters } from "@/models/Characters.model";
import Link from "next/link";

const getCharacters = async () => {
    const requestAPI = await fetch("https://dragonball-api.com/api/characters")
    const data: Characters = await requestAPI.json();
    return (data.items)
}

const DragonBallApi = async () => {

    const characters = await getCharacters()


    return (
        <div className="bg- bg-slate-100 min-h-screen">
            <header className="bg-slate-950 text-white p-5 text-center">
                <h1>Dragon Ball API</h1>
            </header>
            <main className="max-w-4xl mx-auto py-5 ">
                <div className="grid grid-cols-4 gap-4">
                    {
                        characters.map((character) => {
                            return (
                                <div className=" text-center p-5" key={character.id}>
                                    <Link href={`/dr-dynamic/${character.id}`}>
                                        <img className="h-60 mx-auto" src={character.image} alt={character.name} />
                                        <h3 className="font-bold">{character.name}</h3>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default DragonBallApi