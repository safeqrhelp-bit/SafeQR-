// hash.js
const bcrypt = require("bcryptjs");

(async () => {
  const hash = await bcrypt.hash("Nishant@7020804733", 10);
  console.log(hash);
})();
