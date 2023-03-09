<script setup></script>

<template>
    <div class="frame general">
        <section className="bg-black">
            <div className="intro">
                <canvas id="hero-lightpass" />
            </div>
        </section>
        <section className="grid w-full lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="text-center grid justify-items-center sm:mb-32">
                <h1 className="w-5/6 flex pb-10 text-orange-300 font-medium justify-center"
                    style="font-size: var(--tittle);">
                    {{ $t("general.tittle1_g_section3") }}
                </h1>
                <ul style="font-size: var(--base); list-style: circle; color:#2a2a2a"
                    className="font-thin grid lg:w-4/6 md:w-5/6 sm:w-full justify-items-center">
                    <li className="p-3">{{ $t("general.boxAd1_g_section3") }}</li>
                    <li className="p-3">{{ $t("general.boxAd2_g_section3") }}</li>
                    <li className="p-3">{{ $t("general.boxAd3_g_section3") }}</li>
                    <li className="p-3">{{ $t("general.boxAd4_g_section3") }}</li>
                </ul>
            </div>
            <div className="text-center grid justify-items-center">
                <h1 className="w-5/6 flex pb-10 text-orange-300 font-medium justify-center"
                    style="font-size: var(--tittle);">
                    {{ $t("general.tittle2_g_section3") }}
                </h1>
                <ul style="font-size: var(--base); list-style: circle; color:#2a2a2a"
                    className="font-thin grid lg:w-4/6 md:w-5/6 sm:w-full justify-items-center">
                    <li className="p-3">{{ $t("general.napAd1_g_section3") }}</li>
                    <li className="p-3">{{ $t("general.napAd2_g_section3") }}</li>
                    <li className="p-3">{{ $t("general.napAd3_g_section3") }}</li>
                    <li className="p-3">{{ $t("general.napAd4_g_section3") }}</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        Herolightpass: function () {
            const intro = document.querySelector(".intro")
            const canvas = intro.querySelector('#hero-lightpass')

            const html = document.documentElement;
            const context = canvas.getContext("2d");

            const frameCount = 145;
            const currentFrame = index => (
                `../src/assets/img/apple/${index.toString().padStart(4, '0')}.jpg`
            )

            const preloadImages = () => {
                for (let i = 1; i < frameCount; i++) {
                    const img = new Image();
                    img.src = currentFrame(i);
                    console.log(currentFrame(i));
                }
            };

            const img = new Image()
            img.src = currentFrame(1);
            canvas.width = 1158;
            canvas.height = 770;
            img.onload = function () {
                context.drawImage(img, 0, 0);
            }

            const updateImage = index => {
                img.src = currentFrame(index);
                context.drawImage(img, 0, 0);
            }

            window.addEventListener('scroll', () => {
                const scrollTop = html.scrollTop;
                const maxScrollTop = html.scrollHeight - window.innerHeight;
                const scrollFraction = scrollTop / maxScrollTop;
                const frameIndex = Math.min(
                    frameCount - 1,
                    Math.ceil(scrollFraction * frameCount)
                );

                requestAnimationFrame(() => updateImage(frameIndex + 1))
            });

            preloadImages()

            //scenes
            const controller = new ScrollMagic.Controller();

            let scene = new ScrollMagic.Scene({
                duration: 3000,
                triggerElement: intro,
                triggerHook: 0
            })
                .setPin(intro)
                .addTo(controller)
        },
    },
    mounted() {
        this.Herolightpass();
        window.scrollTo(0, 0)
    }
}
</script>