import readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Recibir datos de usuario
 */
export default async function input(prompt) {
  console.log(prompt);
  return (await rl[Symbol.asyncIterator]().next()).value;
}
