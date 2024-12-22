import React, {useState} from "react";

const ShortcutSessions = () => {

      const [sessions, setSession] = useState([
          {   id: 1, profilePic: "src/assets/profile-removebg-preview.png", name: "PROG1124", isActive: true},
          {   id: 2,profilePic: "src/assets/profile-removebg-preview.png", name: "PROG1210", isActive: true},
          {   id: 3,profilePic: "src/assets/profile-removebg-preview.png", name: "MATH1224", isActive: false},
          {   id: 4, profilePic: "src/assets/profile-removebg-preview.png", name: "PSYC1760", isActive: true},
          {   id: 5, profilePic: "src/assets/profile-removebg-preview.png", name: "MOV1100", isActive: true},

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
                          {session.isActive?  (<span className="active-icon"/>) : ""}
                      </li>
                  ))}
              </ul>
              <a href="#">See More</a>
          </section>
          </>
      );
}

export default ShortcutSessions