// flatten.mjs
import { readFileSync, writeFileSync } from 'fs';

function flatten(obj, prefix = '', result = {}) {
    for (const key in obj) {
        const newKey = prefix ? `${prefix}_${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            flatten(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
}

const en = JSON.parse(readFileSync('messages/en.json', 'utf8'));
const sv = JSON.parse(readFileSync('messages/se.json', 'utf8'));

writeFileSync('messages/en.json', JSON.stringify(flatten(en), null, 2));
writeFileSync('messages/se.json', JSON.stringify(flatten(sv), null, 2));