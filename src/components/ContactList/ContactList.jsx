import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div>
      {filteredContacts.length > 0 && (
        <ul className={css.list}>
          {filteredContacts.map(contact => {
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
