import React from "react";
import marsyalina from "../assets/pictures/marsyalina.svg";
import premium from "../assets/pictures/premium.svg";
import arrow from "../assets/pictures/arrow.svg";
import user from "../assets/pictures/user.svg";
import Button from "./Button";
import CategoryList from "./category/CategoryList";

const Sidebar = () => {
  return (
    <div
      className="fixed w-3/12 overflow-y-scroll top-0 bottom-0 bg-white"
      style={{ paddingTop: "6%" }}
    >
      <div className="bg-light-blue px-4 py-4 rounded-xl">
        <div className="flex flex-row items-center justify-around ">
          <img src={marsyalina} />
          <h3 className="text-xl font-bold">Lisa Sukmawati</h3>
        </div>
        <div className="flex flex-row">
          <div className='w-6/12'>
            <img src={premium} className="w-40 h-auto" />
          </div>
          <div className="flex justify-around text-sm text-center w-6/12 items-center">
            <table className="" cellPadding = '8px'>
              <tbody>
                <tr>
                  <th>Total Bantu</th>
                  <th>Ahli Dalam</th>
                </tr>
                <tr>
                  <td>20 orang</td>
                  <td>Menjahit</td>
                </tr>
                <tr>
                  <th>Mengikuti</th>
                  <th>Diikuti</th>
                </tr>
                <tr>
                  <td>18 orang</td>
                  <td>5 orang</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Kategori</h3>
        <CategoryList />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Orang Ahli</h3>
        <div>
          <Button
            text="Ateng | Tech"
            bgColor="semi-gray"
            rounded="full"
            color="white"
            additional="my-2 w-60 justify-between"
            leftIcon={user}
            rightIcon={arrow}
          />
          <Button
            text="Teds | Pet"
            bgColor="semi-gray"
            rounded="full"
            color="white"
            additional="my-2 w-60 justify-between"
            leftIcon={user}
            rightIcon={arrow}
          />
          <Button
            text="Markus | DIY"
            bgColor="semi-gray"
            rounded="full"
            color="white"
            additional="my-2 w-60 justify-between"
            leftIcon={user}
            rightIcon={arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
