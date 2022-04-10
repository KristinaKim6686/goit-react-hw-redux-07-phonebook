export const getContacts = (state) => state.contacts;

export const getFilter = (state) => state.filterReducer;

export const getVisibleContacts = (state) => {
  const contactList = (state) => state.contactList;
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase().trim();
  return contactList.filter((contact) => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};
