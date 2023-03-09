
<template>
    <div>
        <select @change="switchLenguage" className="bg-black text-orange-300" 
        style="border-radius: 10px; outline: none;">
            <option 
            v-for="slocale in supportedLocales"
            :key="`locale-${slocale}`"
            :value="slocale"
            :selected="locale === slocale">{{t(`locale.${slocale}`) }}</option>
        </select>
    </div>
</template>

<script>
    import { useI18n } from 'vue-i18n'
    import { useRouter } from 'vue-router'
    import Tr from '../locales/translation'
    
    export default{
        setup(){
            const {t, locale} = useI18n()

            const supportedLocales = Tr.supportedLocales

            const router = useRouter()

            const switchLenguage = async (event) =>{
                const newLocale = event.target.value
                await Tr.switchLenguage(newLocale)

                try{
                    await router.replace({params: {locale: newLocale}})
                }catch(e){
                    console.error(e)
                    router.push("/")
                }
            }

            return {t, locale, supportedLocales, switchLenguage}
        }
    }
</script>