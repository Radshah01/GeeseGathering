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
                    <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox= "485 690 2600 90"
    style={{
      width: '100%',
      height: '100%',
      display: 'block',
    }}
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="m 1218.5089,586.34421
         c 0,0 -3.528,3.68484 -3.6848,3.13603 -0.1568,-0.5488 -0.078,-5.40965 -0.078,-5.40965
         l -68.8358,-27.51866 -7.6833,1.09761 -54.4101,-21.7954 -28.8515,22.57941 0.1568,8.15368 
         0.9408,0.94081 0.4704,3.29283 138.211,56.506 19.4587,-17.85094 -1.8295,-0.60981
         c 0,0 6.4308,-3.10451 6.3754,-3.65889 -0.055,-0.55438 -0.2397,-18.86302 -0.2397,-18.86302
         z"
         fill="rgba(255, 36, 36, 0.3) "
         stroke="#5f0000" 
         strokeWidth="2"
    />
    <path
      d="m 1106.7581,436.84901 
         -14.6356,-5.98727 -0.2217,-9.31353 90.0308,-61.86847 15.079,-0.887 60.9815,21.28807 
         -0.2218,10.64404 30.1582,12.86155 8.4265,-7.98303 12.6398,4.21326 -0.4435,1.77401 
         24.3926,9.97878 -0.6653,10.42229
         c 0,0 -10.4223,9.09178 -11.7528,8.87003 -1.3305,-0.22175 -24.1708,-6.20902 -24.1708,-6.20902
         l -9.0918,6.65252 -18.1836,-2.66101 -41.0239,32.81912 -17.74,-11.08754 -5.5438,4.65676 
         -0.4435,11.97454 -2.4392,4.87852 3.7697,13.5268 -34.1496,6.65252
         c 0,0 -13.7485,-4.21326 -12.8615,-4.21326 0.887,0 4.2132,-5.32202 4.2132,-5.32202
         l -1.3305,-9.31353 -5.322,-4.21327
         c 0,0 -1.3305,-3.76976 -0.2218,-3.32626 1.1088,0.4435 2.8828,-2.88276 2.8828,-2.88276
         l -6.4308,-6.87427 14.8573,-10.86579 -11.7528,-4.43502 -7.5395,3.99152 -33.4843,-13.0833
         z"
         fill="rgba(255, 36, 36, 0.3) "
         stroke="#5f0000" 
         strokeWidth="2"  
    />
    <path
      d="m 1027.658,528.6447 0.1109,7.53953 37.6976,-4.87852 6.4308,8.5374 0.2217,2.55014 
         23.173,-6.87428 0.9979,-16.52043 21.6207,-5.54377 c 0,0 7.7612,-4.76764 7.7612,-5.43289 
         0,-0.66525 1.774,-14.19205 1.774,-14.19205 l 18.6271,-1.55225 3.2154,-2.55014 
         3.2154,1.66313 3.3262,-1.774 5.4329,-4.65677 -0.5543,-2.77188 2.5501,-0.33263 
         -2.8828,-9.20266 -3.6589,-1.21963 -1.2196,-5.87639 2.1067,-1.55226 -0.6653,-4.21326 
         -4.8785,-3.43714 14.3859,-10.17892 -12.2305,-4.07684 -6.272,3.13603 -33.8691,-13.01452 
         -33.242,23.04982 -10.3489,-4.70405 -40.4547,29.16507 0.3136,5.64486 -19.4434,0.94081 
         1.568,14.11213 11.9169,0.3136 z"
         fill="rgba(255, 36, 36, 0.3) "
         stroke="#5f0000" 
         strokeWidth="2"
    />
    <path
      d="m 1438.9407,487.62994 3.1045,13.97029 h -5.7655 l 10.4223,22.84033 -3.3263,-0.887 
         2.4393,19.29232 -82.9348,6.20902 -13.9703,-29.7146 -16.853,1.10875 -1.7741,-6.20902 
         c 0,0 -56.5464,4.43501 -57.4334,4.43501 -0.887,0 -12.418,-0.22175 -12.418,-0.22175 
         l -10.8658,-12.86154 -3.1045,-17.51831 5.322,-15.52256 116.1974,-12.86154 
         18.1835,7.09602 8.2048,21.95333 z"
         fill="rgba(255, 36, 36, 0.3) "
         stroke="#5f0000" 
         strokeWidth="2"

    />
    <path
      d="m 1142.4599,555.92917 -8.2047,-31.93211 1.1087,-11.30929 60.0945,-6.87427 
         13.7485,46.78941 4.435,1.77401 4.2133,7.53952 -2.2175,7.53953 -32.8191,3.10451 z"
      fill="rgba(255, 36, 36, 0.3) "
      stroke="#5f0000" 
      strokeWidth="2"
    
    />
    <path
      d="m 1065.6233,531.31484 6.209,7.09602 -2.7719,1.21963 0.5544,10.53316 -9.8679,7.31778 
         -50.1157,3.54801 c 0,0 0.9979,3.65889 0.5544,3.76976 -0.4435,0.11088 -16.74217,1.66313 
         -17.29654,1.55226 -0.55438,-0.11088 -1.55226,-2.21751 -1.55226,-2.21751 l -165.7587,17.51831 
         2.10664,-4.10239 -0.22175,-2.88276 9.20265,-10.31141 -2.32838,-4.87852 -1.3305,-18.73794 
         16.07693,-2.661 v -13.5268 l 89.36555,-8.75916 -4.98939,-1.3305 -1.44138,-11.86367 
         -18.40531,2.32839 -0.33263,-9.42441 -9.4244,-7.87215 -0.22176,-16.18781 -1.88488,-2.88276 
         v -4.87852 l 9.31354,-4.43501 14.19204,0.33262 47.56554,-10.53316 22.84033,0.22175 
         20.73366,1.10876 1.1088,4.32414 9.0918,-1.33051 2.7719,10.86579 -0.3327,18.95969 
         -18.627,1.66313 2.5501,15.96606 11.531,-1.33051 0.4435,2.99364 13.416,5.76552 
         -5.2112,9.86791 2.4393,6.54164 4.9894,1.99576 3.1045,7.42865 z"
         fill="rgba(255, 36, 36, 0.3) "
         stroke="#5f0000" 
         strokeWidth="2"
    />
  </svg>
</div>

                        <div className="sessions-left-pane">
                            <SessionTopicSelection/> 

                            <div className="sessions-left-pane-content">
                                <div className="tracker-topic-tile">
                                    <div className="tracker-topic-tile-header">
                                        <div className="tracker-topic-tile-header-title">Active Sessions</div>
                                        <div className="tracker-topic-tile-header-stats">
                                        <div className="tracker-topic-tile-header-arrow">+</div>
                                    </div>
                                    </div>
                                    <div className="tracker-topic-tile-content">
                                        <table className="tracker-topic-tile-content-table">
                                            <thead className="tracker-topic-tile-content-table-thead">
                                            <tr>
                                            <th>Session</th>
                                            <th>Location</th>
                                            <th>Time</th>
                                            <th>Active</th>
                                            </tr>   
                                        </thead>
                                        <tbody className="tracker-topic-tile-content-table-tbody">
                                            {sessions.map((session) => (
                                                <tr key={session.id}>
                                                    <td>{session.course}</td>
                                                    <td>{session.location}</td>
                                                    <td>{convertTimeFormat(session.timeSpent)}</td>
                                                    <td><span style={{color: "#3CFF76", fontWeight: "bold", fontSize: "17px"}}>{session.activeCount}</span> / {session.totalCount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                </div>
          


                                <div className="tracker-topic-tile">
                                    <div className="tracker-topic-tile-header">
                                        <div className="tracker-topic-tile-header-title">Idle Sessions</div>
                                        <div className="tracker-topic-tile-header-stats">
                                            <div className="tracker-topic-tile-header-arrow">+</div>
                                        </div>
                                    </div>
                                    <div className="tracker-topic-tile-content">
                                        <table className="tracker-topic-tile-content-table">
                                            <thead className="tracker-topic-tile-content-table-thead">
                                                <tr>
                                                <th>Session</th>
                                                <th>Location</th>
                                                <th>Time</th>
                                                <th>Active</th>
                                                </tr>   
                                            </thead>
                                            <tbody className="tracker-topic-tile-content-table-tbody">
                                                {sessions.map((session) => (
                                                    <tr key={session.id}>
                                                        <td>{session.course}</td>
                                                        <td>{session.location}</td>
                                                        <td>{convertTimeFormat(session.timeSpent)}</td>
                                                        <td><span style={{color: "#3CFF76", fontWeight: "bold", fontSize: "17px"}}>{session.activeCount}</span> / {session.totalCount}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> 

                       

                    </div>
                    
                </div>
            </main>
            <Footer />

        </>
    );
}

export default Sessions;