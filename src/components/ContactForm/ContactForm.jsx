import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addContacts } from '../../redux/contact/contactsApi';
import { getContacts } from '../../redux/store';
import style from '../ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onSubmitForm = async e => {
    e.preventDefault();

    const isAdded = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
      if (isAdded) {
        alert(`${name} is already in contacts `);
        return;
      }
      dispatch(addContacts({ name, number }));
    
      setName('');
      setNumber('');

  };

  return (
    <form onSubmit={onSubmitForm}>
      <label className={style.label}>
        Name
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          onChange={e => setNumber(e.target.value)}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

