import Link from "next/link"

export const TopBanner = () =>{
    return(
        <div className="bg-[#03363e] text-center p-5">
            <ul className="flex justify-center gap-10 text-white">
                <li>
                    CX Trends 2025
                </li>
                <li>
                    Unlock growth with costumer service
                </li>
                <li>
                    <Link href={"#"} className="underline">Get the reports</Link>
                </li>
            </ul>
        </div>
    )
}
