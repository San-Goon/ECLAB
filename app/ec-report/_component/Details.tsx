import { Response } from "@/model/Response";

import style from "./details.module.css";
import Card from "@/app/ec-report/_component/Card";

export default function Details({ data }: Response) {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>EC Report Details</h1>
      </div>
      <div className={style.detailsContainer}>
        <div className={style.infoContainer}>
          <div className={style.infoTextWrapper}>
            <strong>Title</strong>
            <span>Title</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Student</strong>
            <span>Student</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>School</strong>
            <span>School</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Grade</strong>
            <span>Grade</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Counselor</strong>
            <span>Counselor</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Status</strong>
            <span>Status</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Received Date</strong>
            <span>Received Date</span>
          </div>
          <div className={style.infoTextWrapper}>
            <strong>Delivered Date</strong>
            <span>Delivered Date</span>
          </div>
        </div>
        <strong>Total: 2</strong>
        <div className={style.typeContainer}>
          <div>
            <p>
              <strong>Writing Competition</strong>-
            </p>
            <p>
              <strong>Competition</strong>-
            </p>
          </div>
          <div>
            <p>
              <strong>Pre-Collage</strong>-
            </p>
            <p>
              <strong>Internship</strong>-
            </p>
          </div>
          <div>
            <p>
              <strong>Volunteering</strong>-
            </p>
            <p>
              <strong>Research</strong>-
            </p>
          </div>
        </div>
        <Card />
      </div>
      <div>
        Once sent, the report is final and cannot be retrieved. The counselor is
        solely responsible for any incorrections in the report.
        <div>I agree to the above</div>
        <button>Send to Student</button>
      </div>
    </div>
  );
}
