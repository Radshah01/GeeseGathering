import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import SessionTopicSelection from "../components/SessionTopicSelection.jsx";
import MapComponent from "../components/MapComponent.jsx";
import SessionTopicTrackerTile from "../components/SessionTopicTrackerTile.jsx";
import SessionInformation from "../components/SessionInformation.jsx";

const Sessions = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);
      

    const toggleView = () => {
        setIsCollapsed(!isCollapsed);
    };

    const sessions = [
        {   id: 1, course: "PROG1124", location: "M112",timeSpent: "00:01:10:00", activeCount: 5, totalCount: 7},
        {   id: 2, course: "PROG1210", location: "M216",timeSpent: "00:00:20:00", activeCount: 2, totalCount: 3},
        {   id: 3, course: "PROG1800", location: "M302",timeSpent: "00:00:10:00", activeCount: 4, totalCount: 5},
    ]

    const [selectedSessionID, setSelectedSessionID] = useState(null);
        
    return(
        <>
            <Header />
            <main>
                <div className="sessions-layout">
                    <div className="sessions-map">
                        <MapComponent/>   
                        <div className= {`sessions-left-pane ${isCollapsed ? 'collapsed' : ''}`}>
                            <div className= {`sessions-pane-toggle-view ${isCollapsed ? 'rotated' : ''}`} onClick={toggleView}><img src="src/assets/left-align.png"></img></div>
                            <SessionTopicSelection/> 
                            <div className="sessions-left-pane-content">
                                <SessionTopicTrackerTile sessionStatus = "Active"/>
                                <SessionTopicTrackerTile sessionStatus = "Idle"/>
                            </div> 
                            <SessionInformation selectedSessionID={selectedSessionID}/>        
                        </div>
                    </div>              
                </div>          
            </main>
            <Footer />

        </>
    )
}

export default Sessions;