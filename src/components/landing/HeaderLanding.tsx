export const HeaderLanding = () => {
    return (
        <div className="bg-[#17494c]">
            <header className="flex justify-between items-center max-w-4xl mx-auto text-white p-5">
                <h2 className="text-2xl">Zendesh</h2>
                <menu>
                    <ul className="flex gap-16 items-center">
                        <li>
                            Produc
                        </li>
                        <li>
                            Princing
                        </li>
                        <li>
                            Solutions
                        </li>
                        <li>
                            Demo
                        </li>
                        <li>
                            Resources
                        </li>
                        <li className="bg-[#e4f0d3] p-3 text-[#03363e] font-bold">
                            Free Trial
                        </li>
                    </ul>
                </menu>
            </header>
        </div>
    )
}

export default HeaderLanding