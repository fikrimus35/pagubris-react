import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import TextArea from "../components/form/TextArea";
import PageWithSidebar from "../components/PageWithSidebar";
import Sidebar from "../components/Sidebar";

const PostThread = () => {
  return (
    <PageWithSidebar>
      <h2 className="text-2xl font-bold">
        Hal apa yang ingin kamu tanyakan ?
      </h2>
      <TextArea width="full" height="56" shadow="xl" />
      <Button
        text="Unggah"
        type="submit"
        bgColor="semi-gray"
        color="white"
        additional="ml-auto"
      />
    </PageWithSidebar>
  );
};

export default PostThread;
