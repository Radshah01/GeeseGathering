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

const Sessions = () => {


  
    const sessions = [
        {   id: 1, course: "PROG1124", location: "M112",timeSpent: "00:01:10:00", activeCount: 5, totalCount: 7},
        {   id: 2, course: "PROG1210", location: "M216",timeSpent: "00:00:20:00", activeCount: 2, totalCount: 3},
        {   id: 3, course: "PROG1800", location: "M302",timeSpent: "00:00:10:00", activeCount: 4, totalCount: 5},
    ]


    function convertTimeFormat(timeString) {
    
        const [days, hours, minutes] = timeString.split(":");


        const formattedDays = parseInt(days, 10);
        const formattedHours = parseInt(hours, 10);
        const formattedMinutes = parseInt(minutes, 10);
      

        let result = "";
        if (formattedDays > 0) result += `${formattedDays}d `;
        if (formattedHours >= 0) result += `${formattedHours}h `;
        if (formattedMinutes > 0) result += `${formattedMinutes}min`;
      
        return result.trim();
        }
            

    // function handleClick(event) {
    //     const div = event.target;
    //     div.classList.add('shrink');
    // }
    return(
        <>
            <Header />
            <main>
                <div className="sessions-layout">
                    <div className="sessions-map">
                        <MapComponent/>
                    </div>
                    
                    
                        
                    
                    
                </div>
           
            </main>
            <Footer />

        </>
    )
}

export default Sessions;