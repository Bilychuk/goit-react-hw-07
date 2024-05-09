import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className={css.item}>
                <Contact contact={contact} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
