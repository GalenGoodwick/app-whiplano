import APIAxios from "../ApiAxios";
import { ILoginVM, ISignupPayload, IOnboardingPayload } from "../modal/IatuhVM";

const login = async (vm: ILoginVM) => {
  try {
    const response = await APIAxios.post("/login", vm);
    return response.data;

  } catch (err) {
    throw err;
  }
};

const signup = async (vm: ISignupPayload) => {
  try {
    const response = await APIAxios.post("/signup", vm, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const onboarding = async (formData: any) => {
  try {
    const response = await APIAxios.post("/user/onboard", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const forgotPassword = async (email: string) => {
  try {
    const response = await APIAxios.get(`/forgot_password?email=${encodeURIComponent(email)}`);
    return response;
  } catch (err) {
    throw err;
  }
};

const resetPassword = async (token: string, password: string)=> {
  try {
    const response = await APIAxios.get(`/reset_password?token=${encodeURIComponent(token)}&password=${encodeURIComponent(password)}`);
    return response;
  } catch (err) {
    throw err;
  }
};

const authService = {
  login,
  signup,
  onboarding,
  forgotPassword,
  resetPassword
};

export default authService;
