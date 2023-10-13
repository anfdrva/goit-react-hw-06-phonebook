import { createSlice } from "@reduxjs/toolkit";

const InitialStatecontacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: InitialStatecontacts,
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        removeContact(state, action) {
            const lowerCaseFilter = state.filter.toLowerCase();
            state.items = state.items.filter(item => item.id !== action.payload && item.name.toLowerCase().includes(lowerCaseFilter));
        },
        changeFilter(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { addContact, removeContact, changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;