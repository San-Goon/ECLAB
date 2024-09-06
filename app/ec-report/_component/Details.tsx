import { Response } from "@/model/Response";

import style from "./details.module.css";
import Card from "@/app/ec-report/_component/Card";
import AgreementSection from "@/app/ec-report/_component/AgreementSection";

import Summary from "@/app/ec-report/_component/Summary";
import dayjs from "dayjs";

type Props = {
  response: Response;
  type: "student" | "counselor";
};

export default async function Details({ response, type }: Props) {
  const { data } = response;
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>EC Report Details</h1>
      </div>
      <div className={style.detailsContainer}>
        <div className={style.infoContainer}>
          <div className={style.infoTextWrapper}>
            <strong>Title</strong>
            <span>{data.title}</span>
          </div>
          {type === "counselor" ? (
            <>
              <div className={style.infoTextWrapper}>
                <strong>Student</strong>
                <span>
                  {data.student.name}({data.student.email})
                </span>
              </div>
              <div className={style.infoTextWrapper}>
                <strong>School</strong>
                <span>{data.student.profile.school.name}</span>
              </div>
              <div className={style.infoTextWrapper}>
                <strong>Grade</strong>
                <span>{data.student.profile.grade}</span>
              </div>
            </>
          ) : null}
          <div className={style.infoTextWrapper}>
            <strong>Counselor</strong>
            <span>{data.counselor.name}</span>
          </div>
          {type === "counselor" ? (
            <div className={style.infoTextWrapper}>
              <strong>Status</strong>
              <span>{data.ec_report_status}</span>
            </div>
          ) : null}
          <div className={style.infoTextWrapper}>
            <strong>Received Date</strong>
            <span>{dayjs(data.send_dt).format("MMM DD, YYYY")}</span>
          </div>
          {type === "counselor" ? (
            <div className={style.infoTextWrapper}>
              <strong>Delivered Date</strong>
              <span>{dayjs(data.delivered_dt).format("MMM DD, YYYY")}</span>
            </div>
          ) : null}
        </div>
        <Summary items={data.ec_report_items} />
        {data.ec_report_items.map((item, index) => {
          return <Card key={item.id} item={item} index={index} type={type} />;
        })}
      </div>
      {type === "counselor" ? <AgreementSection /> : undefined}
    </div>
  );
}
