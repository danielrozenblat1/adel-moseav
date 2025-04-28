import React from 'react';
import styles from './Me.module.css';
import suzana from "../../images/אדל מושייב תמונה מרכזית.png";
import Works from '../recommends/Works';
import Recommendations from '../recommends/Recommends';
import FormScreen from '../form/FormScreen';
import ForthScreen from '../../screens/ForthScreen';


const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">בואי נכיר</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={suzana} alt="אדל מושייב" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>אדל מושייב</h1>
          <div className={styles.subtitle}>"את הבוסית של החיים שלך - פשוט צריך להעז!"</div>
          <p className={styles.description}>
            אז ככה, תמיד הייתי מאוהבת בתחום הביוטי - אני והאחיות שלי היינו מתעסקות בזה המון! ואז, כמו בכל סיפור טוב, הגיע הטוויסט - שברתי את עצם הזנב (כן, כואב רק לחשוב על זה). אבל במקום להתבכיין, החלטתי שזה סימן משמיים להגשים חלום ולהפוך את התשוקה למקצוע. נכנסתי לתחום בכל הכוח ונפלתי על שלושה קורסים כושלים אחד אחרי השני קורסים שלא נתנו לי את המידע שרציתי, בלי יחס אישי ובטח שבלי ליווי אחרי שהקורס נגמר. אבל אני? עקשנית מדי בשביל לוותר!
          </p>
          <p className={styles.description}>
            דווקא האכזבות האלה הפכו להיות ההשראה הכי גדולה שלי. הבנתי בדיוק מה חסר בתעשייה, ומה אני הולכת לעשות אחרת! היום, עם 5 שנות ניסיון מאחוריי, יצרתי שיטת לימוד שהיא בדיוק מה שחיפשתי בעצמי - שילוב מנצח של מקצועיות, עם המון סבלנות (מבחינתי תישארי איתי עד הערב, העיקר שתצאי פרפקט!). ואת יודעת מה הכי חשוב? הליווי שלי לא נגמר כשהקורס נגמר. כי בשבילי, כל תלמידה שמצליחה זו עוד הוכחה שאפשר לבנות קריירה מטורפת בתחום, להיות עצמאית, ולשלוט בלוח הזמנים שלך. השם שלי מונח כאן, וההצלחה של כל תלמידה שלי היא לגמרי גם הצלחה שלי!
          </p>
        </div>
      </div>
      <Works/>
      <Recommendations/>
   <ForthScreen/>
      <FormScreen/>
    </>
  );
};

export default AboutMe;