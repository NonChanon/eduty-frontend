import axios from "axios";

const rootUrl = "http://localhost:8081";

export const api = axios.create({
  baseURL: `${rootUrl}/api`,
});
