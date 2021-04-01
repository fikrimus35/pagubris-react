import React from "react";
import jawabIcon from "../../assets/pictures/jawab.svg";
import lihatIcon from "../../assets/pictures/lihat.svg";
import Button from "../Button";

const Feed = ({ image }) => {
  return (
    <div className="flex flex-row my-6 bg-white shadow-xl rounded-md py-6 px-4">
      <div className="w-3/12 flex flex-col justify-center items-center text-xl">
        <img src={image} className="w-20 h-20 rounded-full" />
        <strong>Marsyalina</strong>
      </div>
      <div className="w-9/12 flex flex-col justify-between">
        <div>
          Ada yang tau gasi bagaimana cara membuat mockup untuk presentasi
          aplikasi web asdasdaa asdas?
        </div>
        <div className="flex flex-row">
          <div className='w-1/2'>
            <Button text="Jawab" leftIcon={jawabIcon} px={0} py={0} />
          </div>
          <div className='w-1/2'>
            <Button text="Lihat" leftIcon={lihatIcon} px={0} py={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
