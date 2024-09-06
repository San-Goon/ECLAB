import { ReactNode } from "react";
import Image from "next/image";

import style from "./layout.module.css";
import Sidebar from "@/app/ec-report/_component/Sidebar";
import logo from "@/public/logo.png";

type Props = {
  children: ReactNode;
};

export default function ReportLayout({ children }: Props) {
  return (
    <div>
      <header className={style.header}>
        <div>
          <Image src={logo} alt={""} />
          <span>EDU.CENTER</span>
        </div>
        <div>햄버거버튼</div>
      </header>
      <div className={style.container}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
