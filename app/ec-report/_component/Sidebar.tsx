"use client";

import Image from "next/image";
import clipboard from "@/public/clipboard.png";

import style from "./sidebar.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const currentPath = usePathname().split("/")[2];
  return (
    <div className={style.sidebar}>
      <div
        className={currentPath === "student" ? style.active : style.inactive}
        onClick={() => router.push("/ec-report/student")}
      >
        <Image src={clipboard} alt={""} />
        EC Report_STU
      </div>
      <div
        className={currentPath === "counselor" ? style.active : style.inactive}
        onClick={() => router.push("/ec-report/counselor")}
      >
        <Image src={clipboard} alt={""} />
        EC Report_CON
      </div>
    </div>
  );
}
