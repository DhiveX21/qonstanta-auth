import React from "react";
import { toast } from "react-toastify";

import IconButton from "../Button/IconButton";

interface ConfirmationProps {
  message: string;
  onConfirm: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ message, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    toast.dismiss();
  };

  return (
    <div style={{ fontFamily: "Nunito" }}>
      <div className="flex flex-col gap-4">
        <img src="/images/newLogin.jpg" alt="new login" />
        <span className="font-bold text-q_textgray text-center">{message}</span>
        <IconButton text="Daftar" click={handleConfirm} />
      </div>
    </div>
  );
};

export default Confirmation;
