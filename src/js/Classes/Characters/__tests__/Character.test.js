import Character from '../Character';

describe('test class Character', () => {
  test('correct create', () => {
    const result = new Character('Character');

    expect(result).toEqual({
      level: 1,
      attack: 1,
      defence: 1,
      health: 100,
      _name: 'Character',
    });
  });

  describe('correct name', () => {
    const names = ['Андрей', 'Вовчик', 'Денис', 'Нагибатор', 'Язь'];

    test.each(names)('%p', (name) => {
      const character = new Character(name);

      expect(character.name).toBe(name);
    });
  });

  describe('name not String', () => {
    const names = [123, true, null, [], { name: 'Петр' }, undefined];

    test.each(names)('%p', (name) => {
      expect(() => new Character(name)).toThrow('имя должно быть строкой');
    });
  });

  describe('name length not valid', () => {
    describe('length < 2', () => {
      const names = ['   ', 'z', 'z              '];

      test.each(names)('%p', (name) => {
        expect(() => new Character(name)).toThrow(
          'длина имени должна быть больше одного символа'
        );
      });
    });

    describe('length > 10', () => {
      test("name '12345678901'", () => {
        expect(() => new Character('12345678901')).toThrow(
          'длина имени не может быть больше 10 символов'
        );
      });
    });
  });

  describe('method damage', () => {
    test('health = 100', () => {
      const damage = 50;
      const character = new Character('test');
      character.damage(damage);

      const reference = 100 - damage * (1 - 1 / 100);

      expect(character.health).toBe(reference);
    });

    test('health = 0', () => {
      const character = new Character('test');
      character.health = 0;

      expect(() => character.damage(10)).toThrow('ему уже все равно');
    });
  });

  describe('method levelUp', () => {
    describe('health > 0', () => {
      test('health 100', () => {
        const character = new Character('test');
        character.levelUp();

        expect(character.health).toBe(100);
        expect(character.attack).toBe(1.2);
        expect(character.defence).toBe(1.2);
      });
    });

    test('health = 0', () => {
      const character = new Character('test');
      character.health = 0;

      expect(() => character.levelUp()).toThrow(
        'нельзя повысить левел умершего'
      );
    });
  });
});
