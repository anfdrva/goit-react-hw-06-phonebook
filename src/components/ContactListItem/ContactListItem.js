import { removeContact } from "redux/slice";
import { useDispatch } from "react-redux";

const ContactListItem = ({ id, number, name }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <li key={id}>
                <p>
                    <span>{name} : </span>
                    {number}
                </p>
                <button type="button" onClick={() => dispatch(removeContact(id))}>Delete</button>
            </li>
        </div>
    );
};

export default ContactListItem;

// import { ContactItem, DeleteContactBtn } from "./ContactListItem.styled";


// export const ContactListItem = ({ person, id, onDelete }) => {
//     return (
//         <ContactItem>
//             <p>{person.name}</p>
//             <p>{person.number}</p>
//             <DeleteContactBtn onClick={() => onDelete(id)}>Delete</DeleteContactBtn>
//         </ContactItem>
//     )
// }