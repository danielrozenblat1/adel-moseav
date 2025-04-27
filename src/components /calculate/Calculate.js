import React, { useState } from 'react';
import styles from './Calculate.module.css';

const EyelashCalculator = () => {
  const [treatments, setTreatments] = useState('');
  const [income, setIncome] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    // רק מספרים שלמים
    if (value === '' || /^\d+$/.test(value)) {
      setTreatments(value);
      setError('');
    }
  };

  const calculateIncome = () => {
    const treatmentsNum = parseInt(treatments, 10);
    
    // בדיקת ולידציה למספר בין 1-100
    if (!treatmentsNum) {
      setError('נא להזין מספר');
      setIncome(null);
      return;
    }
    
    if (treatmentsNum < 1 || treatmentsNum > 100) {
      setError('נא להזין מספר בין 1 ל-100');
      setIncome(null);
      return;
    }

    // חישוב ההכנסה
    setIncome(treatmentsNum * 250);
    setError('');
  };

  return <>
  

       
    <div className={styles.container}>
      
      <h1 className={styles.title}>אז כמה אפשר להרוויח בתחום הריסים?</h1>
      <h2 className={styles.subtitle}>הכניסי את מספר הטיפולים (בין 1-100)</h2>
      
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={treatments}
          onChange={handleInputChange}
          className={styles.input}
          placeholder="הזיני מספר בין 1 ל-100"
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
      
      <button 
        onClick={calculateIncome} 
        className={styles.button}
      >
        חשבי הכנסה
      </button>
      
      {income !== null && (
        <div className={styles.result}>
          ההכנסה הפוטנציאלית שלך: {income.toLocaleString()} ₪
        </div>
      )}
    </div>
    </>
};

export default EyelashCalculator;