import api from "../services/api";
import { useMutation } from "react-query";
import { login } from "../services/auth";


const onSignup = async (e) => {
  console.log(e);
  const response = await api.post("/user/sign-up", e);

  return response.data;
};

const useSignup = () =>
  useMutation(onSignup, {
    onSuccess: (data) => {
      login(data);
    },
    onError: (error) => {
      console.error(error);
      console.error(error.response.data);
    },
  });

export default useSignup;
