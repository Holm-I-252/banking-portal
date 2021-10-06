const fs = require("fs");
const path = require("path");

const accountData = fs.readFileSync("src/json/accounts.json", {
  encoding: "utf8",
  flag: "r",
});

const accounts = JSON.parse(accountData);

const userData = fs.readFileSync("src/json/users.json", {
  encoding: "utf8",
  flag: "r",
});

const users = JSON.parse(userData);

let writeJSON = () => {
  let accountsJSON = JSON.stringify(accounts);

  fs.writeFileSync(
    path.join(__dirname, "json", "accounts.json"),
    accountsJSON,
    "utf8"
  );
};

module.exports = {
  accounts,
  users,
  writeJSON,
};
