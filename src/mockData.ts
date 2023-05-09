export const nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Text input',  input: 'some nice custom text'  },
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'textToUpperCase',
    data: { label: 'To Uppercase' },
    position: { x: 300, y: 50 },
  },
  {
    id: '3',
    type: 'textToUpperCase',
    data: { label: 'To Uppercase' },
    position: { x: 300, y: 50 },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Output' },
    position: { x: 650, y: 25 },
  },
]

export const edges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
  },
]

