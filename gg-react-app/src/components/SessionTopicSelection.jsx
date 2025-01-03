import React, {useState} from "react";

const SessionTopicSelection = () => {

    const topics = [
        {name: "Programming" ,topicColor: "#0086EB"},
        {name: "Math" ,topicColor: "#FF4974"},
        {name: "Elective" ,topicColor: "#08D0E7"},
        {name: "Other" ,topicColor: "#7E998A"}
    ]


    const [topicIndex, setTopicIndex] = useState(0);

    const topicIndexChange = (direction) => {

        setTopicIndex((prevIndex) => {

            if (direction === "decrement") {
              return prevIndex === 0 ? topics.length - 1 : prevIndex - 1;
            } 

            else if (direction === "increment") {
              return prevIndex === topics.length - 1? 0 :  (prevIndex + 1);
            }

            return prevIndex;     
        });
    }

    return(
        <div className="pane-session-menu">
            <button className="button-icon" id="decrementIndex" onClick={() => topicIndexChange("decrement")}><img src="src/assets/right-arrow.png" style={{rotate: "180deg"}}></img></button>
            <div className="pane-session-menu-title"  style={{ color: topics[topicIndex].topicColor }}>{topics[topicIndex].name}</div>
            <button className="button-icon" id="incrementIndex" onClick={() => topicIndexChange("increment")}><img src="src/assets/right-arrow.png"></img></button>
        </div>
    );
}

export default SessionTopicSelection