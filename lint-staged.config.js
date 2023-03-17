module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run types:check',
  '*.{json,yaml}': ['prettier --write'],
};