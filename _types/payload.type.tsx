export interface ISendOTPRegisterPayload {
  phone_number: string;
  name: string;
  referral_code: string;
  email: string;
  password: string;
}

export interface IVerifyOTPRegisterPayload {
  phone_number: string;
  otp: number;
}

export interface IVerifyReferralCodePayload {
  referral_code: string;
}

export interface IUserRegisterPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  referral_code: string;
}
export interface IUserLoginPayload {
  email: string;
  password: string;
}
