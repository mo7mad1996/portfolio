import axios from "axios";

export const useApi = () => {
  const config = useRuntimeConfig();

  const instance = axios.create({
    baseURL: config.public.AXIOS_BASE_URL,
  });

  return instance;
};
