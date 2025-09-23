import React from "react";
import css from "./app.module.css";
import { Route, Routes } from "react-router";
import { NeumorphicButtons } from "./playground/neumorphic-buttons";
import { SkeuomorphicRadio } from "./playground/skeuomorphic-radio";

export const App: React.FC = () => {
  return (
    <div 
      className={ css.app }>
      
      <Routes>
        
        <Route
          path={ "/" }
          element={ <NeumorphicButtons /> } />
        
        <Route 
          path={ "/radio" }
          element={ <SkeuomorphicRadio /> } />

      </Routes>

    </div>
  );
}

