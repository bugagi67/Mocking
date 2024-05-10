import fetchData from '../http';
import getLevel from '../fetch';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('fetchData status OK', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 12,
  });

  const result = getLevel(1);
  const expected = 'Ваш текущий уровень: 12';

  expect(result).toBe(expected);
});

test('fetchData status not OK', () => {
  fetchData.mockReturnValue({
    status: '404',
  });

  const result = getLevel(1);
  const expected = 'Информация об уровне временно недоступна';

  expect(result).toBe(expected);
});
