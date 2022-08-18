import { Input, ContactForm } from './Filter.styled';

const Filter = ({ onChange, value }) => {
    return (
        <ContactForm>
            Find contacts by name
            <Input
                type="text"
                value={value}
                onChange={onChange}
            />
        </ContactForm>
    )
}
export default Filter;