import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import {useNavigate} from "react-router-dom"

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log("In try block");
    console.log(res.data);
    // const navigate = useNavigate();
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("error");
    dispatch(loginFailure());
  }
};