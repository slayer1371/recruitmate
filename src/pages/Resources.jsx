import NavBar from "../components/NavBar";
import Pdf from "../components/Pdf";
import conferenceData from "../data/conferenceData.json";

function Resources(){
    return <div>
            <NavBar />
            <Pdf conferences={conferenceData.conferences} />
        </div>
}
export default Resources;