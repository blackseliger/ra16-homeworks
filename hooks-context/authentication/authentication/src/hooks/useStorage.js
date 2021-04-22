import React, { useState, useEffect } from 'react';

export default function useStorage(storage, key, jsonfy = false) {
    const [value, setValue] = useState(
        jsonfy ? JSON.parse(storage.getItem(key)) : storage.getItem(key)
    );
    
    useEffect(() => {
        if (value === null) {
            storage.removeItem(key);
            return;
        }
       storage.setItem(key, jsonfy ? JSON.stringify(value) : value)
    }, [value, storage, key, jsonfy])

    return [value, setValue];
}