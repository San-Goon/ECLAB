"use client";

import style from "./cardButton.module.css";
import { useCallback } from "react";

type Props = {
  isAdded: boolean;
};

export default function CardButton({ isAdded }: Props) {
  const handleClickButton = useCallback(() => {
    console.log("clicked");
  }, []);
  return (
    <div
      className={isAdded ? style.inActive : style.active}
      onClick={isAdded ? undefined : handleClickButton}
    >
      {isAdded ? "already added!" : "add to EC List"}
    </div>
  );
}
