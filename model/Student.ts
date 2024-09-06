import { School } from "@/model/School";

export interface Student {
  name: string;
  email: string;
  profile: {
    id: number;
    school_id: number;
    gender: "MALE" | "FEMALE";
    birth_day: string;
    grade: string;
    year_admission: string;
    nationality: string[];
    status_type: "COMPLETED"; // COMPLETED 만 확인됨
    created_at: string;
    updated_at: string;
  };
  school: School;
}
