export default function showColorHealth(args) {
  if (args.health > 50) {
    return 'healthy';
  } if (args.health >= 15 && args.health <= 50) {
    return 'wounded';
  } if (args.health < 15 && args.health > 0) {
    return 'critical';
  }
  return 'is dead';
}
