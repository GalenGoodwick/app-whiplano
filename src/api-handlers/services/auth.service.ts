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

const authService = {
  login,
  signup,
  onboarding
};

export default authService;
