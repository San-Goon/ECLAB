import { ReactNode } from "react";
import Image from "next/image";

import style from "./layout.module.css";
import Sidebar from "@/app/ec-report/_component/Sidebar";
import logo from "@/public/logo.png";
import HamburgerButton from "@/app/ec-report/_component/HamburgerButton";

type Props = {
  children: ReactNode;
};

export default function ReportLayout({ children }: Props) {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div>
          <Image src={logo} alt={""} />
          <span>EDU.CENTER</span>
        </div>
        <HamburgerButton />
      </header>
      <div className={style.container}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
