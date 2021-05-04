import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Divider,
  IconButton,
  Typography,
  Tooltip,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import homeworkdata from "../../data/homework.json";

const HomeworkList = () => {
  const [homeWork, setHomeWork] = useState([]);

  useEffect(() => {
    setHomeWork(homeworkdata);
  }, []);

  if (!homeWork) {
    return null;
  }

  return homeWork.map((child) => {
    return (
      <Container key={child.id} maxWidth="md">
        <div style={{ marginBottom: "40px" }}>
          <CssBaseline />
          <h1>{child.child_name}</h1>
          {child.assignments.map((assignment) => {
            return (
              <Card
                key={assignment.id}
                style={{
                  marginLeft: "20px",
                  marginBottom: "10px",
                  maxWidth: "800px",
                }}
              >
                <CardHeader
                  title={assignment.subject}
                  subheader={assignment.date}
                  action={
                    <Tooltip title="Færdiggjort?" placement="left">
                      <IconButton>
                        <CheckCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  }
                />
                <Divider />
                <CardContent>
                  <Typography variant="body2" component="p">
                    {assignment.work}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    );
  });
};

export default HomeworkList;
