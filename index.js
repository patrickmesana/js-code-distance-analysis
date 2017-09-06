const babylon = require("babylon");

const code = 
`function square(n) {
  return n * n;
}`;

parsed = babylon.parse(code);
console.log(JSON.stringify(parsed, null, 2));