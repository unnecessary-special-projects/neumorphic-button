import React from "react";
import { useWavesurfer } from "@wavesurfer/react";
import css from "./index.module.css";
import { NeumorphicButton } from "../neumorphic-button";
import { PiRecordFill } from "react-icons/pi";

import songA from "./song-a.mp3";
import songB from "./song-b.mp3";
import songC from "./song-c.mp3";

export const Radio: React.FC = () => {

  const [ song, setSong ] = React.useState<"A" | "B" | "C">();
  const [ play, setPlay ] = React.useState<boolean>(false);
  const [ rec, setRec ] = React.useState<boolean>(false);

  const wavesurferConfig = {
    waveColor: "#35393c",
    cursorColor: "#dc6837",
    cursorWidth: 2,
    height: 100
  }

  const displayARef = React.useRef(null);
  const waveA = useWavesurfer({ container: displayARef, url: songA, ...wavesurferConfig });

  const displayBRef = React.useRef(null);
  const waveB = useWavesurfer({ container: displayBRef, url: songB, ...wavesurferConfig });

  const displayCRef = React.useRef(null);
  const waveC = useWavesurfer({ container: displayCRef, url: songC, ...wavesurferConfig });

  return (
    <div 
      className={ css.radio }>

      <div 
        className={ css.radio_button }>
      </div>
      
      <div 
        className={ css.radio_console }>
        
        <div 
          className={ css.radio_console_display }>
          
          <div 
            className={ css.radio_console_display_bar }>
            <p>{ "SAMPLER 64MB" }</p>
            {
              rec && 
                <PiRecordFill
                  color={ "#dc6837" } />
            }
          </div>
          
          <div 
            className={ css.radio_console_display_wave }
            ref={ displayARef }
            style={{ display: song === "A" ? "block" : "none" }}>
          </div>

          <div 
            className={ css.radio_console_display_wave }
            ref={ displayBRef }
            style={{ display: song === "B" ? "block" : "none" }}>
          </div>

          <div 
            className={ css.radio_console_display_wave }
            ref={ displayCRef }
            style={{ display: song === "C" ? "block" : "none" }}>
          </div>

        </div>

        <div 
          className={ css.radio_console_buttons }>
          
          <NeumorphicButton
            label={ "A" }
            isSelected={ song === "A" }
            onClick={ () => {
              if (song === "A") {
                setSong(undefined);
                waveA.wavesurfer?.stop();
                setPlay(false);
              } else {
                setSong("A");
              }
            } } />
          
          <NeumorphicButton
            label={ "B" }
            isSelected={ song === "B" }
            onClick={ () => {
              if (song === "B") {
                setSong(undefined);
                waveB.wavesurfer?.stop();
                setPlay(false);
              } else {
                setSong("B");
              }
            } } />
          
          <NeumorphicButton
            label={ "C" }
            isSelected={ song === "C" }
            onClick={ () => {
              if (song === "C") {
                setSong(undefined);
                waveC.wavesurfer?.stop();
                setPlay(false);
              } else {
                setSong("C");
              }
            } } />
          
          <div 
            className={ css.radio_console_buttons_play }>
            <NeumorphicButton
              label={ "PLAY" }
              isSelected={ play }
              onClick={ () => {
                if (!play && song) {
                  setPlay(true);
                } else {
                  setPlay(false);
                }
                if (song === "A") waveA.wavesurfer?.playPause();
                else if (song === "B") waveB.wavesurfer?.playPause();
                else if (song === "C") waveC.wavesurfer?.playPause();
              }} />
          </div>
          
          <div 
            className={ css.radio_console_buttons_rec }>
            <NeumorphicButton
              label={ "REC" }
              isSelected={ rec }
              onClick={ () => setRec(!rec) } />
          </div>

        </div>

      </div>

      <div 
        className={ css.radio_speakers }>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
        <div className={ css.radio_speakers_hole }></div>
      </div>

    </div>
  );
}