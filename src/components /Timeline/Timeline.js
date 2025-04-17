import { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import styles from './Timeline.module.css';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "כוח רצון ונחישות",
      content: "בתחום הריסים, כוח רצון ונחישות הם הבסיס להצלחה. תצטרכי לעבור הכשרות מקצועיות, לתרגל שעות ארוכות, ולהתמודד עם אתגרים טכניים בעבודה עם לקוחות שונות. בימים שבהם התוצאות לא מושלמות, הנחישות שלך תעזור לך להמשיך, להשתפר ולבנות מוניטין איכותי שיביא לקוחות נאמנות.",
      color: "tone-1"
    },
    {
      number: 2,
      title: "סבלנות",
      content: "הריסים הם אומנות של דיוק והקפדה על פרטים קטנים. כל לקוחה דורשת טיפול ייחודי, והסבלנות שלך בבניית כל ריס וריס היא המפתח לתוצאות מושלמות. בנוסף, בניית מוניטין ובסיס לקוחות דורשת זמן - אל תצפי להצלחה בן לילה, אלא האמיני בתהליך והתוצאות המדהימות יגיעו.",
      color: "tone-2"
    },
    {
      number: 3,
      title: "התמדה",
      content: "עולם הריסים מתפתח כל הזמן עם טכניקות וחומרים חדשים. ההצלחה שלך תלויה ביכולת להתמיד בלמידה מתמדת, בהשתתפות בהשתלמויות והתעדכנות בטרנדים חדשים. לקוחות מחפשות מקצועיות עקבית - כל טיפול חייב להיות מושלם כמו הקודם. קחי את הצעד הראשון, וההתמדה שלך תהפוך אותך למובילה בתחום.",
      color: "tone-3"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      setScrollProgress(progress);

      const elements = document.querySelectorAll(`.${styles.timelineItem}`);
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / viewportHeight;
        
        if (elementProgress > 0.2 && elementProgress < 1) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} id="הדרך להצלחה בתחום הריסים">
      <div className={styles.content}>
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.1s linear'
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              }`}
            >
              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <div 
                    className={`${styles.timelineNumber} ${
                      visibleSteps.has(step.number) ? styles.numberActive : styles.numberInactive
                    } ${styles[`number-${step.color}`]}`}
                  >
                    {visibleSteps.has(step.number) && activeStep > step.number ? (
                      <Check className={styles.checkIcon} />
                    ) : (
                      <span className={styles.numberText}>{step.number}</span>
                    )}
                    <div className={styles.numberGlow} />
                  </div>
                  
                  <h3 className={styles.timelineTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;