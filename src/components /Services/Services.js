// MyServices.jsx
import React from 'react';
import styles from './Services.module.css';
import { Clock, Target, User, MessageCircle } from 'lucide-react';
import risim from "../../images/אדל מושייב הרמת ריסים.jpg"
import gabot from "../../images/אדל מושייב הרמת גבות.jpg"
import both from "../../images/אדל מושייב ריסים וגבות.jpg"
import shizuf from "../../images/אדל מושייב שיזוף בהתזה.jpg"
const Button = ({ text, message }) => {
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+972505991927?text=${encodedMessage}`, '_blank');
  };

  return (
    <button className={styles.button} onClick={openWhatsApp}>
      <MessageCircle size={16} className={styles.buttonIcon} />
      {text}
    </button>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.serviceCard}>
      <h2 className={styles.serviceTitle}>{service.name}</h2>
      <div className={styles.serviceContent}>
        <div className={styles.serviceInfo}>
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <Target size={20} />
            </div>
            <div>
              <h3 className={styles.infoTitle}>מה הטיפול פותר:</h3>
              <p>{service.solves}</p>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <User size={20} />
            </div>
            <div>
              <h3 className={styles.infoTitle}>למי הטיפול מתאים:</h3>
              <p>{service.forWhom}</p>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>
              <Clock size={20} />
            </div>
            <div>
              <h3 className={styles.infoTitle}>משך הטיפול:</h3>
              <p>{service.duration}</p>
            </div>
          </div>
        </div>
        
        <div className={styles.serviceImageSection}>
          <div className={styles.serviceImage}>
            <img src={service.image} alt={service.name} />
          </div>
          <Button 
            text={`קבעי תור ל${service.name}`} 
            message={`שלום אדל, אני מעוניינת לקבוע תור לטיפול ${service.name}`}
          />
        </div>
      </div>
    </div>
  );
};

const MyServices = () => {
  const services = [
    {
      name: "הרמת ריסים",
      solves: "חיסכון בזמן – לא צריך להתעסק עם מסקרה, מראה טבעי ומטופח ללא איפור",
      forWhom: "מתאים לנשים עם ריסים ישרים שנוטים כלפי מטה, לנשים אלרגיות למסקרה, ולכל מי שמעוניינת במראה טבעי ומטופח עם ריסים מסולסלים ללא צורך במסקרה יומיומית",
      duration: "עד כשעה (בדרך כלל ארבעים דקות)",
      image: risim
    },
    {
      name: "הרמת גבות",
      solves: "מראה מטופח וזוהר בלי להתאמץ יותר מדי, חיסכון בזמן – לא צריך להתעסק עם עיפרון גבות",
      forWhom: "מתאים לנשים עם גבות דלילות או לא מוגדרות, גבות נפולות שמעניקות מראה עייף, ולנשים שרוצות להדגיש את המבט ללא איפור יומיומי",
      duration: "עד כשעה (בדרך כלל ארבעים דקות)",
      image: gabot
    },
    {
      name: "עיצוב ושיקום הגבות",
      solves: "מראה מטופח וזוהר, הגדרת צורת הגבה באופן טבעי ומחמיא",
      forWhom: "מתאים לנשים שסובלות מגבות מרוטות, דלילות או לא סימטריות, ולנשים שמעוניינות בעיצוב גבות טבעי ומחמיא שמתאים למבנה הפנים",
      duration: "כשעה",
      image: gabot
    },
    {
      name: "טיפול משולב הרמת ריסים והרמת גבות",
      solves: "מראה מטופח וזוהר בלי להתאמץ, חיסכון בזמן וכסף על הטיפולים הנפרדים",
      forWhom: "אידיאלי לנשים עסוקות שמחפשות מראה מלא ומושלם בפגישה אחת, למי שסובלת מריסים וגבות שטוחים וחסרי נפח, ולנשים לפני אירוע מיוחד שרוצות מראה טבעי ומטופח",
      duration: "שעה וחצי",
      image: both
    },
    {
      name: "שיזוף בהתזה",
      solves: "מראה זוהר ושזוף ללא חשיפה לשמש, חיסכון בזמן – לא צריך שעות של שיזוף בשמש",
      forWhom: "מתאים לנשים עם עור רגיש לשמש, למי שרוצה להימנע מנזקי קרינה UV, ולנשים לפני אירוע מיוחד שרוצות מראה שזוף ואחיד במהירות",
      duration: "10 דקות בלבד",
      image: shizuf
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.mainTitle} id="טיפולים">הטיפולים שלי</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default MyServices;