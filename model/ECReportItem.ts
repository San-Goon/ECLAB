export interface ECReportItem {
  id: number;
  ec_db: {
    year: number;
    id: number;
    name: string;
    organization: string;
    ec_type:
      | "Writing Competitions"
      | "Pre-College"
      | "Volunteering"
      | "Competitions"
      | "Internship"
      | "Research";
    recognition_level: string;
    nationality: string;
    url: string;
    participate_way: string[];
    age_limit: number[];
    grade_limit: string[];
  };
  is_added: boolean;
}
