export default function GamesIndex() {
  const games = [
    { slug: "black-jack", name: "Black Jack" },
    { slug: "pong", name: "Pong" },
    { slug: "tetris", name: "Tetris" },
  ];
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Games</h1>
      <ul className="space-y-2">
        {games.map((g) => (
          <li key={g.slug}>
            <a href={`/games/${g.slug}`} className="underline">
              {g.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
