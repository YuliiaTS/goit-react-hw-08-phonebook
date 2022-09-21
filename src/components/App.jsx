import style from '../components/App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import RegisterForm from './RegisterForm/RegisterForm';

export default function App() {
  return (
    <div className={style.main}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <RegisterForm />
    </div>
  );
}