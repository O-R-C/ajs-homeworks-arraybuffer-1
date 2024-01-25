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

  set stoned(hasStoned) {
    this._stoned = hasStoned;
  }

  get stoned() {
    return this._stoned;
  }

  set range(value) {
    this.checkValue(value, 'range');

    this._range = value;
  }

  set attack(value) {
    this.checkValue(value, 'attack');

    this._attack = value;
  }

  get attack() {
    let attack = this._attack - this.getDecreaseAttack();

    if (this._stoned) {
      attack -= this.getStonedDecrease();
    }

    return attack < 0 ? 0 : +attack.toFixed(2);
  }

  getStonedDecrease() {
    return Math.log2(this._range) * 5;
  }

  getDecreaseAttack() {
    return this._attack * (this._range - 1) * 0.1;
  }

  checkValue(value, prop = null) {
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
