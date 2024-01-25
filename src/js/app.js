import Daemon from './Classes/Characters/Daemon';

const daemon = new Daemon('Daemon');
daemon.stoned = true;
daemon.range = 3;
daemon.attack = 100;

console.log(daemon.stoned);
console.log(daemon.attack);
console.log('🚀 ~ daemon:', daemon);

