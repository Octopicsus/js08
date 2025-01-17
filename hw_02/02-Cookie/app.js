function setUserInfoCookie(key, value) {
  const encodedValue = encodeURIComponent(`${key}=${value}`);

  const expires = new Date();
  expires.setSeconds(expires.getSeconds() + 10);

  document.cookie = `userInfo=${encodedValue}; expires=${expires.toUTCString()}; path=/`;

  console.log(`Cookie [${encodedValue}] added.`);
}

document.addEventListener("DOMContentLoaded", () => {
  setUserInfoCookie("language", "en");
});
