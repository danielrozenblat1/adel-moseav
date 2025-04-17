import NewBox from "../components /newBox/NewBox"
import styles from "./SecondScreen.module.css"
import butterfly from "../icons/wired-lineal-1178-tiger-butterfly-hover-pinch.json"
import time from "../icons/wired-lineal-45-clock-time-hover-pinch.json"
import money from "../icons/wired-lineal-414-money-bag-dollar-hover-shake.json" 
import Button from "../components /WaButton/Button"
import FormScreen from "../components /form/FormScreen"
import Timeline from "../components /Timeline/Timeline"
const SecondScreen=()=>{

return <>

<div className={styles.title}>אם הגעת לכאן</div>
<div className={styles.description}>סימן שאת מאוהבת בתחום הריסים ורוצה להתחיל לקחת את התשוקה שלך לשלב הבא </div>
<div className={styles.title}>ולהתחיל</div>ֿ

<div className={styles.row}>
<NewBox icon={butterfly} title="לקום כל בוקר בהגשמה עצמית" description="לצאת כל בוקר עם אנרגיות שיא מהמיטה כי את יודעת שאת עושה את מה שאת אוהבת!"/>
<NewBox icon={time} title="לקחת שליטה על הזמן שלך" description="לנהל סוף סוף את הלו״ז שלך בעצמך! בלי לתת דין וחשבון לאף אחד, בלי אף בוס על הראש ובלי ה9-17 שכל כך מעייף אותך"/>
<NewBox icon={money} title="להרוויח סכומים שלא דמיינת" description="בתחום הביוטי את יכולה להגיע תוך זמן יחסית קצר לסכומים שעד לא מזמן נראו לך דמיוניים!"/>
</div>
<div className={styles.description}>בתור אחת שעשתה ועושה את זה אני אומרת לך בפה מלא - זה אפשרי! אבל זה לא עומד להיות פשוט</div>
<div className={styles.title}>זה ידרוש ממך</div>ֿ
<Timeline/>
<div className={styles.title}>כולן התחילו כאן</div>ֿ
<FormScreen />
</>


    
}
export default SecondScreen