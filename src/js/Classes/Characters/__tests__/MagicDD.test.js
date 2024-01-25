import MagicDD from '../MagicDD';

const magicDD = new MagicDD('Mage');

test('create MagicDD', () => {
  expect(magicDD instanceof MagicDD).toBeTruthy();
});

describe('set params', () => {
  describe('invalid params', () => {
    const errors = [
      'значение должно быть числом',
      'значение должно быть >= 1',
      'значение не может быть отрицательным',
    ];

    const params = [
      [['1', 'range'], 0],
      [['1', 'attack'], 0],
      [[undefined, 'range'], 0],
      [[undefined, 'attack'], 0],
      [[null, 'range'], 0],
      [[{}, 'attack'], 0],
      [[-1, 'attack'], 2],
      [[0, 'range'], 1],
    ];

    test.each(params)('%p', ([value, prop], error) => {
      expect(() => (magicDD[prop] = value)).toThrow(errors[error]);
    });
  });

  describe('set stoned', () => {
    test('true', () => {
      magicDD.stoned = true;
      expect(magicDD.stoned).toBe(true);
    });
    test('false', () => {
      magicDD.stoned = false;
      expect(magicDD.stoned).toBe(false);
    });
  });
});

describe('return attack', () => {
  describe('without stoned', () => {
    const params = [
      [10, 1, 10],
      [100, 1, 100],
      [10, 2, 9],
      [100, 2, 90],
      [10, 5, 6],
      [100, 5, 60],
    ];

    test.each(params)('attack %p, range %p', (attack, range, expected) => {
      magicDD.stoned = false;
      magicDD.range = range;
      magicDD.attack = attack;
      expect(magicDD.attack).toBeCloseTo(expected);
    });
  });

  describe('with stoned', () => {
    const params = [
      [10, 1, 10],
      [100, 1, 100],
      [10, 2, 4],
      [100, 2, 85],
      [10, 5, 0],
      [100, 5, 48.39],
    ];

    test.each(params)('attack %p, range %p', (attack, range, expected) => {
      magicDD.stoned = true;
      magicDD.range = range;
      magicDD.attack = attack;
      expect(magicDD.attack).toBeCloseTo(expected);
    });
  });
});
