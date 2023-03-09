import i18n from '../i18n'
import { nextTick } from 'vue'

const Trans = {
    get supportedLocales(){
        return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },

    get defaultLocale(){
        return import.meta.env.VITE_DEFAULT_LOCALE
    },

    get currentLocale(){
       return  i18n.global.locale.value
    },

    set currentLocale(newLocale){
        i18n.global.locale.value = newLocale
    },

    isLocalSupported(locale){
        return Trans.supportedLocales.includes(locale)
    },

    getUserLocale(){
        const locale = window.navigator.language ||
        window.navigator.userLanguage ||
        Trans.defaultLocale

        return {
            locale: locale,
            localeNoRegion: locale.split('-')[0]
        }
    },

    getPersistedLocale(){
        const persistedLocale = localStorage.getItem("user-locale")

        if(Trans.isLocalSupported(persistedLocale)){
            return persistedLocale
        }else{
            return null
        }
    },
    
    guessDefaultLocale(){
        const userPersistedLocale = Trans.getPersistedLocale()
        if(userPersistedLocale){
            return userPersistedLocale
        }

        const userPreferredLocale = Trans.getUserLocale()

        if(Trans.isLocalSupported(userPreferredLocale.localeNoRegion)){
            return userPreferredLocale.localaNoRegion
        }

        if(Trans.isLocalSupported(userPreferredLocale.locale)){
            return userPreferredLocale.locale
        }

        return Trans.defaultLocale
    },

    async switchLenguage(newLocale){
        await Trans.loadLocaleMessage(newLocale)
        Trans.currentLocale = newLocale
        document.querySelector("html").setAttribute("lang",newLocale)
        localStorage.setItem("user-locale", newLocale)
    },

    async loadLocaleMessage(locale){
        if(!i18n.global.availableLocales.includes(locale)){
            const messages = await import(`../locales/${locale}.json`)
            i18n.global.setLocaleMessage(locale,messages.default)
        }
        return nextTick()
    },

    async routerMiddleWare(to, _from, next ){
        const paramLocale = to.params.locale

        if(!Trans.isLocalSupported(paramLocale)){
            return next(Trans.guessDefaultLocale())
        }

        await Trans.switchLenguage(paramLocale)

        return next()
    },

    i18nRouter(to){
        return{
            ...to,
            params:{
                locale: Trans.currentLocale,
                ...to.params
            }
        }
    }
}

export default Trans