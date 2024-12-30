import React, {useState} from "react";

const ShortcutSessions = () => {

      const [sessions, setSession] = useState([
          {   id: 1, profilePic: "src/assets/profile-removebg-preview.png", name: "PROG1124", isActive: true, activeCount: 2, totalCount: 5},
          {   id: 2,profilePic: "src/assets/profile-removebg-preview.png", name: "PROG1210", isActive: true, activeCount: 4, totalCount: 5},
          {   id: 3,profilePic: "src/assets/profile-removebg-preview.png", name: "MATH1224", isActive: false, activeCount: 3, totalCount: 4},
          {   id: 4, profilePic: "src/assets/profile-removebg-preview.png", name: "PSYC1760", isActive: true, activeCount: 0, totalCount: 3},
          {   id: 5, profilePic: "src/assets/profile-removebg-preview.png", name: "MOV1100", isActive: true, activeCount: 1, totalCount: 2},

      ])
  
      return(
          <>
          <section className="home-friends">
              <h3 className="home-friends-title">Sessions</h3>
              <ul>
                  {sessions.map((session) => (
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
              <a href="#">See More</a>
          </section>
          </>
      );
}

export default ShortcutSessions