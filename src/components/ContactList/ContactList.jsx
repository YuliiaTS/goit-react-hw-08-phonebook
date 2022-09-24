import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactItem from '../ContactList/ContactItem';
import style from '../ContactList/ContactList.module.css';
import { fetchContacts } from '../../redux/contact/contactsApi';
import { getValue, getContacts } from '../../redux/store';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getValue);

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={style.list}>
          {visibleContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </ul>
      ) : (
        <p>Contacts' list is empty</p>
      )}
    </>
  );
}
