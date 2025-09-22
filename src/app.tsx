import React from "react";
import { NeumorphicButton } from "./neumorphic-button";
import css from "./app.module.css";

import { AiFillSound } from "react-icons/ai";
import { RiSoundModuleFill } from "react-icons/ri";
import { PiHeadphonesFill } from "react-icons/pi";
import { SiLightning } from "react-icons/si";

export const App: React.FC = () => {

  const [ isSelected, setIsSelected ] = React.useState<string>();

  return (
    <div 
      className={ css.app }>
      
      <div 
        className={ css.app_buttonGroup }>

        <NeumorphicButton
          icon={ <AiFillSound /> }
          isSelected={ isSelected === "sound" }
          onClick={ () => {
            if (isSelected === "sound") {
              setIsSelected(undefined);
            } else {
              setIsSelected("sound");
            }
          } } />
        
        <NeumorphicButton
          icon={ <RiSoundModuleFill /> }
          isSelected={ isSelected === "sliders" }
          onClick={ () => {
            if (isSelected === "sliders") {
              setIsSelected(undefined);
            } else {
              setIsSelected("sliders");
            }
          } } />
        
        <NeumorphicButton
          icon={ <PiHeadphonesFill /> }
          isSelected={ isSelected === "headphones" }
          onClick={ () => {
            if (isSelected === "headphones") {
              setIsSelected(undefined);
            } else {
              setIsSelected("headphones");
            }
          }} />
        
        <NeumorphicButton
          icon={ <SiLightning /> }
          isSelected={ isSelected === "lightning" }
          onClick={ () => {
            if (isSelected === "lightning") {
              setIsSelected(undefined);
            } else {
              setIsSelected("lightning");
            }
          } } />
      
      </div>

      <div 
        className={ css.app_credits }>
        <a href="https://github.com/unnecessary-special-projects/neumorphic-button" target="_blank" rel="noopener noreferrer">
          { "Neumorphic Button" }
        </a>
        <p>
          Designed by{" "}
          <a href="https://x.com/speytdesign" target="_blank" rel="noopener noreferrer">
            Oleg Kulik
          </a>
        </p>
        <p>
          Developed by{" "}
          <a href="https://x.com/uandsp" target="_blank" rel="noopener noreferrer">
            Unnecessary & Special Projects
          </a>{" "}
        </p>
        <p>
          Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=104585" target="_blank" rel="noopener noreferrer">freesound_community</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=104585" target="_blank" rel="noopener noreferrer">Pixabay</a>
        </p>
      </div>

    </div>
  );
}

