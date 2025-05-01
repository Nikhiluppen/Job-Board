import React from "react";
import { useParams } from "react-router-dom";

const SkillPage = () => {
  const { skillName } = useParams();

  return (
    <div className="container">
      <h2>Jobs for {skillName.replace("-", " ")}</h2>
      <p>Displaying jobs that related to skill{skillName.replace("-", " ")}...</p>
    </div>
  );
};

export default SkillPage;
