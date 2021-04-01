import React from "react";
import PageWithSidebar from "../components/PageWithSidebar";
import lulus from "../assets/pictures/lulus.png";
import TextArea from "../components/form/TextArea";
import Button from "../components/Button";

const PostAnswer = () => {
  return (
    <PageWithSidebar>
      <div className="p-8 bg-white rounded-xl">
        <div>
          <h3 className="font-bold text-xl">Upload Video</h3>
          <div>
            <img src={lulus} className="w-full h-auto my-4" />
          </div>
        </div>
        <div className="flex flex-row space-x-12 mt-4">
          <div className="w-8/12">
            <h3 className="font-bold text-xl mb-2">Deskripsi</h3>
            <TextArea
              width="full"
              bgColor="white"
              height="40"
              placeholder="Tuliskan solusi Anda secara lebih terperinci"
            />
          </div>
          <div className="w-4/12">
            <h3 className="font-bold text-xl mb-2">Tools</h3>
            <TextArea
              width="full"
              bgColor="white"
              height="40"
              placeholder="Tuliskan tools yang digunakan. Pisahkan dengan tanda koma"
            />
          </div>
        </div>
        <Button
          text="Unggah"
          type="submit"
          bgColor="semi-gray"
          color="white"
          additional="ml-auto"
        />
      </div>
    </PageWithSidebar>
  );
};

export default PostAnswer;
