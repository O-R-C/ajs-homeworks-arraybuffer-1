import Daemon from '../Daemon';

describe('test class Daemon', () => {
  test('correct create', () => {
    const result = new Daemon('Daemon');

    expect(result instanceof Daemon).toBeTruthy();
  });
});
