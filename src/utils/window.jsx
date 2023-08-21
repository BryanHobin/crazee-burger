export const RefreshPage = () => window.location.reload();


export const setLocalStorage = (key, value) => {
 localStorage.setItem(key, JSON.stringify(value))
}