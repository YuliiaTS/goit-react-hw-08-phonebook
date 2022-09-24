import { createSlice } from '@reduxjs/toolkit';

  fetchContacts,
export const contactsSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;