import Daemon from '../Daemon';

describe('test class Daemon', () => {
  test('correct create', () => {
    const result = new Daemon('Daemon');

    expect(result).toEqual({
      level: 1,
      attack: 10,
      defence: 40,
      health: 100,
      type: 'Daemon',
      _name: 'Daemon',
    });
  });
});
