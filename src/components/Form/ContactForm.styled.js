import styled from 'styled-components';
import { Field, Form } from 'formik';

export const ContactBtn = styled.button`
    background-color: #EA9215;
    border: 3px solid #3A4750;
    padding: 10px 30px;
    cursor: pointer;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
`;

export const ContactForm = styled(Form)`
    font-weight: 500;
    display: block;
`;

export const Input = styled(Field)`
    font-size: 18px;
    height: 30px;
    width: 70%;
    background-color: #EEEEEE;
    border: 3px solid #3A4750;
    margin: 0px 0px 10px 0px; 
    outline: 0;
    outline-offset: 0;
`;