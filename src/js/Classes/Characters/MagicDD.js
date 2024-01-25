import Character from './Character';

/**
 * базовый класс мага
 * @class
 * @extends Character
 */
export default class MagicDD extends Character {
  type = 'MagicDD';
  _attack = 10;
  defence = 40;
  _stoned = false;
  _range = 2;

  /**
   * @param {boolean} hasStoned устанавливает наличие "дурмана"
   */
  set stoned(hasStoned) {
    this._stoned = hasStoned;
  }

  /**
   * @returns {boolean} наличие "дурмана"
   */
  get stoned() {
    return this._stoned;
  }

  /**
   * @param {number} value значение расстояния
   */
  set range(value) {
    this.#checkValue(value, 'range');

    this._range = value;
  }

  /**
   * @param {number} value значение атаки
   */
  set attack(value) {
    this.#checkValue(value, 'attack');

    this._attack = value;
  }

  /**
   * @returns {number} значение атаки
   */
  get attack() {
    let attack = this._attack - this.#getDecreaseAttack();

    if (this._stoned) {
      attack -= this.#getStonedDecrease();
    }

    return attack < 0 ? 0 : +attack.toFixed(2);
  }

  /**
   * @returns {number} уменьшение атаки в состоянии "дурмана"
   */
  #getStonedDecrease() {
    return Math.log2(this._range) * 5;
  }

  /**
   * @returns {number} уменьшение атаки
   */
  #getDecreaseAttack() {
    return this._attack * (this._range - 1) * 0.1;
  }

  /**
   * проверяет значение на валидность
   * @param {number} value значение
   * @param {string} prop проверяемое свойство
   *
   * @throws {Error} если значение не валидно
   */
  #checkValue(value, prop) {
    if (typeof value !== 'number') {
      throw new Error('значение должно быть числом');
    }

    if (prop === 'range' && value < 1) {
      throw new Error('значение должно быть >= 1');
    }

    if (prop === 'attack' && value < 0) {
      throw new Error('значение не может быть отрицательным');
    }
  }
}
