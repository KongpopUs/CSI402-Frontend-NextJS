"use client"

import Image from "next/image";
import TextInput from "./component/TextInput";
import AlertBox from "./component/AlertBox";
import React from "react";

export default function Home() {
  const [showAlert, setShowAlert] = React.useState<boolean>(false)
  const [firstName, setFirstName] = React.useState<string>("")
  const [lastName, setLastName] = React.useState<string>("")

  const handleFirstNameChange = (e:any) => {
    const val = e.target.value
    setFirstName(val)
  }

  const handleLastNameChange = (e:any) => {
    const val = e.target.value
    setLastName(val)
  }

  const handleSendClick = (e:any) => {
    if(firstName === "" || lastName === "") {
      setShowAlert(true)
    }else {
      setShowAlert(false)
    }
  }

  const hideAlert = () => {
    setShowAlert(false)
  }

  React.useEffect(() => {
  }, [firstName,lastName])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TextInput 
      labelText="ชื่อ" 
      inputId="txtFirstName"
      defaultValue="ก้องภพ"
      onChange={handleFirstNameChange}
      />

      <TextInput 
      labelText={"นามสกุล"} 
      inputId={"txtLastName"}
      onChange={handleLastNameChange}
      />

      <button id="btnSend" onClick={handleSendClick}>{"ล็อกอิน"}</button>
      <AlertBox alertText={"ไม่มีสิทธิ์เข้าถึงการใช้งาน กรุณาสมัครเข้าใช้งานก่อน"} 
              alertButtonText={"ยืนยัน"}
              isShow={showAlert}
              onClick={hideAlert}
      />

    </div>
  );
}
