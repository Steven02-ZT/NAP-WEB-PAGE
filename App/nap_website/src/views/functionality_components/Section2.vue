<template>
    <section id="section2_f" className="relative fixed">
        <div class="hero">
            <div id="info_section1_f">
                <h1 class="tittle_info_section1_f loader span font-thin">
                    <span class="m">H</span>
                    <span class="m">O</span>
                    <span class="m">W</span>
                    <span class="m">&nbsp;</span>
                    <span class="m">D</span>
                    <span class="m">O</span>
                    <span class="m">E</span>
                    <span class="m">S</span>
                    <span class="m">&nbsp;</span>
                    <span class="m">T</span>
                    <span class="m">H</span>
                    <span class="m">I</span>
                    <span class="m">S</span>
                    <span class="m">&nbsp;</span>
                    <span class="m">W</span>
                    <span class="m">O</span>
                    <span class="m">R</span>
                    <span class="m">K</span>
                    <span class="m">?</span>
                </h1>
            </div>
            <!--OLT-->
            <div class="olt-1"></div>
            <div class="olt-2"></div>
            <div class="olt-3"></div>
            <div class="olt-4"></div>
            <div class="olt-5"></div>
            <!--ODF-->
            <div class="odf-1"></div>
            <div class="odf-2"></div>
            <div class="odf-3"></div>
            <div class="odf-4"/>
            <!--houses-->
            <div class="parallax-layer layer-6"></div>
            <div class="parallax-layer layer-5"></div>
            <div class="parallax-layer layer-4"></div>
            <div class="parallax-layer bike-1"></div>
            <div class="parallax-layer bike-2"></div>
            <div class="parallax-layer layer-3"></div>
            <div class="parallax-layer layer-2"></div>
            <div class="parallax-layer layer-1"></div>
        </div>
        <div class="scrollElement"></div>
    </section>
</template>

<script>
export default {
    mounted() {
        this.OdfSection()
    },
    methods: {
        OdfSection: () => {
            let speed = 100;
            /*initial scene*/
            let init_scene = gsap.timeline();
            ScrollTrigger.create({
                animation: init_scene,
                trigger: '.scrollElement',
                start: 'top top',
                end: '20% 100%',
                scrub: 4
            })
            init_scene.to('#info_section1_f', { y: 1.7 * speed, opacity: 0 }, 0.03)
            /*scene olt*/
            let scene_olt = gsap.timeline();
            ScrollTrigger.create({
                animation: scene_olt,
                trigger: '.scrollElement',
                start: '20% top',
                end: "40% 100%",
                scrub: 4,
            })
            //scene_olt.fromTo('.back1', { y: 1000}, { y: 0 * speed }, 0.03)
            scene_olt.fromTo('.olt-1', { y: 500}, { y: 0 * speed }, 0.03)
            scene_olt.fromTo('.olt-2', {y: 400}, { y: 0 * speed }, 0.03)
            scene_olt.fromTo('.olt-3', { y: 600}, { y: 0 * speed }, 0.03)
            scene_olt.fromTo('.olt-4', { y: 300}, { y: 0 * speed }, 0.03)
            scene_olt.fromTo('.olt-5', { y: -500}, { y: 0 * speed }, 0.03)

            /* scene odf*/
            let scene_odf = gsap.timeline();
            ScrollTrigger.create({
                animation: scene_odf,
                trigger: '.scrollElement',
                start: '40% top',
                end: "60% 100%",
                scrub: 4
            })
            //scene_odf.fromTo('.back2', { y: 1000 }, { y: 0 * speed, }, 0.03)
            scene_odf.fromTo('.odf-1', { y: 500 }, { y: 0 * speed, }, 0.03)
            scene_odf.fromTo('.odf-2', { y: 600, zIndex: -1 }, { y: 0 * speed, zIndex: 1 }, 0.03)
            scene_odf.fromTo('.odf-3', { y: 600 }, { y: 0 * speed }, 0.03)
            scene_odf.fromTo('.odf-4', { y: 400 }, { y: 0 * speed }, 0.03)

            /*scene houses*/

            let scene2 = gsap.timeline();
            ScrollTrigger.create({
                animation: scene2,
                trigger: '.scrollElement',
                start: '60% top',
                end: '80% 100%',
                scrub: 4,
            })
            //scene2.fromTo('.back3', { y: 1000 }, { y: 0 * speed, }, 0.03)
            scene2.fromTo('.layer-1', { y: 500, opacity: 0, zIndex: 2 }, { y: 0, opacity: 1 }, 0)
            scene2.fromTo('.layer-2', { y: 500, zIndex: 2 }, { y: 0 }, 0.1)
            scene2.fromTo('.layer-3', { y: 700, zIndex: 2 }, { y: 0 }, 0.1)
            scene2.fromTo('.layer-4', { y: 700, zIndex: 2 }, { y: 0 }, 0.2)
            scene2.fromTo('.layer-5', { y: 800, zIndex: 2 }, { y: 0 }, 0.3)
            scene2.fromTo('.layer-6', { y: 900, zIndex: 2 }, { y: 0 }, 0.3)
            scene2.fromTo('.bike-1', { y: 800, zIndex: 2 }, { y: 0 }, 0.3)
            scene2.fromTo('.bike-2', { y: 900, zIndex: 2 }, { y: 0 }, 0.3)
        }
    }
}
</script>