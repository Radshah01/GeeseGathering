import proptype from 'prop-types'
import React, {useState} from 'react'

const SessionTopicTrackerTile = (props) => {

    const sessions = [
        {   id: 1, course: "PROG1124", location: "M112",timeSpent: "00:01:10:00", activeCount: 5, totalCount: 7},
        {   id: 2, course: "PROG1210", location: "M216",timeSpent: "00:00:20:00", activeCount: 2, totalCount: 3},
        {   id: 3, course: "PROG1800", location: "M302",timeSpent: "00:00:10:00", activeCount: 4, totalCount: 5},
    ] 

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
                        <th>Action</th>
                        </tr>   
                    </thead>
                    <tbody className="tracker-topic-tile-content-table-tbody">
                        {sessions.map((session) => (
                            <tr key={session.id} onClick={() => console.log(session.course)}>
                                <td>{session.course}</td>
                                <td>{session.location}</td>
                                <td><span style={{color: "#3CFF76", fontWeight: "bold", fontSize: "17px"}}>{session.activeCount}</span> / {session.totalCount}</td>
                                <td><div style={{background: "#32a852", padding: "5px", width: "40px"}}>Join</div></td>
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