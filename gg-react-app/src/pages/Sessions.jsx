import Header from "../components/Header";
import Footer from "../components/Footer";
import ShortcutFriends from "../components/ShortcutFriends";
import ShortcutSessions from "../components/ShortcutSessions";
import ShortcutButtons from "../components/ShortcutButtons";
import TopicTracker from "../components/TopicTracker";
import StackedBarChart from "../components/StackedBarChart";
import {UserData} from '../Data'
import { useState } from "react";
import SessionTopicSelection from "../components/SessionTopicSelection.jsx";
import { color } from "chart.js/helpers";
import MapComponent from "../components/MapComponent.jsx";
import SessionTopicTrackerTile from "../components/SessionTopicTrackerTile.jsx";

const Sessions = () => {

    const [isCollapsed, setIsCollapsed] = useState(false);
      

    const toggleView = () => {
        setIsCollapsed(!isCollapsed);
    };

       
        
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
                        </div>
                    </div>              
                </div>          
            </main>
            <Footer />

        </>
    )
}

export default Sessions;