// axios config related to unsplash events

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pCwFppU6-rRuHZaQ2oBpv7le1USkf_1el13xU-N_qPI",
  },
});
