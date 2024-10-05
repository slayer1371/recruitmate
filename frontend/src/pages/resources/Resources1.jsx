import NavBar from "../../components/NavBar";
import Pdf from "../../components/Pdf";
import conferenceData from "../../data/conferenceData.json";
import Copyright from "../../components/cr";


function Resources1(){
    return <div>
            <NavBar />
            <Pdf conferences={conferenceData.conferences} />
            <Copyright />
        </div>
}
export default Resources1;