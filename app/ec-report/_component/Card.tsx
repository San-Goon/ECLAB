import style from "./card.module.css";
import { ECReportItem } from "@/model/ECReportItem";
import Image from "next/image";
import link from "@/public/link.png";
import filter_alt from "@/public/filter_alt.png";
import library_add_check from "@/public/library_add_check.png";
import Link from "next/link";
import CardButton from "@/app/ec-report/_component/CardButton";

type Props = {
  item: ECReportItem;
  index: number;
  type: "student" | "counselor";
};

export default function Card({ item, index, type }: Props) {
  return (
    <div className={style.container}>
      <div className={style.upperSection}>
        <div>
          <div className={style.title}>
            <div className={style.index}>{index + 1}</div>
            <span>{item.ec_db.name}</span>
            <Link
              className={style.link}
              href={item.ec_db.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={link} alt={""} />
            </Link>
          </div>
          <div className={style.organization}>
            <div>{item.ec_db.organization}</div>
            {type === "counselor" ? (
              <div className={style.badge}>{item.ec_db.year}</div>
            ) : null}
          </div>
        </div>
        {type === "student" ? (
          <div className={style.addButtonContainer}>
            <CardButton isAdded={item.is_added} />
          </div>
        ) : null}
      </div>
      <div className={style.lowerSectionForPC}>
        <div>
          <Image className={style.icon} src={filter_alt} alt={""} />
          <span>
            <strong>Type: </strong>
            {item.ec_db.ec_type}
            <strong>ㆍParticipation: </strong>
            {item.ec_db.participate_way.join(", ")}
            <strong>ㆍRecognition: </strong>
            {item.ec_db.recognition_level}
          </span>
        </div>
        <div>
          <Image className={style.icon} src={library_add_check} alt={""} />
          <span>
            <strong>Nationality: </strong>
            {item.ec_db.nationality}
            <strong>ㆍGrade: </strong>
            {item.ec_db.grade_limit.join(", ")}
            <strong>ㆍAge: </strong>
            {item.ec_db.age_limit.join(", ")}
          </span>
        </div>
      </div>
      <div className={style.lowerSectionForMobile}>
        <div className={style.detailWrapper}>
          <Image className={style.icon} src={filter_alt} alt={""} />
          <strong>Type : </strong>
          {item.ec_db.ec_type}
        </div>
        <div className={style.detailWrapper}>
          <Image className={style.icon} src={filter_alt} alt={""} />
          <strong>Participation : </strong>
          {item.ec_db.participate_way.join(", ")}
        </div>
        <div className={style.detailWrapper}>
          <Image className={style.icon} src={filter_alt} alt={""} />
          <strong>Recognition : </strong>
          {item.ec_db.recognition_level}
        </div>
        <div className={style.detailWrapper}>
          <Image className={style.icon} src={library_add_check} alt={""} />
          <strong>Nationality : </strong>
          {item.ec_db.nationality}
        </div>
        <div className={style.detailWrapper}>
          <Image className={style.icon} src={library_add_check} alt={""} />
          <strong>Grade : </strong>
          {item.ec_db.grade_limit.join(", ")}
        </div>
        <div className={style.detailWrapper}>
          <Image className={style.icon} src={library_add_check} alt={""} />
          <strong>Age : </strong>
          {item.ec_db.age_limit.join(", ")}
        </div>
        <div className={style.buttonsWrapper}>
          {type === "student" ? <CardButton isAdded={item.is_added} /> : null}
          <Link
            className={style.visitButton}
            href={item.ec_db.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </Link>
        </div>
      </div>
    </div>
  );
}
