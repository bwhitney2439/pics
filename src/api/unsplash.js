import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 9cf6ad0e5c848034403e8accce52dfd41c6b35781f566aa2e2b1ca658a7d58de"
  }
});
