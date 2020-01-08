import { AUTH_TOKEN } from '../constants'
const slugify = name => {
    return name.toLowerCase().replace(" ", "-")
}

export const saveToken = token => {
    localStorage.setItem(AUTH_TOKEN, token)
}
export const removeToken = () => localStorage.removeItem(AUTH_TOKEN)

export const getToken = () => localStorage.getItem(AUTH_TOKEN)

export const hasToken = () => !!getToken()
