import { useSelector } from "react-redux";
import axios from "axios";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: `https://14192.fullstack.clarusway.com`,
    headers: { Authorization: `Token ${token}` },
  });

  const axiosPublic = axios.create({
    baseURL: `https://14192.fullstack.clarusway.com`,
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
