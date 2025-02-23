import React from "react";
import { DiJava } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiC, SiJavascript, SiGit } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import "./css/Expertise.css";

const Expertise = () => {
  return (
    <div className="expertise-container">
      <h1 className="title">Expertise</h1>

      <div className="icon-section">
        <h4>Programming Languages</h4>
        <div className="icon-container">
          <div className="icon-box">
            <DiJava className="icon java" />
            <p>Java</p>
          </div>
          <div className="icon-box">
            <SiC className="icon c" />
            <p>C</p>
          </div>
          <div className="icon-box">
            <GrMysql className="icon sql" />
            <p>MySQL</p>
          </div>
        </div>
      </div>

      <div className="icon-section">
        <h4>Web Development Technologies</h4>
        <div className="icon-container">
          <div className="icon-box">
            <SiJavascript className="icon javascript" />
            <p>JavaScript</p>
          </div>
          <div className="icon-box">
            <FaHtml5 className="icon html" />
            <p>HTML</p>
          </div>
          <div className="icon-box">
            <FaCss3Alt className="icon css" />
            <p>CSS</p>
          </div>
          <div className="icon-box">
            <FaReact className="icon react" />
            <p>React</p>
          </div>
        </div>
      </div>

      <div className="icon-section">
        <h4>Tools</h4>
        <div className="icon-container">
          <div className="icon-box">
            <SiGit className="icon git" />
            <p>Git</p>
          </div>
          <div className="icon-box">
            <FaGithub className="icon github" />
            <p>GitHub</p>
          </div>
          <div className="icon-box">
            <VscVscode className="icon vscode" />
            <p>VS Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
