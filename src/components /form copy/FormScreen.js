import { useRef, useState } from 'react';
import styles from './FormScreen.module.css'

const FormScreen = (props) => {
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef('')
  const phoneRef = useRef('')
  const emailRef = useRef('')
  const reasonRef = useRef('')
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead"
  const reciver = "aviarc100@gmail.com"

  const submitHandler = async(e) => {
      e.preventDefault()
      const name = nameRef?.current?.value
      const phone = phoneRef?.current?.value
      const email = emailRef?.current?.value
      const reason = reasonRef?.current?.value
      
      if(name.trim().length <= 2) {
          alert("אנא הכניסי שם מלא ")
          return;
      }
      if(phone.trim().length !== 10) {
          alert("אנא הכניסי מספר טלפון הכולל 10 ספרות ")
          return;
      }
      if(!email.includes("@")) {
          alert("אנא הכניסי מייל תקין ")
          return;
      }
      if(reason.trim().length <= 2) {
          alert("אנא הכניסי סיבת פנייה ")
          return;
      }
   
      // נתונים לשרת 
      const serverData = {
          name: name,
          phone: phone,
          email: email,
          reason: reason,
          reciver: reciver
      }

      try {
          // שליחה לשרת בלבד
          const serverResponse = await fetch(serverUrl, {
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(serverData)
          });

          if (serverResponse.ok) {
              alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים")
              nameRef.current.value = ""
              phoneRef.current.value = ""
              emailRef.current.value = ""
              reasonRef.current.value = ""
              setSubmitted(true)
          } else {
              throw new Error('Failed to submit form')
          }
      } catch (error) {
          alert("התרחשה שגיאה, אנא נסי שוב מאוחר יותר")
          console.error('Error submitting form:', error)
      }
  }

  return <>
      <div className={styles.title} id="צרי קשר">{props.title}</div>
      <div className={styles.formContainer}>
          <form className={styles.form}>
              <input
                  type="text"
                  className={styles.input}
                  placeholder="שם מלא"
                  ref={nameRef}
              />
              <input
                  type="tel"
                  className={styles.input}
                  placeholder="מספר טלפון"
                  ref={phoneRef}
              />
              <input
                  type="email"
                  className={styles.input}
                  placeholder="מייל"
                  ref={emailRef}
              />
              <textarea
                  className={styles.input}
                  placeholder="סיבת הפנייה"
                  ref={reasonRef}
                  rows="4"
              />
              <button onClick={submitHandler} className={styles.button}>
                  אדל, בואי נבדוק התאמה
              </button>
          </form>
      </div>
  </>
};

export default FormScreen