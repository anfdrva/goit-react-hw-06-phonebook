import { React } from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';


export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const value = useSelector(getFilteredContacts);

    const filterContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(value));
    };

    const contactsMap = value === '' ? contacts : filterContacts();

    return (
        <div>
            {contactsMap.map(({ id, number, name }) => {
                return <ContactListItem key={id} id={id} name={name} number={number} />
            })}
        </div>
    );
};

export default ContactList;