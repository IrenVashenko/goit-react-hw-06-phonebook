import { useDispatch } from 'react-redux';
import { ContactsList, ContactItem, ContactBtn } from './ContactList.styled'
import { deleteContact } from 'redux/store';

const ContactList = ({ value }) => {
    const dispatch = useDispatch();
    return (
        <ContactsList>
            {value.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <span>{name}: </span>
                    <span>{number}</span>
                    <ContactBtn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</ContactBtn>
                </ContactItem>
            ))}
        </ContactsList>
    )
}

export default ContactList;