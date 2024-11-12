export const LocalStorageKeys = {
    token: 'token'
};

export type StorageKeysType =
    (typeof LocalStorageKeys)[keyof typeof LocalStorageKeys];

export const getLocalStorage = <T>(key: StorageKeysType): T | null => {
    try {
        const jsonValue = localStorage.getItem(key);
        const value =
            jsonValue != null ? (JSON.parse(jsonValue as string) as T) : null;
        return value;
    } catch {
        return null;
    }
};

export const setLocalStorage = <T>(key: StorageKeysType, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key: StorageKeysType) => {
    localStorage.removeItem(key);
};
