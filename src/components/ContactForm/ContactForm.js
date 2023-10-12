import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/slice";
import { nanoid } from "nanoid";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const nameId = nanoid();
    const numberId = nanoid();

    const handleChangeForm = (e) => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default: return;
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        const addNewContact = { name, number, id: nanoid() };

        if (contacts.find(
            contact => name.toLocaleLowerCase() === contact.name.toLowerCase()
        )) {
            alert(`${name} is already in contacts`)
        } else {
            dispatch(addContact(addNewContact))
            setName('')
            setNumber('')
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor={nameId}>Name</label>
                <input
                    type="text"
                    name="name"
                    id={nameId}
                    placeholder="Enter name"
                    value={name}
                    onChange={handleChangeForm}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <br />
                <label htmlFor="{numberId}"></label>
                <input
                    type="tel"
                    id={numberId}
                    name="number"
                    placeholder="Enter phone number"
                    value={number}
                    onChange={handleChangeForm}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <br />
                <button type='submit'>Add contact</button>
                <br/>
            </form>
        </div>
    )
}
