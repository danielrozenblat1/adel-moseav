import React from 'react';
import styles from './Sillabus.module.css';
import { CalendarDays, Clock, MapPin, User, Book, Package, Scissors, Eye, Brush, Heart, FileText, Star, Award, Calendar } from 'lucide-react';
import Bonus from '../bonus/Bonus';
import alone from "../../icons/wired-outline-645-people-handshake-transaction-hover-pinch.json"
import female from "../../icons/wired-outline-633-female-standing-hover-success.json"
import prefection from "../../icons/wired-outline-1575-eyelash-hover-pinch.json"
import answers from "../../icons/wired-outline-958-faq-frequent-ask-questions-hover-enlarge.json"
import FormScreen from '../form copy/FormScreen';
import EyelashCalculator from '../calculate/Calculate';
const Sillabus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>קורס הרמת ריסים</h1>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <CalendarDays size={18} />
            </div>
            <div className={styles.infoText}>2 ימי לימוד</div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Clock size={18} />
            </div>
            <div className={styles.infoText}>08:30 - 16:30</div>
          </div>
        </div>

        <div className={styles.daysContainer}>
          <div className={`${styles.dayCard} ${styles.day01}`}>
            <div className={styles.dayHeader}>
              <div className={styles.dayNumber}>01</div>
              <h2 className={styles.dayTitle}>יום ראשון - לימוד עיוני</h2>
            </div>
            
            <div className={styles.itemList}>
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <FileText size={18} />
                </div>
                <div className={styles.itemText}>הצהרת בריאות וחשיבותה</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <User size={18} />
                </div>
                <div className={styles.itemText}>מבנה הפנים והתאמת שתלים ללקוחה</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Heart size={18} />
                </div>
                <div className={styles.itemText}>תיאום ציפיות עם הלקוחה</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Eye size={18} />
                </div>
                <div className={styles.itemText}>הכרת סוגי העיניים</div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Package size={18} />
                </div>
                <div className={styles.itemText}>הכרת סוגי השתלים</div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Scissors size={18} />
                </div>
                <div className={styles.itemText}>סוגי פינצטות ואופן השימוש</div>
              </div>
            </div>
          </div>
          
          <div className={`${styles.dayCard} ${styles.day02}`}>
            <div className={styles.dayHeader}>
              <div className={styles.dayNumber}>02</div>
              <h2 className={styles.dayTitle}>יום שני - לימוד מעשי</h2>
            </div>
            
            <div className={styles.itemList}>
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Book size={18} />
                </div>
                <div className={styles.itemText}>טכניקות שונות להרמת ריסים</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Brush size={18} />
                </div>
                <div className={styles.itemText}>צביעה והדגשת ריסים בטכניקות שונות</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Award size={18} />
                </div>
                <div className={styles.itemText}>תהליך שיקום הריסים</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Award size={18} />
                </div>
                <div className={styles.itemText}>התנסות מעשית על מודלסטיות</div>
              </div>
            </div>
          </div>
          
          
        </div>
        
        {/* Combined Course as a completely separate course */}
        <div className={styles.header}>
          <h1 className={styles.title}>קורס משולב - הרמת ריסים והרמת גבות</h1>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <CalendarDays size={18} />
            </div>
            <div className={styles.infoText}>2 ימי לימוד</div>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Clock size={18} />
            </div>
            <div className={styles.infoText}>08:30 - 16:30</div>
          </div>
        </div>

        <div className={styles.daysContainer}>
          <div className={`${styles.dayCard} ${styles.combinedCourse}`}>
            <div className={styles.courseHeader}>
              <h2 className={styles.courseTitle}>קורס מקיף ומעמיק לשתי הטכניקות</h2>
            </div>
            
            <div className={styles.itemList}>
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Calendar size={18} />
                </div>
                <div className={styles.itemText}>שני ימי קורס מרוכזים - יום עיוני ויום מעשי</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Book size={18} />
                </div>
                <div className={styles.itemText}>לימוד לעומק של שתי הטכניקות בגישה פרקטית וברורה</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Package size={18} />
                </div>
                <div className={styles.itemText}>ערכה מפוארת עם כלים לעבודה אמיתית ומקצועית</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <User size={18} />
                </div>
                <div className={styles.itemText}>עבודה אמיתית על מודליסטיות - לא על דפים!</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Heart size={18} />
                </div>
                <div className={styles.itemText}>הדרכה בגובה העיניים עם תשומת לב אישית</div>
              </div>
              
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Award size={18} />
                </div>
                <div className={styles.itemText}>תמיכה וליווי גם אחרי הקורס</div>
              </div>
            </div>
          </div>
        </div>
        <h3 className={styles.bonusTitle}>בשני הקורסים תקבלי</h3>
        <div className={styles.bonusSection}>
          <h3 className={styles.bonusTitle}>ערכה שמכילה :</h3>
          <div className={styles.itemList}>
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <Package size={18} />
              </div>
              <div className={styles.itemText}>דבק של קודי</div>
            </div>
            
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <Scissors size={18} />
              </div>
              <div className={styles.itemText}>פינצטה להרמת ריסים</div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <Brush size={18} />
              </div>
              <div className={styles.itemText}>חומרים להרמת ריסים שמספיקים ל25 טיפולים</div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <Brush size={18} />
              </div>
              <div className={styles.itemText}>מסרק ומברשת לריסים</div>
            </div>
            
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <Package size={18} />
              </div>
              <div className={styles.itemText}>צבע, חמצן וכלי לערבוב</div>
            </div>
            
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <Package size={18} />
              </div>
              <div className={styles.itemText}>פד קוסמטי, אפליקטורים, צמרוני גפן וכלי עזר</div>
            </div>
            
            <div className={styles.item}>
              <div className={styles.itemIcon}>
                <Package size={18} />
              </div>
              <div className={styles.itemText}>נילון נצמד לריסים וכל הציוד הדרוש להתחלת עבודה</div>
            </div>
          </div>
        </div> 
        <h3 className={styles.bonusTitle}>וכמובן</h3>
      
      </div>
      <div className={styles.row}>
          <Bonus 
            title="יחס אישי" 
            description="תשארי איתי עד הערב אם צריך - העיקר שתצאי ממני כשאת מרגישה שאת יודעת ומבינה הכל!. אצלי לא מוותרים, אפילו אם זה אומר להתעכב ולעבור שוב על הדברים." 
            icon={alone}
          />
          <Bonus 
            title="העצמה ובטחון" 
            description="מעבר ללימוד הטכניקות המקצועיות, אני מעניקה לך את הכלים להצליח כעצמאית בתחום. את תצאי מכאן עם הביטחון לבנות את העסק שלך ואת העתיד שלך כשאת בטוחה בעצמך ובידע שצברת." 
            icon={female}
          />
        </div>
        
        <div className={styles.row}>
          <Bonus 
            title="ליווי גם כשהקורס נגמר" 
            description="גם אחרי הקורס - את לא לבד! מענה מלא לכל שאלה, תמיכה בהתפתחות המקצועית שלך וזמינות לכל חשש והתייעצות." 
            icon={answers}
          />
          <Bonus 
            title="שיטת עבודה ייחודית" 
            description="אני מלמדת שיטה ייחודית שפיתחתי בעצמי המבוססת על ניסיון רב. השיטה מאפשרת לך לעבוד ביעילות, באיכות גבוהה ועם תוצאות מושלמות." 
            icon={prefection}
          />
        </div>

        <EyelashCalculator/>
        <h3 className={styles.bonusTitle}>השאירי פרטים בטופס למטה לשיחת ייעוץ חינמית ממני</h3>
        <FormScreen/>
    </div>
  );
};

export default Sillabus;