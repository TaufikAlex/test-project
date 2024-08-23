let renameCounts = {}; // Object to track rename counts for each Pokémon by its unique ID

function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

export function RenameCounts(uid, newNickname) {
  if (!renameCounts[uid]) {
    renameCounts[uid] = 0; // Initialize rename count
  }
  const fibIndex = renameCounts[uid]++;
  const fibonacciNumber = fibonacci(fibIndex);
  const renamedPokemon = `${newNickname}-${fibonacciNumber}`;

  // Proceed with renaming in the application logic
  return renamedPokemon;
}
