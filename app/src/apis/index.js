import axios from "axios";

export default axios.create({
    baseURL: process.env.BACKEND_ENDPOINT || "https://legacy-to-do-list-c00q8s2fu-camilaforer.vercel.app/"
});