export const EMPLOYEES = [
  {
    name: 'Adam',
    lastname: 'Nowak',
    position: 'Frontend developer',
    contractType: 'Student :)',
    phoneNumber: 123456789,
    technologies: ['Javascript', 'Java'],
  },
  {
    name: 'Bartek',
    lastname: 'Kowalski',
    position: 'Backend developer',
    contractType: 'Kontrakt B2B',
    phoneNumber: 123456789,
    technologies: ['Java', 'MySQL'],
  },
  {
    name: 'Zbigniew',
    lastname: 'Polak',
    position: 'DevOps',
    contractType: 'Umowa o prace',
    phoneNumber: 123456789,
    technologies: ['Azure', 'Docker', 'Jenkins'],
  },
  {
    name: 'Marcin',
    lastname: 'Inny',
    position: 'Solution architect',
    contractType: 'Kontrakt B2B',
    phoneNumber: 123456789,
    technologies: ['Node.js', 'AWS'],
  },
  {
    name: 'Łukasz',
    lastname: 'Kochajewski',
    position: 'Backend developer',
    contractType: 'Umowa o prace',
    phoneNumber: 123456789,
    technologies: ['.NET', 'Node.js', 'MongoDB'],
  },
];

export const FIELDS = [
  {
    label: 'Imię',
    type: 'input',
    model: 'name',
    id: 'name',
  },
  {
    label: 'Nazwisko',
    type: 'input',
    model: 'lastname',
    id: 'lastname',
  },
  {
    label: 'Stanowisko',
    type: 'select',
    model: 'position',
    id: 'position',
    options: [],
  },
  {
    label: 'Numer Telefonu',
    type: 'input',
    model: 'phoneNumber',
    id: 'phoneNumber',
  },
  {
    label: 'Forma zatrudnienia',
    type: 'select',
    model: 'contractType',
    id: 'contractType',
    options: [],
  },
];
