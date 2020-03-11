import { useState } from 'react';

export const useLocalStorage = (key,initialValue) => {
    const [storedValue, setStoredValue] = useState( () => {
        //get local storage using key
        const item = window.localStorage.getItem(key);
        // if localsstorage is undefined, return initial value. Otherwise parse and return stored json
        return item ? JSON.parse(item) : initialValue;
    });
    
   //setter function
    const setValue = value => {
    //save the state
    setStoredValue(value);
    //save it to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
};
return [storedValue, setValue];
};//end useLocalStorage

export default useLocalStorage;

