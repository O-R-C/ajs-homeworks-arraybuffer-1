import Character from './Character';

/**
 * базовый класс бойца ближнего боя
 * @class
 * @extends Character
 */
export default class MeleeDD extends Character {
  type = 'MeleeDD';
  attack = 40;
  defence = 10;
}
