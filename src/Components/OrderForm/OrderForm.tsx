// import React, { useState } from 'react';
// import css from './OrderForm.module.css';

// const OrderForm: React.FC = () => {
//   const [address, setAddress] = useState<string>('');
//   const [house, setHouse] = useState<string>('');
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [phone, setPhone] = useState<string>('+380');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('address', address);
//     formData.append('house', house);
//     formData.append('phone', phone);
//     formData.append('formName', 'pizzaOrder');

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Authorization': '5de563de-d71f-4b67-b7bc-797ade130496' // Обратите внимание на формат Bearer токена
//         }
//       });

//       const result = await response.json();
//       if (response.ok) {
//         console.log('Success:', result);
//         alert('Форма успешно отправлена!');
//       } else {
//         console.error('Error:', result);
//         alert('Ошибка при отправке формы.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Ошибка при отправке формы.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={css.form}>
//       <h2>Введите свои данные</h2>
//       <label>
//         Имя:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className={css.formInput}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className={css.formInput}
//         />
//       </label>
//       <label>
//         Введіть вулицю:
//         <input
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           className={css.formInput}
//         />
//       </label>
//       <label>
//         Дім:
//         <input
//           type="text"
//           value={house}
//           onChange={(e) => setHouse(e.target.value)}
//           className={css.formInput}
//         />
//       </label>
//       <label>
//         Телефон:
//         <input
//           type="text"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           placeholder="Input phone"
//           className={css.formInput}
          
//         />
//       </label>
//       <button type="submit" className={css.formButton}>Submit</button>
//     </form>
//   );
// };

// export default OrderForm;

import React, { useState } from 'react';
import css from './OrderForm.module.css';
export default function Contact() {
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+380");
  const [address, setAddress] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult("Отправка....");
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append('formName', 'pizzaOrder');
    formData.append("access_key", "5de563de-d71f-4b67-b7bc-797ade130496");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Форма успешно отправлена");
        setName("");
        setEmail("");
        setAddress("");
        setPhone("+380");
      } else {
        console.error("Ошибка:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setResult("Ошибка при отправке формы");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          required
          className={css.formInput}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ваш email"
          required
          className={css.formInput}
        />
         <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Ваш телефон"
          required
          className={css.formInput}
        />
        <textarea
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Ваш адрес"
          required
          className={css.formInput}
          spellCheck="false"
        ></textarea>

        <button type="submit" className={css.formButton}>Отправить форму</button>
      </form>
      <span>{result}</span>
    </div>
  );
}