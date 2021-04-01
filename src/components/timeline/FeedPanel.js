import React from "react";
import TextField from "../form/TextField";
import Feed from "./Feed";
import marsyalina from "../../assets/pictures/marsyalina.svg"

const FeedPanel = () => {
  return (
    <>
      <div>
        <TextField
          placeholder="Lihat bagaimana cara ..."
          width="full"
          bgColor="light-gray"
          rounded="md"
        />
      </div>
      <div className="blur">
        <Feed image={marsyalina} />
        <Feed image={marsyalina} />
      </div>
    </>
  );
};

export default FeedPanel;
