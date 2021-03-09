const CRED = "credentials";

export const saveUserCredentials = (credentials) => {
  localStorage.setItem(CRED, JSON.stringify(credentials));
};

export const saveToken = token => {
  localStorage.setItem("Token", token)
}

export const getToken = () => {
  return localStorage.getItem("Token")
}

export const getUserCredentials = () => {
  const credentials = localStorage.getItem(CRED);

  return JSON.parse(credentials);
};

export const clearCredentials = () => {
  localStorage.clear();
};
