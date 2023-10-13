import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/slice";
import { nanoid } from "nanoid";
import { StyledForm, Label, StyledErrorMessage, AddContactBtn } from "./ContactForm.styled";
import { Formik, Field} from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
   name: Yup.string().matches( /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required('Required'),
   number: Yup.string().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required('Required'),
 });

export default function ContactForm() {
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const nameId = nanoid();
    const numberId = nanoid();

    const handleFormSubmit = (values, { resetForm }) => {
        const { name, number } = values;

        const addNewContact = { name, number, id: nanoid() };

        if (contacts.find(contact => name.toLowerCase() === contact.name.toLowerCase())) {
            alert(`${name} is already in contacts`);
        } else {
            dispatch(addContact(addNewContact));
            resetForm();
        }
    }

    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={handleFormSubmit}
        >
            {({ handleSubmit }) => (
                <StyledForm onSubmit={handleSubmit}>
                    <Label htmlFor={nameId}>
                        Name
                        <Field name="name" type="text" />
                        <StyledErrorMessage name="name" component="div"/>
                    </Label>
                    <Label htmlFor={numberId}>
                        Number
                        <Field name="number" type="tel" />
                        <StyledErrorMessage name="number" component="div"/>
                    </Label>
                    <AddContactBtn type="submit">Add contact</AddContactBtn>
                </StyledForm>
            )}
        </Formik>
    )
};

