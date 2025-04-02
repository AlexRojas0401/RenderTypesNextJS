import Link from "next/link"

export const Menu = () => {
    return (
        <menu className="w-72 mx-auto text-center pt-10">
            <ul>
                <li>
                    <Link href="/ssr-landing" className="mb-3 p-5 block w-full bg-slate-200 hover:bg-slate-400 rounded">
                        SSR (Server Side rendering)
                    </Link>
                </li>
                <li>
                    <Link href="/csr-passwords" className="mb-3 p-5 block w-full bg-slate-200 hover:bg-slate-400 rounded">
                        CSR (Client Side rendering)
                    </Link>
                </li>
                <li>
                    <Link href="/dr-dynamic" className="mb-3 p-5 block w-full bg-slate-200 hover:bg-slate-400 rounded">
                        DR (Dynamic Side rendering)
                    </Link>
                </li>

            </ul>
        </menu>
    )
}