import propTypes from 'prop-types'
import React, {useState} from 'react';

const SessionInformation = ({sessions, selectedSessionID}) => {


  
    
    return (
        <div className="sessions-selected-session">
            <div className="session-close-information" onClick={() => {
                 const sessionInformation = document.querySelector(".sessions-selected-session");
                 sessionInformation.classList.remove("show")
            }}>X Close</div>
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
            <div className='session-information-picture'>
            </div>  
            <div className='session-information-members-tile'>
                <div>Members</div>
                <div>5/6</div>
                <div><img style={{rotate: "90deg"}} src='src/assets/right-arrow.png'></img></div>
                <div className='session-infomration-members-tile-content'>
                    <table>
                        <thead>
                            <tr>
                                <td>Profile</td>
                                <td>Status</td>
                                <td>Time</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>pic</td>
                                <td>name</td>
                                <td>status</td>
                                <td>1h 10min</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button>Join</button>
            </div>             
        </div>  
    );
}

export default SessionInformation;