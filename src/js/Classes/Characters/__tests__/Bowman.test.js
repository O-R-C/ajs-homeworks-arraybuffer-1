import Bowman from '../Bowman';

describe('test class Bowman', () => {
  test('correct create', () => {
    const result = new Bowman('Bowman');

    expect(result).toEqual({
      level: 1,
      attack: 25,
      defence: 25,
      health: 100,
      type: 'Bowman',
      _name: 'Bowman',
    });
  });
});
