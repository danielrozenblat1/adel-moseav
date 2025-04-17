import { useEffect, useRef, useState } from "react";
import styles from "./NewBox.module.css";
import { Player } from "@lordicon/react";

const NewBox = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };
  const playerRef1 = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      playerRef1?.current?.playFromBeginning();
    }
  }, [isVisible]);

  useEffect(() => {
    // Create intersection observer to detect when element is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible
          observer.disconnect();
        }
      },
      {
        root: null, // viewport
        threshold: 0.1, // trigger when at least 10% is visible
        rootMargin: "0px"
      }
    );

    if (boxRef.current) {
      // Start observing the box
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Add flip animation only when element becomes visible
    if (isVisible && boxRef.current) {
      // Initialize with pre-flipped state (hidden)
      boxRef.current.style.transform = "rotateX(180deg)";
      boxRef.current.style.opacity = "0";
      
      // Trigger animation after a small delay to ensure styles are applied
      setTimeout(() => {
        boxRef.current.style.transition = "transform 1.5s ease, opacity 1.5s ease";
        boxRef.current.style.transform = "rotateX(0deg)";
        boxRef.current.style.opacity = "1";
        boxRef.current.classList.add(styles.visible);
      }, 100);
    }
  }, [isVisible]);

  return (
    <div className={styles.NewBox} ref={boxRef}>
      <div className={styles.iconCircle}>
        <Player 
          icon={props.icon} 
          ref={playerRef1} 
          size="100%" 
          loop={true} 
          onComplete={handleComplete}
        />
      </div>
      <div className={styles.textContent}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </div>
  );

};

export default NewBox;