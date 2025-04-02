export const PrincipalContent = () => {
    return (
        <div className="bg-[#17494c]">
            <main className="flex gap-20 justify-between items-center max-w-4xl mx-auto text-white p-20">


                {/* Elementos de la izquierda */}
                <div className="w-1/2">
                    <h2 className="text-5xl font-bold leading-[1.5]">
                        <span className="text-[#cc9fb6]">
                            Champions
                        </span>
                        <br />
                        <span className="text-[#fed6aa]">of </span>
                        <span className="text-[#00a655] border-b-2 border-white">customers</span>
                        <br />
                        <span className="text-[#31aabd] border-b-2 border-white">services</span>

                    </h2>
                </div>


                {/* Elementos de la derecha*/}
                <div>
                    <div>
                        <p>
                            Las ideas que comunica un texto están contenidas en lo que se suele denominar
                            «macroproposiciones», unidades estructurales de nivel superior o global, que otorgan coherencia al
                            texto constituyendo su hilo central, el esqueleto estructural que cohesiona elementos lingüísticos
                            formales de alto nivel, como los títulos y subtítulos, la secuencia de párrafos, etc.
                        </p>
                    </div>
                    <div className="flex mt-5 gap-10">
                        <button className="bg-[#e4f0d3]  text-[#03363e] font-medium p-3">Free Trial</button>
                        <button className="border-3 border-white p-3">View Demo</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PrincipalContent