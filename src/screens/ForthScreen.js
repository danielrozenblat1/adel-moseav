import styles from "./ForthScreen.module.css"
import adel from "../images/אדל מושייב המלצות.png"
import YoutubeCarousel from "../components /youtubeCarousel/Shorts"
const ForthScreen=()=> {
    const videosIds = [
        "0b-F9yq4WRE",
        "j3FMuIBpjUE",
        "FoupD-6CnlY",
        "0leo1GmXM6w"
      ];

return <>
<div className={styles.title}>והגיבו ככה:</div>
<div className={styles.center}><img className={styles.image} src={adel} alt="אדל מושייב"/></div>
<YoutubeCarousel videoIds={videosIds}/>
<div className={styles.title}>השאירי פרטים כאן למטה כדי לקבל ממני שיחה</div>
</>

}
export default ForthScreen