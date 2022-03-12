import axios from "axios";

const instance = axios.create({});

function test(url, method) {
  const axiosPromise = instance({
    url,
    method,
  });
  return axiosPromise.then((res) => res.data).catch((err) => err);
}
