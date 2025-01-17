function saveUserInfo(key, value) {
  sessionStorage.setItem(key, value);
  console.log(`Saved ${key}: ${value}`);
}

function getUserInfo(key) {
  const value = sessionStorage.getItem(key);
  console.log(`Retrieved ${key}: ${value}`);
  return value;
}

saveUserInfo("username", "JohnDoe");

console.log(getUserInfo("username"));
