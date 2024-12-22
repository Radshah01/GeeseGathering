import Header from "../components/Header";
import Footer from "../components/Footer";
import ShortcutFriends from "../components/ShortcutFriends";
import ShortcutSessions from "../components/ShortcutSessions";
import ShortcutButtons from "../components/ShortcutButtons";


const Home = () => {

    return(
        <>
         <Header />
         <main>
            <div className="home-layout">
                <aside className="home-sidebar">
                    <ShortcutFriends/>
                    <ShortcutSessions />
                </aside>
                <section className="home-dashboard">
                    <h2 className="home-dashboard-title">Dashboard</h2>
                    <div className="home-tracker">
                        <h3 className="home-dashboard-subheadings">Session Tracker</h3>
                    </div>  
                    <div className="home-shortcuts">
                        <h3 className="home-dashboard-subheadings">Shortcuts</h3>
                        <ShortcutButtons name="Start Pomodoro Timer"/>
                        <ShortcutButtons name="Join Session"/>
                     
                    </div>      
                </section>
            </div>
         </main>
         <Footer />
        </>
    );
}

export default Home;