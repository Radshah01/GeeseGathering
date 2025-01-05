import React, {useState} from "react";


const ShortcutFriends = () => {

    const [friends, setFriends] = useState([
        {   id: 1, profilePic: "src/assets/profile-removebg-preview.png", name: "Alex Mertens", isActive: true},
        {   id: 2,profilePic: "src/assets/profile-removebg-preview.png", name: "Roy Scott", isActive: true},
        {   id: 3,profilePic: "src/assets/profile-removebg-preview.png", name: "Stephany Bell", isActive: false},
        {   id: 4,profilePic: "src/assets/profile-removebg-preview.png", name: "Trevor Cooper", isActive: false},
        {   id: 5,profilePic: "src/assets/profile-removebg-preview.png", name: "Yagami Light", isActive: false},

    ])


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleSeeMoreClick = () => {
        setIsPopupOpen(true)
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false)
    }

    return(
        <>
        <section className="home-friends">
            <h3 className="home-friends-title">Friends</h3>
            <ul>
                {friends.slice(0,3).map((friend) => (
                    <li key={friend.id} className="home-friend-tile">
                        <img
                            className="friend-logo"
                            src={friend.profilePic}
                            alt={friend.name + " Profile Picture"}
                        />
                        <span>{friend.name}</span>
                        {friend.isActive?  (<span className="active-icon"/>) : ""}
                    </li>
                ))}
            </ul>
            <a href="#" onClick={(e) => {e.preventDefault(); handleSeeMoreClick();}}>See More</a>
            {isPopupOpen && (
               <div className="popup-overlay">
               <div className="popup-content">
                 <button className="popup-close" onClick={handleClosePopup}>
                   &times;
                 </button>
                 <h3>All Friends</h3>
                 <hr></hr>
                 <ul>
                   {friends.map((friend) => (
                     <li key={friend.id} className="popup-friend-tile">
                       <img
                         className="friend-logo"
                         src={friend.profilePic}
                         alt={`${friend.name} Profile Picture`}
                       />
                       <span>{friend.name}</span>
                       {friend.isActive ? (<span className="active-icon" />) : ""}
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
            )}
        </section>
        </>
    );
}

export default ShortcutFriends;