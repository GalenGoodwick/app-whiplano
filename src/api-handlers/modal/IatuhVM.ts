export interface ILoginVM {
  email: string;
  password: string;
}

export interface ISignupPayload {
  email: string;
  password: string;
}

export interface IOnboardingPayload {
  first_name: string;
  last_name: string;
  username: string;
  bio: string | null;
  twitter: string | null;
  telegram: string | null;
  profile_pic: File | null;
}