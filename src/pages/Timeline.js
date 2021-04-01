import React from "react";
import Container from "../components/Container";
import PageWithSidebar from "../components/PageWithSidebar";
import Sidebar from "../components/Sidebar";
import FeedPanel from "../components/timeline/FeedPanel";

const Timeline = () => {
  return (
    <>
      <PageWithSidebar>
        <FeedPanel />
      </PageWithSidebar>
    </>
  );
};

export default Timeline;
