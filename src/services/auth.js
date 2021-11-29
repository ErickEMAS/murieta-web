export const isAuthenticated = () => localStorage.getItem("access_token") !== null;
export const getToken = () => localStorage.getItem("access_token");

export const login = data => {
    localStorage.setItem("access_token", JSON.stringify(data['access_token']));
    localStorage.setItem("me", JSON.stringify(data['me']));
};

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('me');
};