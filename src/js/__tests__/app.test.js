import showColorHealth from '../app';

const list = [
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Маг', health: 50 }, 'wounded'],
  [{ name: 'Маг', health: 49 }, 'wounded'],
  [{ name: 'Маг', health: 16 }, 'wounded'],
  [{ name: 'Маг', health: 15 }, 'wounded'],
  [{ name: 'Маг', health: 14 }, 'critical'],
  [{ name: 'Маг', health: 1 }, 'critical'],
  [{ name: 'Маг', health: 0 }, 'is dead'],
];

const handler = test.each(list);

handler('health display at %s health', (listItem, expected) => {
  const result = showColorHealth(listItem);
  expect(result).toBe(expected);
});
