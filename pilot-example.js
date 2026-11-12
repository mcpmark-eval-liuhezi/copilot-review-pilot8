#!/usr/bin/env node
// pilot-change: small example script for the Copilot code review pilot
// Purpose: demonstrate a primitve validation + error-handling pattern
// that Copilot review should be able to check on a PR.

const input = process.argv[2] || 'world';

function greet(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('name must be a non-empty string');
  }
  return `Hello, ${name.trim()}!`;
}

function main() {
  try {
    console.log(greet(input));
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
