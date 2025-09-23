import React from "react";
import css from "./index.module.css";
import { Radio } from "../../components/radio";

// Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">FASSounds</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">Pixabay</a>

// Music by <a href="https://pixabay.com/users/tatamusic-51344851/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=394850">Mykola Sosin</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=394850">Pixabay</a>

// Music by <a href="https://pixabay.com/users/kaazoom-448850/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=392409">Paul Winter</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=392409">Pixabay</a>

export const SkeuomorphicRadio: React.FC = () => {

  return (
    <div 
      className={ css.skeuomorphicRadio }>
      
      <Radio />

      <div 
        className={ css.skeuomorphicRadio_credits }>
        <a href="https://github.com/unnecessary-special-projects/neumorphic-button" target="_blank" rel="noopener noreferrer">
          { "Skeuomorphic Radio" }
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
      </div>
      
    </div>
  );
}