import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";


const SideMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="side-menu-wrapper">
      {isExpanded && (
        <div className="detailed-menu">
          <h1>Company Logo</h1>
          <div className="project-list">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Project 1</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Team 1</li>
                    <li>Team 2</li>
                    <li>Team 3</li>
                    <li>Team 4</li>
                  </ul>
                  <Button>Add Team +</Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Project 2</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Team 1</li>
                    <li>Team 2</li>
                    <li>Team 3</li>
                    <li>Team 4</li>
                  </ul>
                  <Button>Add Team +</Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <Button>Add Project +</Button>
        </div>
      )}
      <div className="icon-list">
        <div
          className="icon-wrapper selected"
          onClick={() => setIsExpanded((val) => !val)}
        >
        </div>
        <div className="icon-wrapper">
        </div>
        <div className="icon-wrapper">
         
        </div>
        <div className="icon-wrapper">
         </div>
      </div>
    </div>
  );
};

export default SideMenu;
