import Undead from '../Undead';

describe('test class Undead', () => {
  test('correct create', () => {
    const result = new Undead('Undead');

    expect(result).toEqual({
      level: 1,
      attack: 25,
      defence: 25,
      health: 100,
      type: 'Undead',
      _name: 'Undead',
    });
  });
});
