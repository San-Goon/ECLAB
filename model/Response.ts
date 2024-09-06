import { Student } from "@/model/Student";
import { Counselor } from "@/model/Counselor";
import { ECReportItem } from "@/model/ECReportItem";

export interface Response {
  data: {
    id: number;
    student: Student;
    counselor: Counselor;
    title: string;
    ec_report_status: string;
    send_dt: string;
    delivered_dt: string;
    ec_report_items: ECReportItem[];
  };
}
