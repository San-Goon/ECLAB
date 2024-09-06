import style from "./card.module.css";

export default function Card() {
  return (
    <div className={style.container}>
      <div className={style.upperSection}>
        <div className={style.title}>
          <div className={style.index}>1</div>
          <span>Online 어쩌구</span>
          <div>Icon</div>
        </div>
        <div className={style.details}>
          <div>Young Arts</div>
          <div className={style.badge}>2024</div>
        </div>
      </div>
      <div className={style.lowerSection}>
        <div>
          <div>Icon</div>
          <span>
            <strong>Type: </strong>
            hi
            <strong>ㆍParticipation: </strong>
            hi
            <strong>ㆍRecognition: </strong>
            ho
          </span>
        </div>
        <div>
          <div>Icon</div>
          <span>
            <strong>Nationality: </strong>
            hi
            <strong>ㆍGrade: </strong>
            hi
            <strong>ㆍAge: </strong>
            ho
          </span>
        </div>
      </div>
    </div>
  );
}
