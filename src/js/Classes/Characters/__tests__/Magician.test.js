import Magician from '../Magician';

describe('test class Magician', () => {
  test('correct create', () => {
    const result = new Magician('Magician');

    expect(result instanceof Magician).toBeTruthy();
  });
});
