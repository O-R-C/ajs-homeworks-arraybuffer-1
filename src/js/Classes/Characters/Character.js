/** базовый класс персонажа
 * @class
 */
export default class Character {
  level = 1;
  attack = 1;
  defence = 1;
  health = 100;

  /**
   * @constructor
   * @param {string} name имя персонажа, должно быть строкой из 2-10 символов
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * @param {string} name имя персонажа, должно быть строкой из 2-10 символов
   * @throws {error} если имя не валидно
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('имя должно быть строкой');
    }

    if (name.trim().length < 2) {
      throw new Error('длина имени должна быть больше одного символа');
    }

    if (name.trim().length > 10) {
      throw new Error('длина имени не может быть больше 10 символов');
    }

    this._name = name;
  }

  /**
   * @returns имя персонажа
   */
  get name() {
    return this._name;
  }

  /** повышает уровень персонажа
   * level + 1
   * health = 100
   * attack & defence + 20%
   *
   * @throws {error} если здоровье <= 0
   */
  levelUp() {
    if (this.health <= 0) {
      throw new Error('нельзя повысить левел умершего');
    }

    const multi = 1.2;

    this.level += 1;
    this.health = 100;
    this.attack *= multi;
    this.defence *= multi;
  }

  /** рассчитывает урон по персонажу
   * меняет значение health
   *
   * @param {number} points - значение урона по персонажу
   *
   * @throws {error} error - если здоровье <= 0
   */
  damage(points) {
    if (this.health <= 0) {
      throw new Error('ему уже все равно');
    }

    this.health -= points * (1 - this.defence / 100);
  }
}
