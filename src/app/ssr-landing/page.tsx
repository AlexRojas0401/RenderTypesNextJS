import { HeaderLanding } from "@/components/landing/HeaderLanding"
import PrincipalContent from "@/components/landing/PrincipalContent"
import { QuickTour } from "@/components/landing/QuickTour"
import { TopBanner } from "@/components/landing/TopBanner"
import TopMiniBanner from "@/components/landing/TopMiniBanner"

const LandingPage = () =>{
    return (
        <div>
            <TopBanner/>
            <TopMiniBanner/>
            <HeaderLanding/>
            <PrincipalContent/>
            <QuickTour/>
        </div>
    )
}

export default LandingPage