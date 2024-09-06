import { Response } from "@/model/Response";

import style from "./details.module.css";
import Card from "@/app/ec-report/_component/Card";
import AgreementSection from "@/app/ec-report/_component/AgreementSection";

import Summary from "@/app/ec-report/_component/Summary";

type Props = {
  response: Response;
};

export default async function Details({ response }: Props) {
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
          <div className={style.infoTextWrapper}>
            <strong>Student</strong>
            <span>{data.student.name}</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>School</strong>
            <span>{data.student.profile.school.name}</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Grade</strong>
            <span>{data.student.profile.grade}</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Counselor</strong>
            <span>{data.counselor.name}</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Status</strong>
            <span>{data.ec_report_status}</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Received Date</strong>
            <span>{data.send_dt}</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Delivered Date</strong>
            <span>{data.delivered_dt}</span>
          </div>
        </div>
        <Summary items={data.ec_report_items} />
        {data.ec_report_items.map((item, index) => {
          return <Card key={item.id} item={item} index={index} />;
        })}
      </div>
      <AgreementSection />
    </div>
  );
}
