import Header from "../components/Header";
import Footer from "../components/Footer";
import ShortcutFriends from "../components/ShortcutFriends";
import ShortcutSessions from "../components/ShortcutSessions";



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
                <p>sfjdjhjhkj</p>
            </div>
         </main>
         <Footer />
        </>
    );
}

export default Home;