"use client";

import { useState } from "react";
import { Footer, Header } from "../../components/layers";
import { InputForm } from "../../components/ui";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#F4F4F4]">
      <div className="flex flex-col justify-between bg-white w-120 h-[655px] p-8 rounded-2xl">
        <div className="flex flex-col gap-[28px]">
          <Header></Header>
          <div className="flex flex-col gap-3">
            <InputForm
              label="First name"
              isError={false}
              errorMessage="First name cannot contain special characters or numbers."
            />
            <InputForm
              label="Last name"
              isError={false}
              errorMessage="Last name cannot contain special characters or numbers."
            />
            <InputForm
              label="Username"
              isError={false}
              errorMessage="This username is already taken. Please choose another one."
            />
          </div>
        </div>
        <Footer stepCount={1}></Footer>
      </div>
    </div>
  );
}
