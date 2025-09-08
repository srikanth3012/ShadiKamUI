"use client";
import { addUser } from "@/store/Slicers/userRoleSlicer";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleRole = (e) => {
    console.log(e.target.value);
    const user = e.target.value;

    if (user) {
      dispatch(addUser(user));
      router.push("/");
    }
  };
  return (
    <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center   ">
      <div className="flex flex-col gap-6 items-center justify-center py-8 px-4 border-4 border-rose-400 rounded-md">
        <label className="text-rose-500 font-semibold text-xl">
          Select Role
        </label>

        <div className="flex flex-col gap-4" onClick={handleRole}>
          {" "}
          <option
            className="bg-rose-400 cursor-pointer w-[20rem] text-center text-lg font-semibold text-white rounded-sm py-2"
            value="user"
          >
            User
          </option>
          <option
            className="bg-rose-400 cursor-pointer w-[20rem] text-center text-lg font-semibold text-white rounded-sm py-2"
            value="vendor"
          >
            Vendor
          </option>
          <option
            className="bg-rose-400 cursor-pointer w-[20rem] text-lg font-semibold text-white text-center rounded-sm py-2"
            value="organizer"
          >
            Organizer
          </option>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
