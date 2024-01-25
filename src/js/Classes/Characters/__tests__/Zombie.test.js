import Zombie from '../Zombie';

describe('test class Zombie', () => {
  test('correct create', () => {
    const result = new Zombie('Zombie');

    expect(result).toEqual({
      level: 1,
      attack: 40,
      defence: 10,
      health: 100,
      type: 'Zombie',
      _name: 'Zombie',
    });
  });
});
