
const Header = () => {

    return(
        <header>
            <div className="header">
                <div className="header-title">
                    <img className="logo" src="src/assets/geesegathering.png" alt="logo"/>
                    <h1>Geese<br/>Gathering</h1>
                </div>
                <nav>
                    <ul className="navbar-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/pomodoro">Pomodoro</a></li>
                        <li><a href="/sessions">Sessions</a></li>
                        <li><a href="/friends">Friends</a></li>
                    </ul>
                </nav>
                <div className="header-options-section">
                    <div className="header-options">
                        <img className="notification-logo" src="src/assets/notifications.png" alt="notification"/>
                    </div>
                    <div className="header-options">
                        <img className="profile-logo" src="src/assets/profile-removebg-preview.png" alt="profile"/>
                        <span>User</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;