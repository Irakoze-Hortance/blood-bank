import LandingNavbar from "../components/Navbar/LandingNavbar";
import { ImageSections } from "./ImageSection";
import { Process } from "./Process";
export const Landing = () => {
return (
    <div className="container w-full ml-8 ">
        <LandingNavbar />
        <ImageSections />
        <Process />
    </div>
)

}