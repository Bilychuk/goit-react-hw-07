import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser className="icon" /> {contact.name}
        </p>
        <p className={css.number}>
          <FaPhone className="icon" /> {contact.number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </div>
  );
}
