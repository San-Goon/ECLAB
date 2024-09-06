"use client";

import style from "./agreementSection.module.css";
import { useCallback, useState } from "react";

export default function AgreementSection() {
  const [isChecked, setChecked] = useState(false);

  const handleClickCheckbox = useCallback(() => {
    setChecked(!isChecked);
  }, [isChecked]);

  const handleClickButton = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <div className={style.container}>
      Once sent, the report is final and cannot be retrieved. The counselor is
      solely responsible for any incorrections in the report.
      <div className={style.agreementSection}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleClickCheckbox}
        />
        I agree to the above.
      </div>
      <div
        className={`${style.button} ${!isChecked ? style.disabled : ""}`}
        onClick={isChecked ? handleClickButton : undefined}
      >
        Send to Student
      </div>
    </div>
  );
}
