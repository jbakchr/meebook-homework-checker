import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import HomeWorkSummary from "./HomeWorkSummary";

import homeworkdata from "../../data/homework.json";

const HomeworkList = () => {
  const [homeWork, setHomeWork] = useState([]);

  useEffect(() => {
    setHomeWork(homeworkdata);
  }, []);

  const renderHomeWorkOverview = () => {
    return homeWork.map((child) => {
      return <HomeWorkSummary key={child.id} child={child} />;
    });
  };

  if (!homeWork) {
    return null;
  }

  return <Container maxWidth="md">{renderHomeWorkOverview()}</Container>;
};

export default HomeworkList;
