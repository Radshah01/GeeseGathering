import Header from "../components/Header";
import Footer from "../components/Footer";
import ShortcutFriends from "../components/ShortcutFriends";
import ShortcutSessions from "../components/ShortcutSessions";
import ShortcutButtons from "../components/ShortcutButtons";
import TopicTracker from "../components/TopicTracker";
import StackedBarChart from "../components/StackedBarChart";
import {UserData} from '../Data'
import { useState } from "react";

const Home = () => {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => (data.hour)),
        datasets: [{
            label: "Programming",
            data: UserData.map((data) => data.progTimeSpent),
            backgroundColor: [
                'rgb(0, 133, 235)',
            ],
            borderRadius: {
              topLeft: 4,
              bottomLeft: 4,
              bottomRight: 4,
              topRight: 4
            },
            borderSkipped: false,
              
        },
        {
            label: "Math",
            data: UserData.map((data) => data.mathTimeSpent),
            backgroundColor: [
                '#FF4974',
              ],
              borderRadius: {
                topLeft: 4,
                bottomLeft: 4,
                bottomRight: 4,
                topRight: 4
              },
              borderSkipped: false,
             
        },
        {
            label: "Elective",
            data: UserData.map((data) => data.electiveTimeSpent),
            backgroundColor: [
                '#08D0E7',
              ],
              borderRadius:  {
                topLeft: 4,
                bottomLeft: 4,
                bottomRight: 4,
                topRight: 4
              },
              borderSkipped: false,
          
           
        },
        {
            label: "Other",
            data: UserData.map((data) => data.otherTimeSpent),
            backgroundColor: [
                '#7E998A',
              ],
              borderRadius:  {
                topLeft: 4,
                bottomLeft: 4,
                bottomRight: 4,
                topRight: 4
              },
              borderSkipped: false,
            
           
        },
    ]
    })


    return(
        <>
         <Header />
         <main>
            <div className="home-layout">
                <aside className="home-sidebar">
                    <ShortcutFriends/>
                    <ShortcutSessions />
                </aside>
                <section className="home-dashboard">
                    <h2 className="home-dashboard-title">Dashboard</h2>
                    <div className="home-tracker">
                        <h3 className="home-dashboard-subheadings">Session Tracker</h3>
                        <select className="tracker-timeframe">
                            <option>Today</option>
                            <option>Past 7 Days</option>
                            <option>Past Month</option>
                        </select>
                        <div className="tracker-result">
                          <span className="tracker-result-hour">3</span>
                          <span>h </span>
                          <span className="tracker-result-minute">25</span>
                          <span>min</span>
                        </div>
                        <div className="tracker-analytics">
                            <StackedBarChart chartData={userData}/>
                        </div>
                        <div className="tile-layout">
                          <TopicTracker name="Programming" topicColor="#0086EB" totalTimeSpent="00:01:30:20"/>
                          <TopicTracker name="Math" topicColor="#FF4974" totalTimeSpent="00:00:35:20"/>
                          <TopicTracker name="Elective" topicColor="#08D0E7" totalTimeSpent="00:00:50:20"/>
                          <TopicTracker name="Other" topicColor="#7E998A" totalTimeSpent="00:00:30:20"/> 
                        </div>
                      </div>  
                    <div className="home-shortcuts">
                        <h3 className="home-dashboard-subheadings">Shortcuts</h3>
                        
                        <ShortcutButtons name="Start Pomodoro Timer"/>
                        <ShortcutButtons name="Join Session"/>
                     
                    </div>      
                </section>
            </div>
         </main>
         <Footer />
        </>
    );
}

export default Home;