// import { useSession, signIn, signOut } from "next-auth/react";
"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "@/components/Button/SubmitButton";
import IconButton from "@/components/Button/IconButton";
import { userCheck } from "@/endpoints/Users";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";
import useControlZustand from "@/zustand/useControlZustand";
import {
  ISendOTPRegisterPayload,
  IVerifyOTPRegisterPayload,
} from "@/_types/payload.type";
import Image from "next/image";
import Confirmation from "@/components/ToastConfirmation";

interface IFormRegister {
  fullname: string;
  email: string;
  phoneNumber: string;
  password: string;
  rePassword: string;
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
  referral: string;
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { sendOTPRegister, verifyOTPRegister, userRegister } = useAuth();
  const { isPostLoading, setIsPostLoading } = useControlZustand();
  const [activeEmail, setActiveEmail] = useState<string | null>(null);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [isSendOTP, setIsSendOTP] = useState(false);
  const router = useRouter();
  // const { data: session }: any = useSession();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    watch,
  } = useForm<IFormRegister>();
  // if (session?.accessToken && new Date(session?.expires) > new Date()) {
  //   router.push("/dashboard");
  // }
  // if (router.query.ref) {
  //   setValue("referral", String(router.query.ref));
  // }

  const handleUserCheck: SubmitHandler<IFormRegister> = async (data) => {
    let body = {
      email: data.email,
    };

    try {
      await userCheck(body).then((res) => {
        if (res.data.data.message === "User is exist") {
          setIsEmailExist(true);
          toast.success("Email di temukan");
          setActiveEmail(data.email);
        } else if (res.data.data.message === "User is not found") {
          toast.success(
            <Confirmation
              message="Email baru nih?, Pastikan kamu menginput email dengan benar. jika sudah benar apakah kamu ingin daftar baru?"
              onConfirm={() => {
                setIsEmailExist(false);
                setActiveEmail(data.email);
              }}
            />,
            {
              autoClose: false,
            }
          );
          // toast.success("Email baru nih :P, Daftar yuk!");
        } else {
          toast.error("Terdapat kesalahan pada permintaan.");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginSubmit: SubmitHandler<IFormRegister> = (data) => {
    // dispatch(addPostGlobalLoading);
    setIsPostLoading({
      active: true,
    });
    // signIn("credentials", {
    //   email: activeEmail,
    //   password: data.password,
    //   redirect: false,
    // })
    //   .then((response) => {
    //     if (response?.ok) {
    //       router.push("/dashboard");
    //       setIsPostLoading({
    //         active: false,
    //       });
    //     } else if (response?.status === 401) {
    //       alert("Wrong Password");
    //       setIsPostLoading({
    //         active: false,
    //       });
    //     } else {
    //       alert("Something wrong with server");
    //       setIsPostLoading({
    //         active: false,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     alert("Login Failed");
    //     setIsPostLoading({
    //       active: false,
    //     });
    //   });
  };

  const handleRegister = async (data: IFormRegister) => {
    let bodySendOTP: ISendOTPRegisterPayload = {
      phone_number: "+62" + data.phoneNumber,
      name: data.fullname,
      referral_code: data.referral,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await sendOTPRegister(bodySendOTP);
      if (res) {
        setIsSendOTP(true);
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  const handleSubmitOTP = async (data: IFormRegister) => {
    try {
      const body: IVerifyOTPRegisterPayload = {
        phone_number: "+62" + data.phoneNumber,
        otp: parseInt(data.otp1 + data.otp2 + data.otp3 + data.otp4),
      };
      const res = await verifyOTPRegister(body);

      if (res && activeEmail) {
        const registerBody = {
          name: data.fullname,
          email: activeEmail,
          phone_number: "+62" + data.phoneNumber,
          password: data.password,
          referral_code: data.referral,
        };
        const userRes = await userRegister(registerBody);

        if (userRes) {
          toast.success("Cihuyy, pendaftaran berhasil.");
          handleLoginSubmit(data);
        } else {
          toast.error("Haduh Error euyy :(, Coba lagi plisss");
        }
      }
    } catch (error) {
      toast.error(String(error));
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      handleChange(event);
    }
  };

  function handleChange(e: any) {
    type FieldName = "otp1" | "otp2" | "otp3" | "otp4";

    let id = +e.target.id.replace("otp", "");
    if (document) {
      if (e.target.value) {
        if (id !== 4) {
          e.preventDefault();
          const otpFieldName: FieldName = `otp${id + 1}` as FieldName;
          setValue(otpFieldName, "");
          document?.getElementById(`otp${id + 1}`)?.focus();
        }
      } else {
        if (id !== 1) {
          e.preventDefault();
          const otpFieldName: FieldName = `otp${id - 1}` as FieldName;
          setValue(otpFieldName, "");
          document?.getElementById(`otp${id - 1}`)?.focus();
        }
      }
      // document?.getElementById("otp2").value = "";
    }
  }

  return (
    <>
      <main>
        {!isSendOTP ? (
          <div className="login__wrapper h-screen w-full px-6 md:px-44 lg:flex lg:px-0 lg:overflow-hidden">
            <div className="login__form h-full w-full lg:w-1/2 lg:px-32">
              <div className="login__form__wrapper flex flex-col justify-center items-center h-full w-full ">
                {/* {router?.query?.note && (
                  <div className="w-full text-center mb-20 font-black text-xs md:text-sm lg:text-md text-q_textgray bg-q_lemon bg-opacity-70 p-5 rounded-xl shadow-lg flex gap-2 items-center justify-center">
                    <Image
                      className="w-[25px] drop-shadow-[0_0_10px_#ffffff]"
                      src="/icon/warning.svg"
                      alt="warning"
                      width={25}
                      height={25}
                    />
                    <p className="drop-shadow-[0_0_2px_#cdcdcd]">
                      {router?.query?.note}
                    </p>
                  </div>
                )} */}
                <picture className="w-1/2 mb-10">
                  <img src="/images/qonstanta-logo.png" alt="Menu" />
                </picture>
                {!activeEmail && (
                  <>
                    <div className="login__form__title font-bold text-3xl leading-tight animation-popup">
                      <h1>Welcome Back</h1>
                    </div>
                    <div className="login__form__subtitle font-bold text-base text-q_textgray animation-popup-1">
                      <span>And Good Luck</span>
                    </div>

                    <form
                      onSubmit={handleSubmit(handleUserCheck)}
                      className="w-full mb-3"
                    >
                      <div className="login__form__item w-full  mb-3">
                        <div className="login__form__item__label font-semibold text-sm animation-popup-2">
                          <label htmlFor="email">Email</label>
                        </div>
                        <div className="login__form__item__input animation-popup-3">
                          <input
                            autoComplete="off"
                            id="email"
                            type="email"
                            className="w-full px-4 py-3 shadow-md shadow-gray-100 bg-white border-2 border-q_litegray border-opacity-70 rounded-md focus-visible:outline-none text-sm"
                            placeholder="johndoe@mail.com"
                            {...register("email", {
                              required: true,
                              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            })}
                          />
                          {errors.email?.type === "pattern" && (
                            <span className="text-sm text-q_red font-bold mt-[-10px] text-center">
                              Hmm, i think this is not a valid email format :(
                            </span>
                          )}
                          {errors.email?.type === "required" && (
                            <span className="text-sm text-q_red font-bold mt-[-10px] text-center">
                              Hey hey are you forget fill the Email?.
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="login__form__button w-full flex justify-center mb-3">
                        <div className="w-1/2">
                          <SubmitButton />
                        </div>
                      </div>
                    </form>
                  </>
                )}
                {activeEmail && !isEmailExist && (
                  <>
                    <div className="login__form__item__active-email flex justify-center text-q_blue font-bold text-xl animation-popup">
                      <h4 className=" drop-shadow-[0px_0px_5px_#74c5fb] px-4 rounded-xl mb-4 ring-1 ring-q_textgray ring-opacity-25 p-2">
                        {activeEmail}
                      </h4>
                    </div>
                    <hr className="mb-4" />

                    <form
                      onSubmit={handleSubmit(handleRegister)}
                      className="w-full mb-3"
                    >
                      <div className="login__form__item w-full mb-4">
                        <div className="login__form__item__label font-semibold text-sm animation-popup-2">
                          <label htmlFor="fullname">
                            Nama Lengkap<span className="text-q_red">*</span>
                          </label>
                        </div>
                        <div className="login__form__item__input animation-popup-3 relative">
                          <input
                            autoComplete="off"
                            id="fullname"
                            type="text"
                            className="w-full px-4 py-3 shadow-md shadow-gray-100 bg-white border-2 border-q_litegray border-opacity-70 rounded-md focus-visible:outline-none text-sm"
                            placeholder="Nama Lengkap"
                            {...register("fullname", {
                              required: true,
                            })}
                          />

                          {errors.fullname?.type === "required" && (
                            <span className="text-xs text-q_red font-bold  mt-[-10px] text-center ">
                              Tanpa nama? seriusan? :&apos;)
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="login__form__item w-full mb-4">
                        <div className="login__form__item__label font-semibold text-sm animation-popup-2">
                          <label htmlFor="password">
                            Nomor Handphone<span className="text-q_red">*</span>
                          </label>
                        </div>
                        <div className="login__form__item__input animation-popup-3 relative">
                          <input
                            autoComplete="off"
                            id="phoneNumber"
                            type="number"
                            className="w-full px-4 pl-10 py-3 shadow-md shadow-gray-100 bg-white border-2 border-q_litegray border-opacity-70 rounded-md focus-visible:outline-none text-sm"
                            placeholder="Nomor Handphone"
                            {...register("phoneNumber", {
                              required: true,
                              maxLength: 20,
                              pattern: /^8[1-9][0-9]{6,11}$/,
                            })}
                          />
                          <span className="absolute left-3 top-[14px] font-bold text-q_pink text-sm">
                            +62
                          </span>
                          {errors.phoneNumber?.type === "required" && (
                            <span className="text-xs text-q_red font-bold  mt-[-10px] text-center ">
                              Nomor HP Wajib Di isi.
                            </span>
                          )}
                          {errors.phoneNumber?.type === "maxLength" && (
                            <span className="text-xs text-q_red font-bold  mt-[-10px] text-center">
                              Maximal Nomor 20 Digit
                            </span>
                          )}
                          {errors.phoneNumber?.type === "pattern" && (
                            <span className="text-xs text-q_red font-bold  mt-[-10px] text-center">
                              Mohon Masukan Nomor HP dengan format contoh [+62]
                              8123456789
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="login__form__item w-full mb-4">
                        <div className="login__form__item__label font-semibold text-sm animation-popup-2">
                          <label htmlFor="password">
                            Password<span className="text-q_red">*</span>
                          </label>
                        </div>
                        <div className="login__form__item__input animation-popup-3">
                          <input
                            autoComplete="off"
                            id="password"
                            type="password"
                            className="w-full px-4 py-3 shadow-md shadow-gray-100 bg-white border-2 border-q_litegray border-opacity-70 rounded-md focus-visible:outline-none text-sm"
                            placeholder="Password"
                            {...register("password", {
                              required: true,
                              minLength: 8,
                            })}
                          />
                          {errors.password?.type === "required" && (
                            <span className="text-sm text-q_red font-bold mt-[-10px] text-center">
                              empty password? really ? -_-?
                            </span>
                          )}
                          {errors.password?.type === "minLength" && (
                            <span className="text-sm text-q_red font-bold mt-[-10px] text-center">
                              Password minimal terdiri dari 8 karakter
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="login__form__item w-full mb-4">
                        <div className="login__form__item__label font-semibold text-sm animation-popup-2">
                          <label htmlFor="password">
                            Ulangi Password<span className="text-q_red">*</span>
                          </label>
                        </div>
                        <div className="login__form__item__input animation-popup-3">
                          <input
                            autoComplete="off"
                            id="rePassword"
                            type="password"
                            className="w-full px-4 py-3 shadow-md shadow-gray-100 bg-white border-2 border-q_litegray border-opacity-70 rounded-md focus-visible:outline-none text-sm"
                            placeholder="Ulangi Password"
                            {...register("rePassword", {
                              required: true,
                              minLength: 8,
                            })}
                          />
                          {watch("password") !== watch("rePassword") && (
                            <span className="text-sm text-q_red font-bold mt-[-10px] text-center">
                              Password nya belum sama :)
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="login__form__item w-full mb-4 ">
                        <div className="login__form__item__label font-semibold text-sm animation-popup-2">
                          <label htmlFor="password">
                            Kode Referral{" "}
                            <span className="text-xs text-q_blue">
                              (Opsional)
                            </span>
                          </label>
                        </div>
                        <div className="flex gap-2">
                          <div className="login__form__wrapper w-full">
                            <div className="login__form__item__input animation-popup-3 relative">
                              <input
                                autoComplete="off"
                                id="referral"
                                type="text"
                                className="w-full px-4 py-3 shadow-md shadow-gray-100 bg-white border-2 border-q_litegray border-opacity-70 rounded-md focus-visible:outline-none text-sm"
                                placeholder="Kode Referral"
                                {...register("referral", {
                                  maxLength: 25,
                                  minLength: 3,
                                })}
                                // readOnly={router.query.ref ? true : false}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="login__form__button w-full flex justify-center mb-3">
                        <div className="w-1/5">
                          <IconButton
                            type={"button"}
                            textClass="flex items-center gap-2 text-q_textgray font-bold justify-center text-xs md:text-sm"
                            text="Back"
                            buttonClass="w-full py-3 px-3  rounded-md text-sm  flex justify-center animation-popup"
                            icon="/images/return.png"
                            click={() => {
                              setActiveEmail(null);
                              setIsEmailExist(false);
                            }}
                          />
                        </div>
                        <div className="w-1/2">
                          <SubmitButton />
                        </div>
                      </div>
                    </form>
                  </>
                )}
                {activeEmail && isEmailExist && (
                  <form
                    onSubmit={handleSubmit(handleLoginSubmit)}
                    className="w-full mb-3 "
                  >
                    <div className="login__form__item__active-email flex justify-center text-q_blue font-bold text-xl animation-popup">
                      <h4 className=" drop-shadow-[0px_0px_5px_#57B7DD] px-4 rounded-full mb-4">
                        {activeEmail}
                      </h4>
                    </div>
                    <hr className="mb-4" />
                    <div className="login__form__item w-full mb-4">
                      <div className="login__form__item__label font-semibold text-sm animation-popup-2">
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="login__form__item__input animation-popup-3  relative">
                        <input
                          autoComplete="off"
                          id="password"
                          type={showPassword ? "text" : "password"}
                          className="w-full px-4 py-3 shadow-md shadow-gray-100 bg-white border-2 border-q_litegray border-opacity-70 rounded-md focus-visible:outline-none text-sm"
                          placeholder="Password"
                          {...register("password", {
                            required: true,
                          })}
                        />
                        {showPassword ? (
                          <span
                            className="absolute top-[12px] right-[10px] cursor-pointer opacity-80"
                            onClick={() => setShowPassword(false)}
                          >
                            <img
                              width={20}
                              src="/icon/seen.png"
                              alt="Show Password"
                            />
                          </span>
                        ) : (
                          <span
                            className="absolute top-[12px] right-[10px] cursor-pointer opacity-80"
                            onClick={() => setShowPassword(true)}
                          >
                            <img
                              width={20}
                              src="/icon/close-eye.png"
                              alt="Show Password"
                            />
                          </span>
                        )}
                        {errors.password?.type === "required" && (
                          <span className="text-sm text-q_red font-bold mt-[-10px] text-center">
                            empty password? really ? -_-?
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="login__form__button w-full flex justify-center mb-3 gap-4">
                      <div className="w-1/5">
                        <IconButton
                          type="button"
                          textClass="flex items-center gap-2 text-q_textgray font-bold justify-center text-xs md:text-sm"
                          text="Back"
                          buttonClass="w-full py-3 px-3  rounded-md text-sm  flex justify-center animation-popup"
                          icon="/images/return.png"
                          click={() => {
                            setActiveEmail(null);
                            setIsEmailExist(false);
                          }}
                        />
                      </div>
                      <div className="w-1/2 ">
                        <SubmitButton />
                      </div>
                    </div>
                  </form>
                )}

                {/* <div className="login__form__link flex gap-1 text-sm text-q_textgray">
                <p>Lupa Password?</p>
                <Link href="/forgot-password">
                  <span className="text-q_lightBlue font-bold underline">
                    Klik disini
                  </span>
                </Link>
              </div> */}
              </div>
            </div>
            <div className="login__thumbnail hidden h-full lg:block lg:w-1/2 bg-q_blue">
              <div
                className="login__thumbnail__wrapper w-full h-full bg-cover bg-bottom"
                style={{ backgroundImage: `url("/images/Login-B.png")` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="w-full bg-q_blue px-[20px]">
            <div className="flex flex-col gap-[20px] justify-center min-h-screen">
              <div className="w-full flex justify-center">
                <picture>
                  <img
                    className="h-[100px]"
                    src="/images/reset.png"
                    alt="PIN"
                  />
                </picture>
              </div>
              <div className="text-center text-xl text-white font-bold">
                <h3>Konfirmasi OTP kamu</h3>
              </div>
              <div className="text-center text-sm px-[40px]  text-white">
                <p>Kami telah mengirim OTP melalui Whatsapp anda.</p>
              </div>
              <form
                className="flex-col items-center justify-center flex gap-[20px]"
                onSubmit={handleSubmit(handleSubmitOTP)}
              >
                <div className="flex gap-[10px] ">
                  <input
                    className=" w-[40px] text-center text-xl p-[0px] py-2 rounded"
                    maxLength={1}
                    id="otp1"
                    type="password"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    {...register("otp1", { required: true })}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                  />
                  <input
                    className=" w-[40px] text-center text-xl p-[0px] py-2 rounded "
                    maxLength={1}
                    id="otp2"
                    type="password"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    {...register("otp2", { required: true })}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                  />
                  <input
                    className=" w-[40px] text-center text-xl p-[0px] py-2 rounded"
                    maxLength={1}
                    id="otp3"
                    type="password"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    {...register("otp3", { required: true })}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                  />
                  <input
                    className=" w-[40px] text-center text-xl p-[0px] py-2 rounded"
                    maxLength={1}
                    id="otp4"
                    type="password"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    {...register("otp4", { required: true })}
                    onChange={(e) => handleChange(e)}
                    onKeyDown={handleKeyDown}
                  />

                  {/* {errors.username?.type === "required" && "First name is required"} */}
                </div>
                <div className=" w-full flex flex-col items-center justify-center gap-4 mt-[20px]">
                  <SubmitButton
                    buttonClass="text-q_blue shadow-md text-sm font-bold bg-white rounded-md w-[200px] p-2"
                    text="Kirim"
                  ></SubmitButton>
                  <div onClick={() => handleRegister(getValues())}>
                    <SubmitButton
                      buttonClass="text-white"
                      text="Kirim ulang OTP"
                      textClass="text-white underline text-sm"
                      type="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
