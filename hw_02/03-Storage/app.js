function saveUserInfo(key, value) {
  sessionStorage.setItem(key, value);
  console.log(`Saved | ${key}: ${value}`);
}

function getUserInfo(key) {
  const value = sessionStorage.getItem(key);
  return value;
}

saveUserInfo("username", "Octo");
saveUserInfo("skill", "Developer");

console.log(`\n${getUserInfo("username")}`);
