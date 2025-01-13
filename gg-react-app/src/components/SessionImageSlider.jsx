import { useState } from "react";

const SessionImageSlider = () => {

    const locationImages = [
        {id:0, url: "src/assets/classroom-pic.jpg", title: "room-view1"},
        {id:1, url: "src/assets/classroom-pic2.jpg", title: "room-view2"},
        {id:2, url: "src/assets/classroom-pic3.jpg", title: "room-view3"},
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentIndex(currentIndex => currentIndex < locationImages.length - 1? currentIndex + 1: 0)
    }

    const handlePreviousImage = () => {
        setCurrentIndex(currentIndex => currentIndex > 0? currentIndex - 1 : locationImages.length - 1);
    }

    const jumpToImage = (i) => {
        setCurrentIndex(i)
    }

    return (
        <>
        <div className='session-information-picture'>
                <div className="session-information-current-picture" style={{height: "250px", width: "auto"}}><img src={locationImages[currentIndex].url}></img>
                <div style={{display: "inline-block"}} className="session-information-arrow"><img style={{rotate: "180deg", width: "25px", height: "25px"}} src="src/assets/right-arrow.png"  onClick={handlePreviousImage}></img></div>
                <div style={{display: "inline-block"}} className="session-information-arrow"><img src="src/assets/right-arrow.png" style={{ width: "25px", height: "25px"}} onClick={handleNextImage}></img></div></div>
        </div> 
        <div className="session-information-jump-to-picture">
            {
                locationImages.map((image) => {
                    return (
                        <div key={image.id} className="slide-options" onClick={() => jumpToImage(image.id)}>
                            <div className="slide-options-pointer"></div>
                        </div>
                    );
                })
            }
           
        </div>
        </>
        
    );
}

export default SessionImageSlider