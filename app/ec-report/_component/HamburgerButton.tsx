"use client";

import { useCallback, useState } from "react";

import style from "./hamburgerButton.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = usePathname().split("/")[2];

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className={style.container}>
      <div className={style.hamburger} onClick={handleClick}>
        {isOpen ? "X" : "☰"}
      </div>
      {isOpen ? (
        <div className={style.menu}>
          <div
            className={
              currentPath === "student" ? style.active : style.inactive
            }
            onClick={() => {
              router.push("/ec-report/student");
              handleClick();
            }}
          >
            EC Report_STU
          </div>
          <div
            className={
              currentPath === "counselor" ? style.active : style.inactive
            }
            onClick={() => {
              router.push("/ec-report/counselor");
              handleClick();
            }}
          >
            EC Report_CON
          </div>
        </div>
      ) : undefined}
      {isOpen && <div className={style.overlay} onClick={handleClick} />}
    </div>
  );
}
