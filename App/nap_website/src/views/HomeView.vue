<script setup>
</script>

<template>
  <div className="frame">
    <!-------------------------------------------------------->
    <section id="home_video" className="bg-black justify-center ali">
      <div style="font-size: var(--tittle);height: 20%;"
        className="text-white w-full flex justify-center font-extrabold bg-black">
        <h1 style="display: flex;margin-top: auto;margin-bottom: auto;">
          <span className="text-orange-300">Box</span>&nbsp
          <span className="text-orange-300">O</span> ptical &nbsp
          <span className="text-orange-300">F</span> iber &nbsp
        </h1>
      </div>
      <div style="height:80%;">
        <video loop autoplay muted v-if="largeView">
          <source src="../assets/videos/home_large.mp4" type="video/mp4">
        </video>
        <video loop autoplay muted v-if="mediumView">
          <source src="../assets/videos/home_medium.mp4" type="video/mp4">
        </video>
        <video loop autoplay muted v-if="smallView">
          <source src="../assets/videos/home_small.mp4" type="video/mp4">
        </video>
      </div>
    </section>
    <!-------------------------------------------------------->
    <section id="section_2">
      <div className="w-full flex text-center" id="tittle_section2">
        <h1 style="font-size: var(--header);" className="mr-auto ml-auto font-extrabold">
          <ul>
            <li>
              <span className="">NEW</span> <span className="text-orange-300">NAP</span>
            </li>
            <li>
              <span className="text-orange-300">TECNO</span><span className="">LOGY</span>
            </li>
          </ul>
        </h1>
      </div>
      <div className="grid grid-cols-2 grid-cols-2" id="box_content_section2">
        <!--animation------------------------------------------------------------------>
        <div className="pt-10">
          <div id="menu_animation_nap">
            <ul>
              <li>
                <button @click="handleInputSlider(15, 'tittle 1')">part 1</button>
              </li>
              <li>
                <button @click="handleInputSlider(25, 'tittle 2')">part 2</button>
              </li>
              <li>
                <button @click="handleInputSlider(37, 'tittle 3')">part 3</button>
              </li>
            </ul>
          </div>
          <canvas id="canvas"></canvas>
          <div>
            <h1 id="tittle_canvas">BoxOFF</h1>
            <p id="text_canvas" class="w-5/6 text-center m-auto mt-10 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere vitae nunc nec sodales. Proin
              accumsan sollicitudin feugiat.</p>
          </div>
          <input type="range" min="1" max="37" step="1" value="1" id="slider" className="hidden invisible">
        </div>
        <!---------------------------------------------------------------------------->
        <div className="w-full" id="content_section2">
          <div className="text-center">
            <h1 id="tittle2_section2">{{ $t("home.tittle_h_section2") }}</h1>
          </div>
          <div id="text_section2" data-aos="fade-left" data-aos-easing="linear" className="m-5">
            <span className="block pb-5">{{ $t("home.text1_h_section2") }}</span>
            <span className="block pt-5">{{ $t("home.text2_h_section2") }}</span>
          </div>
          <div id="link_section2" data-aos="fade-up" data-aos-easing="linear" className="mt-10">
            <a href="#" className="text-orange-300">{{ $t("home.button_h_section2") }} &nbsp &nbsp &nbsp</a>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </div>
        </div>
      </div>
    </section>
    <!-------------------------------------------------------->
    <section id="section3" className="bg-white">
      <!----------------------------------------------------------->
      <div id="tittle_section3" data-aos="zoom-in">
        <h1 className="font-extrabold">
          Why <span className="text-orange-300">BoxOF</span> is smart?
        </h1>
      </div>
      <!-------------------------------------------------------------->
      <div className="lg:grid md:grid grid-rows-auto grid-cols-2 sm:block">
        <div className="texto pt-40" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <span>{{ $t("home.ventaja1_h") }}</span>
        </div>
        <div className="iHidden imagen pt-40" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img alt="" srcset="https://www.notebookcheck.net/typo3temp/_processed_/9/9/csm_x17_f4b4144e96.jpg">
        </div>
        <div className="imagen pt-60" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img srcset="https://m.media-amazon.com/images/I/510mEys6OlL.jpg" alt="">
        </div>
        <div className="texto pt-60" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <span>{{ $t("home.ventaja2_h") }}</span>
        </div>
        <div className="texto pt-60" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <span>{{ $t("home.ventaja3_h") }}</span>
        </div>
        <div className="imagen pt-60" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img alt=""
            srcset="https://images.pcel.com/mp/Computadoras-Laptops-DELL-A17SR-I7K16112860W10S-520-337160-pKoNRgQBmAUhYn9E.jpg">
        </div>
        <div className="iHidden imagen pt-60" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img alt=""
            srcset="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/alienware/laptop/dell-gen-laptops-alienware-x15nt-1440x1440.png">
        </div>
        <div className="texto pt-60" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <span>{{ $t("home.ventaja4_h") }}</span>
        </div>
        <div className="texto pt-60" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <span>{{ $t("home.ventaja5_h") }}</span>
        </div>
        <div className="imagen pt-60" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <img alt=""
            srcset="https://images.pcel.com/mp/Computadoras-Laptops-DELL-A17SR-I7K16112860W10S-520-337160-pKoNRgQBmAUhYn9E.jpg">
        </div>
      </div>
    </section>
    <!---------------------------------------------------------->
    <section id="section4">
      <div id="tittle_section4" className="font-extralight" data-aos="fade-up-right" data-aos-easing="linear"
        data-aos-duration="1000">
        <h1><i><strong>{{ $t("home.tittle_h_part1_section4") }} <br />
              {{ $t("home.tittle_h_part2_section4") }} <br />
              {{ $t("home.tittle_h_part3_section4") }}</strong></i></h1>
      </div>
      <div id="link_section4">
        <a href="#" className="text-orange-300 font-thin">{{ $t("home.button_h_section4") }} &nbsp &nbsp &nbsp</a>
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </div>
    </section>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  data: () => {
    return {
      largeView: true,
      mediumView: false,
      smallView: false,
      images: []
    };
  },
  methods: {
    View: function () {
      this.largeView = window.innerWidth > 1100;
      this.mediumView = window.innerWidth > 500 && window.innerWidth <= 1100;
      this.smallView = window.innerWidth <= 500;
    },

    loadImage: function (index) {
      const canvas = document.querySelector('#canvas')
      const ctx = canvas.getContext('2d')
      ctx.drawImage(this.images[index], 0, 0, canvas.width, canvas.height)
    },

    pageLoaded: function () {
      for (let i = 1; i <= 37; i += 1) {
        const number = i.toString().padStart(2, '00')
        const url = `src/assets/img/pokeball/${number}.jpg`
        const image = new Image()
        image.src = url
        image.addEventListener('load', () => {
          this.images[i] = image
          if (i === 1) {
            this.loadImage(i)
          }
        })
      }
    },

    handleInputSlider: function (index, tittle) {
      const slider = document.querySelector('#slider')
      const tittle_div = document.querySelector('#tittle_canvas')
      const text_canvas = document.querySelector('#text_canvas')
      let i = slider.value;
      var text = tittle;

      tittle_div.style.color = "white";
      text_canvas.style.color = "white";
      console.log(tittle_div)

      if (index > i) {
        setInterval(() => {
          if (i <= index) {
            this.loadImage(i)

            slider.value = i;
            i++;

            if (index === (i - 1)) {
              tittle_div.innerText = text;
              tittle_div.style.color = "black";
              text_canvas.style.color = "black";
            }
          }
        }, 50);
      } else {
        setInterval(() => {
          if (i >= index) {
            this.loadImage(i)

            slider.value = i;
            i--;

            if (index === (i + 1)) {
              tittle_div.innerText = text;
              tittle_div.style.color = "black";
              text_canvas.style.color = "black";
            }
          }
        }, 50);
      }
    }
  },
  created() {
    this.View();
    this.pageLoaded();
  },
  mounted(){
    window.scrollTo(0, 0)
  }
}
</script>