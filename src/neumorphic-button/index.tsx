import React from "react";
import { IconContext } from "react-icons";
import css from "./index.module.css";
import cx from "classnames";
import sound from "./sound.mp3";

export const NeumorphicButton: React.FC<INeumorphicButton> = (props) => {
  return (
    <IconContext.Provider
      value={{
        className: css.neumorphicButton_icon
      }}>
      <button
        className={ cx(
          css.neumorphicButton,
          { [css.neumorphicButton_off]: !props.isSelected },
          { [css.neumorphicButton_on]: props.isSelected }
        ) }
        onClick={ () => {
          const buttonClick = new Audio(sound);
          buttonClick.play();
          props.onClick();
        } }>
        
        { props.icon }
        
        <div 
          className={ cx(
            css.neumorphicButton_led
          ) }>
        </div>

      </button>
    </IconContext.Provider>
  );
}

export interface INeumorphicButton {
  icon: React.ReactNode
  isSelected?: boolean
  onClick: () => void
}