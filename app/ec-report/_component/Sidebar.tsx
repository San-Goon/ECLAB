"use client";

import Image from "next/image";
import clipboard from "@/public/clipboard.png";

import style from "./sidebar.module.css";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className={style.sidebar}>
      <div
        className={style.inActive}
        onClick={() => router.push("/ec-report/student")}
      >
        <Image src={clipboard} alt={""} />
        EC Report_STU
      </div>
      <div
        className={style.active}
        onClick={() => router.push("/ec-report/counselor")}
      >
        <Image src={clipboard} alt={""} />
        EC Report_CON
      </div>
    </div>
  );
}
