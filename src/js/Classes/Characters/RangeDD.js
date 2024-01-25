import Character from './Character';

/**
 * базовый класс бойца дальнего боя
 * @class
 * @extends Character
 */
export default class RangeDD extends Character {
  type = 'RangeDD';
  attack = 25;
  defence = 25;
}
