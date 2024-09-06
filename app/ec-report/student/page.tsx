import Details from "@/app/ec-report/_component/Details";
import { getInfo } from "@/app/ec-report/_lib/getInfo";

export default async function Student() {
  const response = await getInfo();
  return <Details response={response} type="student" />;
}
