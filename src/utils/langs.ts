import * as ES from '../data/language-ES.json';
import * as EN from '../data/language-EN.json';

export {
    ES,
    EN
}

export interface Language{
    name: string,
    home: string,
    about: string,
    skills: string,
    projects: string,
    contact: string,  
}
