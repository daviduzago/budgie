import I18n, {getLanguages} from "i18n-js"

import en from "./en"
import es from "./es"
import pt from "./pt"

I18n.fallbacks = true;

I18n.translations = {
    en,
    es,
    pt
};

getLanguages()
    .then(languages => {
        console.log(languages)
    }).catch(error => {
        console.log(error)
    });

export default I18n

