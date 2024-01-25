import Magician from '../Magician';

describe('test class Magician', () => {
  test('correct create', () => {
    const result = new Magician('Magician');

    expect(result).toEqual({
      level: 1,
      attack: 10,
      defence: 40,
      health: 100,
      type: 'Magician',
      _name: 'Magician',
    });
  });
});
