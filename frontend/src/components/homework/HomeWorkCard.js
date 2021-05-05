import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@material-ui/core";

const HomeWorkCard = ({ assignment }) => {
  console.log(assignment);

  return (
    <Card
      style={{ marginLeft: "20px", marginBottom: "15px", maxWidth: "800px" }}
      raised
    >
      <CardHeader title={assignment.subject} subheader={assignment.date} />
      <Divider />
      <CardContent>
        <Typography variant="body2" component="p">
          {assignment.work}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeWorkCard;
