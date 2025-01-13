
const Header = () => {

    return(
        <header>
            <div className="header">
                <div className="header-title">
                    <img className="logo" src="src/assets/geesegathering.png" alt="logo"/>
                    <h1>Geese<br/>Gathering</h1>
                </div>
                <nav style={{marginLeft: "35px"}}>
                    <ul className="navbar-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/sessions">Sessions</a></li>

                    </ul>
                </nav>
                <div className="header-options-section">
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