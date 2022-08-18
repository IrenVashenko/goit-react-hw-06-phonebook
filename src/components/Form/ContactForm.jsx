import { ContactBtn } from './ContactForm.styled'
import { Formik } from 'formik';
import { Input, ContactForm } from './ContactForm.styled'
export const ContactFormed = ({ addContact }) => {

    return (
        <Formik initialValues={{ name: '', number: '' }} onSubmit={addContact}>
            <ContactForm>
                <div>Name</div>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <div>Number</div>
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <ContactBtn type='submit'>Add contact</ContactBtn>
            </ContactForm>
        </Formik>
    )
}
