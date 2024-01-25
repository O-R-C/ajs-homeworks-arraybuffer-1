import Swordsman from '../Swordsman';

describe('test class Swordsman', () => {
  test('correct create', () => {
    const result = new Swordsman('Swordsman');

    expect(result).toEqual({
      level: 1,
      attack: 40,
      defence: 10,
      health: 100,
      type: 'Swordsman',
      _name: 'Swordsman',
    });
  });
});
