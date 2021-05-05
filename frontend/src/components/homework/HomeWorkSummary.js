import { CssBaseline } from "@material-ui/core";
import React from "react";
import HomeWorkCard from "./HomeWorkCard";

const HomeWorkSummary = ({ child }) => {
  const renderHomeWorkCards = () => {
    return child.assignments.map((assignment) => {
      return <HomeWorkCard key={assignment.id} assignment={assignment} />;
    });
  };

  return (
    <div style={{ marginBottom: "40px" }}>
      <CssBaseline />
      <h1>{child.child_name}</h1>
      {renderHomeWorkCards()}
    </div>
  );
};

export default HomeWorkSummary;
