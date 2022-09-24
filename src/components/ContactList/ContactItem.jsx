import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from '../ContactList/ContactList.module.css';
import { deleteContacts } from '../../redux/contact/contactsApi';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  }

  return (
    <li className={style.item} id={id}>
      {name}: {number}
      <button
        className={style.btn}
        type="button"
        onClick={() => {onDeleteContact(id)}}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
