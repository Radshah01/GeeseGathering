import propTypes from 'prop-types'

const TopicTracker = (props) => {

    const sessions = [
            {   id: 1, course: "PROG1124", location: "M112",timeSpent: "01:10:00"},
            {   id: 2, course: "PROG1210", location: "M216",timeSpent: "00:20:00"},
            {   id: 3, course: "PROG1800", location: "M302",timeSpent: "00:10:00"},
        ]

    function convertTimeFormat(timeString) {
    
        const [days, hours, minutes] = timeString.split(":");


        const formattedDays = parseInt(days, 10);
        const formattedHours = parseInt(hours, 10);
        const formattedMinutes = parseInt(minutes, 10);
      

        let result = "";
        if (formattedDays > 0) result += `${formattedDays}d `;
        if (formattedHours >= 0) result += `${formattedHours}h `;
        if (formattedMinutes > 0) result += `${formattedMinutes}m`;
      
        return result.trim();
        }
        
    

    return(
        <div className="tracker-topic-tile">
            <div className="tracker-topic-tile-header">
                <div className="tracker-topic-tile-header-title" style={{color: props.topicColor}}>{props.name}</div>
                <div className="tracker-topic-tile-header-stats">
                    <div className="tracker-topic-tile-header-time" style={{color: props.topicColor}}>{convertTimeFormat(props.totalTimeSpent)}</div>
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
                        </tr>   
                    </thead>
                    <tbody className="tracker-topic-tile-content-table-tbody">
                        {sessions.map((session) => (
                            <tr key={session.id}>
                                <td>{session.course}</td>
                                <td>{session.location}</td>
                                <td>{convertTimeFormat(session.timeSpent)}</td>
                            </tr>
                        ))}
                        {/* <tr>
                            <td>PROG1124</td>
                            <td>M112</td>
                            <td>1h 10m</td>
                        </tr>
                        <tr>
                            <td>PROG1210</td>
                            <td>M216</td>
                            <td>0h 20m</td>
                        </tr>
                        <tr>
                            <td>PROG1800</td>
                            <td>S302</td>
                            <td>0h 10m</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default TopicTracker