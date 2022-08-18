import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const booksSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }
        ], filter: ''
    },
    reducers: {
        add({ items }, action) {
            const { name, number } = action.payload;
            const contact = {
                id: nanoid(),
                name,
                number,
            }
            items.push(contact)
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => (
                contact.id !== action.payload
            ))
        },
        filteredContact(state, action) {
            state.filter = action.payload;
        }
    }
})
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const { add, deleteContact, filteredContact } = booksSlice.actions

export const store = configureStore({
    reducer: {
        contacts: booksSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});


const persistConfig = {
    key: 'contact',
    storage,
    whitelist: ['items'],
};

export const contactsReducer = persistReducer(
    persistConfig,
    booksSlice.reducer
);

export const persistor = persistStore(store);
