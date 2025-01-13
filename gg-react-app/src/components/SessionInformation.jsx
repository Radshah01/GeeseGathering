import propTypes from 'prop-types'
import React, {useState} from 'react';
import SessionImageSlider from './SessionImageSlider';

const SessionInformation = ({sessions, selectedSessionID}) => {


    const [members, setMembers] = useState([
            {   id: 1, profilePic: "src/assets/profile-removebg-preview.png", name: "Charlie Hopkins", isActive: true, timeSpent: "00:01:05:00"},
            {   id: 2,profilePic: "src/assets/profile-removebg-preview.png", name: "Jordan Fox", isActive: true, timeSpent: "00:00:55:00"},
            {   id: 3,profilePic: "src/assets/profile-removebg-preview.png", name: "Oscar Norton", isActive: true, timeSpent: "00:00:42:00"},
            {   id: 4,profilePic: "src/assets/profile-removebg-preview.png", name: "Trevor Cooper", isActive: true, timeSpent: "00:00:08:00"},
            {   id: 5,profilePic: "src/assets/profile-removebg-preview.png", name: "Rachel Williams", isActive: true, timeSpent: "00:01:10:00"},
            {   id: 6,profilePic: "src/assets/profile-removebg-preview.png", name: "Percy Jenkins", isActive: false, timeSpent: "00:01:1:00"},
            {   id: 7,profilePic: "src/assets/profile-removebg-preview.png", name: "Jack Watford", isActive: false, timeSpent: "00:01:10:00"},
    
        ])

        
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
    

    const [isCollapsed, setIsCollapsed] = useState(false);
      

    const toggleView = () => {
        setIsCollapsed(!isCollapsed);
    };
    
    return (
        <div className="sessions-selected-session">
            <div className="session-close-information" onClick={() => {
                 const sessionInformation = document.querySelector(".sessions-selected-session");
                 sessionInformation.classList.remove("show")
            }}><span style={{fontWeight: "bold" }}>X </span> Close</div>
            {/* <div className="session-information">Session Information</div>   */}
            <div className="session-information-header">
                {selectedSessionID && 
                     sessions.filter(session => session.id === selectedSessionID)
                            .map(selectedSession => (
                            <div className='session-information-course-location' key={selectedSession.id}>
                                <div>{selectedSession.course}</div>
                                <div>{selectedSession.location}</div>
                            </div>
                            ))
                }
             
            </div> 
            <SessionImageSlider/> 
            <div className='session-information-members'>
                <div className={`tracker-topic-tile ${isCollapsed ? 'collapsed' : ''}`}>
                    <div className="tracker-topic-tile-header">
                        <div className="tracker-topic-tile-header-title" style={{color: "#f7f7f7"}}>Members</div>
                        <div className="tracker-topic-tile-header-stats">
                        {selectedSessionID && 
                        sessions.filter(session => session.id === selectedSessionID)
                                .map(selectedSession => (
                            <div><span style={{color: "#3CFF76", fontWeight: "bold"}}>{selectedSession.activeCount}</span> / {selectedSession.totalCount}</div>
                                ))}
                        <div className="tracker-topic-tile-header-arrow" onClick={toggleView}><img  src="src/assets/right-arrow.png"></img></div>
                        </div>
                    
                    </div>
                    <div className="tracker-topic-tile-content">
                        <table className="tracker-topic-tile-content-table">
                            <thead className="tracker-topic-tile-content-table-thead">
                                <tr>
                                    <th>Member</th>
                                    <th></th>
                                    <th>Status</th>
                                    <th>Time</th>
                                </tr>   
                            </thead>
                            <tbody className="tracker-topic-tile-content-table-tbody">
                                {members.map((member) => (
                                    <tr className='test' key={member.id}>
                                        <td style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                            <img
                                                className="friend-logo"
                                                src={member.profilePic}
                                                alt={member.name + " Profile Picture"}
                                                style={{width: "50px", height: "40px", marginRight: "12px"}}
                                            />
                                            <span style={{display: "flex", flexDirection: "row"}}>{member.name}</span>
                                        </td>
                                        <td></td>
                                        <td> {member.isActive?  (<span className="active-member-icon"></span>) : ""}</td>
                                        <td>{convertTimeFormat(member.timeSpent)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                  
                </div>   
                <div className="session-join-container">
                <button className='session-join'>Join</button> 
                </div>
            
            </div>
        </div>         
    
    );
}

export default SessionInformation;