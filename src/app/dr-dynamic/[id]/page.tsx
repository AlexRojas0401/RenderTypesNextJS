/* eslint-disable @next/next/no-img-element */
import { SingleCharacter } from "@/models/SingleCharacter";


interface IPropsSingleCharacter {
    params: Promise<{ id: string }>
}

const getSingleCharacter = async (id: string) => {
    const requestAPI = await fetch("https://dragonball-api.com/api/characters/" + id)
    const data: SingleCharacter = await requestAPI.json();
    return data
}

const SingleCharacterById = async ({ params }: IPropsSingleCharacter) => {
    const { id } = await params;

    //validar los parametros
    if (!id) {
        return {
            notFound: true
        }

    }


    const character = await getSingleCharacter(id);

    return (
        <div>
            <header className="bg-slate-950 text-white p-5 text-center">
                <h1>Dragon Ball API</h1>
            </header>
            <main className="max-w-4xl mx-auto py-5">
                <section className="flex justify-between items-start">
                    <div className="w-1/3">
                        <img className="h-60" src={character.image} alt={character.name} />
                    </div>
                    <div className="w-2/3">
                        <h2 className="font-bold text-2xl">
                            {
                                character.name
                            }<span className="font-normal text-gray-500 text-sm"> {character.race} </span>
                        </h2>
                        <p>
                            {
                                character.description
                            }
                        </p>
                    </div>
                </section>

                <section>
                    {
                        character.transformations.length === 0 && (
                            <p className=" flex justify-center mt-40">Este personaje no tiene Transformaciones</p>
                        )
                    }
                    {
                        character.transformations.length > 0 && (
                            <div className="flex gap-5 flex-wrap mt-10">
                                {
                                    character.transformations.map((transformations) => {
                                        return (
                                            <div key={transformations.id} className="text-center p-5 bg-slate-300 rounded ">
                                                <img className="h-20 mx-auto" src={transformations.image} alt={transformations.name}/>
                                                <h4>
                                                    {
                                                        transformations.name
                                                    }
                                                </h4>
                                            </div>)
                                    })
                                }
                            </div>
                        )
                    }
                </section>
            </main>

        </div>
    )
}

export default SingleCharacterById