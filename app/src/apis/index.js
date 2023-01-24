//Imports the axios library into the current file
import axios from "axios";

//Create a new instance of axios with a specific base URL 
export default axios.create({
    baseURL: process.env.BACKEND_ENDPOINT || "https://legacy-to-do-list-c00q8s2fu-camilaforer.vercel.app/"
});