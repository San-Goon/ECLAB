import Image from "next/image";
import writing_competition from "@/public/writing_competition.png";
import competition from "@/public/competition.png";
import pre_college from "@/public/pre_college.png";
import internship from "@/public/internship.png";
import volunteering from "@/public/volunteering.png";
import research from "@/public/research.png";
import { ECReportItem } from "@/model/ECReportItem";

import style from "./summary.module.css";

type Props = {
  items: ECReportItem[];
};

export default function Summary({ items }: Props) {
  const number = {
    "Writing Competitions": 0,
    Competitions: 0,
    "Pre-College": 0,
    Internship: 0,
    Volunteering: 0,
    Research: 0,
  };

  items.forEach(({ ec_db }) => {
    const type = ec_db.ec_type.split("/")[0];
    // @ts-ignore
    number[type]++;
  });

  return (
    <div>
      <strong>Total: {items.length}</strong>
      <div className={style.typeContainer}>
        <div>
          <div className={style.textWrapper}>
            <div>
              <Image src={writing_competition} alt={""} />
              <strong>Writing Competition</strong>
            </div>
            {number["Writing Competitions"] || "-"}
          </div>
          <div className={style.textWrapper}>
            <div>
              <Image src={competition} alt={""} />
              <strong>Competition</strong>
            </div>
            {number.Competitions || "-"}
          </div>
        </div>
        <div className={style.divider} />
        <div>
          <div className={style.textWrapper}>
            <div>
              <Image src={pre_college} alt={""} />
              <strong>Pre-College</strong>
            </div>
            {number["Pre-College"] || "-"}
          </div>
          <div className={style.textWrapper}>
            <div>
              <Image src={internship} alt={""} />
              <strong>Internship</strong>
            </div>
            {number.Internship || "-"}
          </div>
        </div>
        <div className={style.divider} />
        <div>
          <div className={style.textWrapper}>
            <div>
              <Image src={volunteering} alt={""} />
              <strong>Volunteering</strong>
            </div>
            {number.Volunteering || "-"}
          </div>
          <div className={style.textWrapper}>
            <div>
              <Image src={research} alt={""} />
              <strong>Research</strong>
            </div>
            {number.Research || "-"}
          </div>
        </div>
      </div>
    </div>
  );
}
