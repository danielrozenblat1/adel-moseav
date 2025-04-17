// MyServices.jsx
import React from 'react';
import styles from './Services.module.css';
import { Clock, Target, User, MessageCircle } from 'lucide-react';

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
      forWhom: "נשים שאוהבות טיפוח – נשים בכל הגילאים שרוצות מראה טבעי ומטופח",
      duration: "עד כשעה (בדרך כלל ארבעים דקות)",
      image: "/api/placeholder/300/200"
    },
    {
      name: "הרמת גבות",
      solves: "מראה מטופח וזוהר בלי להתאמץ יותר מדי, חיסכון בזמן – לא צריך להתעסק עם עיפרון גבות",
      forWhom: "נשים שאוהבות טיפוח – נשים בכל הגילאים שרוצות מראה טבעי ומטופח",
      duration: "עד כשעה (בדרך כלל ארבעים דקות)",
      image: "/api/placeholder/300/200"
    },
    {
      name: "עיצוב ושיקום הגבות",
      solves: "מראה מטופח וזוהר, הגדרת צורת הגבה באופן טבעי ומחמיא",
      forWhom: "נשים שאוהבות טיפוח – נשים בכל הגילאים שרוצות מראה טבעי ומטופח",
      duration: "כשעה",
      image: "/api/placeholder/300/200"
    },
    {
      name: "טיפול משולב הרמת ריסים והרמת גבות",
      solves: "מראה מטופח וזוהר בלי להתאמץ, חיסכון בזמן וכסף על הטיפולים הנפרדים",
      forWhom: "נשים שאוהבות טיפוח – נשים בכל הגילאים שרוצות מראה טבעי ומטופח",
      duration: "שעה וחצי",
      image: "/api/placeholder/300/200"
    },
    {
      name: "שיזוף בהתזה",
      solves: "מראה זוהר ושזוף ללא חשיפה לשמש, חיסכון בזמן – לא צריך שעות של שיזוף בשמש",
      forWhom: "נשים שאוהבות טיפוח – נשים בכל הגילאים שרוצות מראה טבעי ומטופח",
      duration: "10 דקות בלבד",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.mainTitle}>הטיפולים שלי</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default MyServices;