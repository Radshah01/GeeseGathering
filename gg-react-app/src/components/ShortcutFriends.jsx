import React, {useState} from "react";


const ShortcutFriends = () => {

    const [friends, setFriends] = useState([
        {   id: 1, profilePic: "src/assets/profile-removebg-preview.png", name: "Alex Mertens", isActive: true},
        {   id: 2,profilePic: "src/assets/profile-removebg-preview.png", name: "Roy Scott", isActive: true},
        {   id: 3,profilePic: "src/assets/profile-removebg-preview.png", name: "Stephany Bell", isActive: false},
    ])

    return(
        <>
        <section className="home-friends">
            <h3 className="home-friends-title">Friends</h3>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id} className="home-friend-tile">
                        <img src={friend.profilePic} alt={friend.name + " Profile Picture"} style={{width: "90px"}}/>
                        <span>{friend.name}</span>
                        <span>{friend.isActive? "Online" : ""}</span>
                    </li>
                ))}
            </ul>
            <a href="#">See More</a>
        </section>
        </>
    );
}

export default ShortcutFriends;