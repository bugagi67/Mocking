export default function sortCharacters(args) {
  return args.sort((a, b) => b.health - a.health);
}
