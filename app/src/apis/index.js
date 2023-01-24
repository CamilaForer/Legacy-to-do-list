import axios from "axios";

export default axios.create({
    baseURL: process.env.BACKEND_ENDPOINT || "http://localhost:3030"
});