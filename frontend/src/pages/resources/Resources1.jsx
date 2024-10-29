import NavBar from "../../components/NavBar";
import SchoolList from "../../components/SchoolList";
import conferenceData from "../../data/conferenceData.json";
import Copyright from "../../components/cr";


function Resources1(){
    return <div>
            <NavBar />
            <SchoolList conferences={conferenceData.conferences} />
            <Copyright />
        </div>
}
export default Resources1;