import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import { getFilter, getContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const onRemoveContact = id => dispatch(deleteContact(id));

  return (
    <List>
      {filterContacts.map(({ id, name, number }) => (
        <li className="contact-item" key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button className="button-remove" onClick={() => onRemoveContact(id)}>
            &times;
          </button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;
