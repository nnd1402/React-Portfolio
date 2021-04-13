import React from 'react'
import fortisi from '../images/netflix.png'
import covid from '../images/city-guide-app.png'
import travel from '../images/portfolio.png'
import music from '../images/MusicPlayer.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus} from '@fortawesome/free-solid-svg-icons'

import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";
  

const Portfolio = () => {

    //Fortisi
    const openPopupFortisi = () => {
        const content = (
    <>
        <img className="portfolio-image-popupbox" src={fortisi} alt="Fortisi E-commerce Project..."/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam dolores consectetur voluptate explicabo! Nemo laudantium quos, perspiciatis maxime placeat praesentium optio vitae consequatur recusandae blanditiis sed eligendi qui necessitatibus!</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nnd1402/Fortisi.git")}>https://github.com/nnd1402/Fortisi.git</a>
    </>
    )
    PopupboxManager.open({content});
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Fortisi",
          },
        },
      });
        
    }

    const popupboxConfigFortisi = {
        titleBar: {
            enable: true,
            text: "Fortisi E-commerce project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Covid daily numbers
    const openPopupCovid = () => {
        const content = (
    <>
        <img className="portfolio-image-popupbox" src={covid} alt="Covid Tracker Project..."/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam dolores consectetur voluptate explicabo! Nemo laudantium quos, perspiciatis maxime placeat praesentium optio vitae consequatur recusandae blanditiis sed eligendi qui necessitatibus!</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nnd1402/covid-tracker.git")}>https://github.com/nnd1402/covid-tracker.git</a>
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Covid Daily Numbers",
          },
        },
      });
        
    }

    const popupboxConfigCovid = {
        titleBar: {
            enable: true,
            text: "Covid Daily Numbers Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Travel Agency
    const openPopupTravelAgency = () => {
        const content = (
    <>
        <img className="portfolio-image-popupbox" src={travel} alt="Travel Agency Project..."/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam dolores consectetur voluptate explicabo! Nemo laudantium quos, perspiciatis maxime placeat praesentium optio vitae consequatur recusandae blanditiis sed eligendi qui necessitatibus!</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nnd1402/Travel-Agency.git")}>https://github.com/nnd1402/Travel-Agency.git</a>
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Travel Agency Project",
          },
        },
      });
    }

    const popupboxConfigTravelAgency = {
        titleBar: {
            enable: true,
            text: "Travel Agency Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Music Player
    const openPopupMusicPlayer = () => {
        const content = (
    <>
        <img className="portfolio-image-popupbox" src={music} alt="Music Player..."/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam dolores consectetur voluptate explicabo! Nemo laudantium quos, perspiciatis maxime placeat praesentium optio vitae consequatur recusandae blanditiis sed eligendi qui necessitatibus!</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nnd1402/MusicPlayer.git")}>https://github.com/nnd1402/MusicPlayer.git</a>
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Music Player",
          },
        },
      });
        
    }

    const popupboxConfigMusicPlayer = {
        titleBar: {
            enable: true,
            text: "Music Player Project."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupFortisi}>
                        <img className="portfolio-image" src={fortisi} alt="Netflix Clone Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupCovid}>
                        <img className="portfolio-image" src={covid} alt="Covid Tracker Project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupTravelAgency}>
                        <img className="portfolio-image" src={travel} alt="Travel Agency project"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupMusicPlayer}>
                        <img className="portfolio-image" src={music} alt="Music Player"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigFortisi} />
            <PopupboxContainer {...popupboxConfigCovid} />
            <PopupboxContainer {...popupboxConfigTravelAgency} />
            <PopupboxContainer {...popupboxConfigMusicPlayer} />
        </div>
    )
}

export default Portfolio
