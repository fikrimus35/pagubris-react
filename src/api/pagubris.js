import axios from "axios";
import { getToken } from "../actions/userActions";

export default axios.create({
  baseURL: "https://api.pagubris.my.id/v1/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
