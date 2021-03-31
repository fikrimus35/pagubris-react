import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import TextField from "./form/TextField";

const Footer = () => {
  return (
    <Container direction="col" additional="bg-purple text-white" id="kontak">
      <h2 className="text-4xl font-bold">pagubris</h2>
      <div className="flex flex-row flex-wrap">
        <div className="w-full md:w-6/12 my-4">
          <TextField
            placeholder="Lihat bagaimana cara..."
            rounded="md"
            type="text"
            width="full md:w-10/12"
          />
          <dl className="flex flex-row space-x-8">
            <dd className="border-2 border-white rounded-full h-8 w-8 flex justify-center items-center">
              <Link to="">
                <i className="fa fa-instagram"></i>
              </Link>
            </dd>
            <dd className="border-2 border-white rounded-full h-8 w-8 flex justify-center items-center">
              <Link to="">
                <i className="fa fa-facebook"></i>
              </Link>
            </dd>
            <dd className="border-2 border-white rounded-full h-8 w-8 flex justify-center items-center">
              <Link to="">
                <i className="fa fa-twitter"></i>
              </Link>
            </dd>
          </dl>
        </div>
        <div className="w-6/12 md:w-3/12 my-4 text-lg">
          <dl>
            <Link to="/tentang-kami">Tentang Kami</Link>
          </dl>
          <dl>
            <Link to="/linimasa">Linimasa</Link>
          </dl>
          <dl>
            <Link to="/kontak">Kontak</Link>
          </dl>
        </div>
        <div className="w-6/12 md:w-3/12 my-4 text-lg">
          <dl>
            <Link to="/fitur">Fitur</Link>
          </dl>
          <dl>
            <Link to="/sorotan">Sorotan</Link>
          </dl>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
