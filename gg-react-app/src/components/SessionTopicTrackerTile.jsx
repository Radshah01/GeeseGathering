import proptype from 'prop-types'
import React, {useState} from 'react'

const SessionTopicTrackerTile = (props) => {

  

    const [isActiveTileCollapsed, setIsActiveTileCollapsed] = useState(false);
    const [isIdleTileCollapsed, setIsIdleTileCollapsed] = useState(false);


    const toggleActiveTileView = () => { 
        setIsActiveTileCollapsed(!isActiveTileCollapsed);
    }

    const toggleIdleTileView = () => { 
        setIsIdleTileCollapsed(!isIdleTileCollapsed);
    }


    return (
        <>
            <div className={`tracker-topic-tile ${isActiveTileCollapsed ? 'collapsed' : ''}`}>
                <div className="tracker-topic-tile-header">
                    <div className="tracker-topic-tile-header-title">{props.sessionStatus} Sessions</div>
                    <div className="tracker-topic-tile-header-stats">
                    <div className="tracker-topic-tile-header-arrow" onClick={toggleActiveTileView}><img src="src/assets/right-arrow.png"></img></div>
                </div>
                </div>
                <div className="tracker-topic-tile-content">
                    <table className="tracker-topic-tile-content-table">
                        <thead className="tracker-topic-tile-content-table-thead">
                        <tr>
                        <th>Session</th>
                        <th>Location</th>
                        <th>Active</th>
                        <th></th>
                        </tr>   
                    </thead>
                    <tbody className="tracker-topic-tile-content-table-tbody">
                        {sessions.map((session) => (
                            <tr key={session.id} onClick={() => {
                                const sessionInformation = document.querySelector(".sessions-selected-session");
                                sessionInformation.classList.add("show");

                                setSelectedSessionID(session.id);
                            }}>
                                <td>{session.course}</td>
                                <td>{session.location}</td>
                                <td><span style={{color: "#3CFF76", fontWeight: "bold", fontSize: "17px"}}>{session.activeCount}</span> / {session.totalCount}</td>
                                <td>View</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
}

export default SessionTopicTrackerTile