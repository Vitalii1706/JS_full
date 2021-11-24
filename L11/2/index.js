const contacts = [
  {
    name: 'Ted',
    number: '77-77-77',
  },
  {
    name: 'Bob',
    number: '22-22-22',
  },
  {
    name: 'Adel',
    number: '66-66-66',
  },
  {
    name: 'Ost',
    number: '33-33-33',
  },
];

const sortContacts = (contacts, isAsc = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  const result = contacts.sort((a, b) => {
    if (isAsc === true) {
      return a.name.localeCompare(b.name);
    }
    if (isAsc === false) {
      return b.name.localeCompare(a.name);
    }
  });
  return result;
};

console.log(sortcontacts(contacts));
