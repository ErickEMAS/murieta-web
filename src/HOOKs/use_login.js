import api from "../services/api";
import { useMutation } from "react-query";
import { login } from "../services/auth";

const onLogin = async (e) => {
  const response = await api.post("/login", e);

  return response.data;
};

const useLogin = () =>
  useMutation(onLogin, {
    onSuccess: (data) => {
      login(data);
    },
    onError: (error) => {
      console.error(error);
      console.error(error.response.data);
    },
  });

  export default useLogin;
