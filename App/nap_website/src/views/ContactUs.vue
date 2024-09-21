<template>
    <div class="frame">
        <section id="p_section2" className="pt-32">
            <div className="flex" id="content_p_section2">
                <div className="w-6/12 flex flex-col gap-5 justify-center items-center">
                    <h1 className="text-center w-1/2 font-bold text-5xl bg-clip-text bg-gradient-to-r from-gray-700 to-orange-300 text-transparent">Ponte en contacto con nosotros!</h1>
                    <button className="bg-black text-white h-16 w-6/12 rounded-lg">
                        check availability</button>
                </div>
                <div className="flex items-center justify-center w-6/12">
                    <form action="" id="form_a_section2" className="w-7/12 shadow-md">
                        <h1 className="font-light text-orange-300 pt-5"
                            style="font-size: var(--subtittle);text-align: center;">Contact us</h1>
                        <ol className="grid justify-center">
                            <li className="grid pt-5 text-gray-500 text-base">
                                <label for="name" style="font-size: var(--base);">Name:</label>
                                <input type="text" name="name" id="name" className="mt-3"
                                    style="border: 1px solid #111; border-radius: 5px; height: 35px;">
                            </li>
                            <li className="grid pt-5 text-gray-500 text-base">
                                <label for="email" style="font-size: var(--base);">Email</label>
                                <input type="text" name="email" id="email" className="mt-3"
                                    style="border: 1px solid #454545; border-radius: 5px; height: 35px;">
                            </li>
                            <li className="grid pt-5 text-gray-500 text-base">
                                <label for="consult" style="font-size: var(--base);">Consult</label>
                                <textarea type="text" name="consult" id="consult" className="mt-3"
                                    style="border: 1px solid #454545; border-radius: 5px;" />
                            </li>
                            <li class="flex justify-center pb-5 pt-5">
                                <button className="bg-black text-white w-8/12 h-8 rounded-lg">Send</button>
                            </li>
                        </ol>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0, 0)
    }
}
</script>