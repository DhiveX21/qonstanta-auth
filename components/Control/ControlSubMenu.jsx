import React from "react";
import { useSelector } from "react-redux";

export default function ControlSubMenu(props) {
  const { controlSubMenuPopup } = useSelector((state) => state.controlData);
  return (
    <>
      <div className="flex">
        {controlSubMenuPopup?.active ? <div>{chidlren}</div> : null}
      </div>
    </>
  );
}
