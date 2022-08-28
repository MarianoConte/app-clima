import {
  getDayName,
  capitalizeFirstLetter,
  getParsedDate,
} from '../../utils/index';

describe('utils', () => {
  test('getDayName', () => {
    const date = new Date(2022, 0, 1);
    expect(getDayName(date)).toBe('Sab');
    expect(getDayName(date)).not.toBe('Dom');
  });

  test('capitalizeFirstLetter', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('hello')).not.toBe('hello');
  });

  test('getParsedDate', () => {
    const date = new Date(2022, 0, 1);
    expect(getParsedDate(date)).toBe('Sab, 00:00');
    expect(getParsedDate(date)).not.toBe('Dom, 00:00');
  });
});
