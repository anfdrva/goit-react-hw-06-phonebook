import { removeContact } from "redux/slice";
import { useDispatch } from "react-redux";
import { ContactItem, DeleteContactBtn } from "./ContactListItem.styled";

const ContactListItem = ({ id, number, name }) => {
    const dispatch = useDispatch();
    return (
        <ContactItem key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <DeleteContactBtn type="button" onClick={() => dispatch(removeContact(id))}>Delete</DeleteContactBtn>
        </ContactItem>
    );
};

export default ContactListItem;
