import React, {useState} from "react";

const ShortcutSessions = () => {

      const [sessions, setSession] = useState([
          {   id: 1, profilePic: "src/assets/profile-removebg-preview.png", name: "PROG1124",activeCount: 2, totalCount: 5},
          {   id: 2,profilePic: "src/assets/profile-removebg-preview.png", name: "PROG1210",  activeCount: 4, totalCount: 5},
          {   id: 3,profilePic: "src/assets/profile-removebg-preview.png", name: "MATH1224", activeCount: 3, totalCount: 4},
          {   id: 4, profilePic: "src/assets/profile-removebg-preview.png", name: "PSYC1760", activeCount: 0, totalCount: 3},
          {   id: 5, profilePic: "src/assets/profile-removebg-preview.png", name: "MOV1100", activeCount: 1, totalCount: 2},
          {   id: 6, profilePic: "src/assets/profile-removebg-preview.png", name: "TEST1234",  activeCount: 0, totalCount: 1},
          {   id: 7, profilePic: "src/assets/profile-removebg-preview.png", name: "RNDM5088", activeCount: 0, totalCount: 2},


      ])

      
      const [isPopupOpen, setIsPopupOpen] = useState(false);


      const handleSeeMoreClick = () => setIsPopupOpen(true);
      const handleClosePopup = () => setIsPopupOpen(false);
  
      return(
          <>
          <section className="home-friends">
              <h3 className="home-friends-title">Sessions</h3>
              <ul>
                  {sessions.slice(0,5).map((session) => (
                      <li key={session.id} className="home-friend-tile">
                          <img
                              className="friend-logo"
                              src={session.profilePic}
                              alt={session.name + " Profile Picture"}
                          />
                          <span>{session.name}</span>
                          <div className="home-active-session"><span style={{color: "#3CFF76", fontWeight: "bold", fontSize: "18px"}}>{session.activeCount}</span>/ {session.totalCount}</div>
                      </li>
                  ))}
              </ul>
              <a href="#" onClick={(e) => {e.preventDefault(); handleSeeMoreClick()}}>See More</a>
          </section>
          {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={handleClosePopup}>
              &times;
            </button>
            <h3>All Sessions</h3>
            <hr></hr>
            <ul>
              {sessions.map((session) => (
                <li key={session.id} className="home-friend-tile">
                  <img
                    className="friend-logo"
                    src={session.profilePic}
                    alt={session.name + " Profile Picture"}
                  />
                  <span>{session.name}</span>
                  <div className="home-active-session">
                    <span style={{ color: "#3CFF76", fontWeight: "bold", fontSize: "18px" }}>
                      {session.activeCount}
                    </span>
                    / {session.totalCount}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
          </>
      );
}

export default ShortcutSessions