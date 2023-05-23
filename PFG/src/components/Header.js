import React from 'react'
import "../styles/header.css";
import {TbBrandCampaignmonitor,} from "react-icons/tb"
import {SlSocialInstagram,} from "react-icons/sl"

export const Header = (props) => {

  const sendInsta = () => {
    window.open('https://www.instagram.com/unaialberdi22/', '_blank')
  }

  return (
    <div className="Header">
        <div id="Title" className="App-header" onClick={props.onMainClick}>
            <TbBrandCampaignmonitor size={30}/>
            <button id='name' disabled><p>UNAI <strong>ALBERDI</strong></p></button>
        </div>
        <div id="menu" className="App-header">
            <button onClick={props.onBiographyClick} className='ButtonMenu'><p>Sobre mí</p></button>
            <button onClick={props.onPortfolioClick} className='ButtonMenu' id='portfolioButton'><p>Portafolio</p></button>
            <button onClick={props.onPortraitClick} className='ButtonMenu' id='portraitButton'><p>• Retratos</p></button>
            <button onClick={props.onStreetClick} className='ButtonMenu' id='streetButton'><p>• Calle</p></button>
            <button onClick={props.onSportClick} className='ButtonMenu' id='sportButton'><p>• Deportes</p></button>
            <button onClick={props.onAnalogClick} className='ButtonMenu' id='analogButton'><p>• Analogicas</p></button>
            <button onClick={props.onContactClick} className='ButtonMenu'><p>Contacto</p></button>
        </div>
        <SlSocialInstagram id='instaIcon' size={20} onClick={sendInsta}/>
    </div>
  )
}
