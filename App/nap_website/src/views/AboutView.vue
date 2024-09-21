<template>
    <div class="frame">
        <section id="a_section_1">
            <div id="back_a_section1" className="relative">
                <div className="absolute w-full h-3/6 bg-black" id="back1"></div>
                <div style=" 
                    position: absolute;
                    top: 5rem;
                    right: 0;
                    height: 200px;
                    width: 100px;
                    border-radius: 150px 0 0 150px ;
                    background-color: black;">
                </div>
                <div style=" 
                    position: absolute;
                    top: calc(55%);
                    right: 0;
                    height: 300px;
                    width: 150px;
                    border-radius: 250px 0 0 250px ;
                    background-color: #4545;">
                </div>
            </div>
            <div id="info_a_section1" className="absolute grid grid-cols-2 grid-rows-2" style="top: 0;">
                <img alt="" srcset="../assets/img/logo.png" className="lg:w-5/12 md:w-8/12" id="logo_a_section1">
                <h1 className="text-orange-300 font-thin 4/12 pt-32 text-center w-10/12" id="tittle_a_section1" 
                  style="font-size: var(--jumbo);">
                    About us?
                </h1>
                <img id="img_a_section_1" alt="" srcset="../assets/img/scar.png" style="z-index: -1;" className="w-10/12 pl-20 pt-10">
                <div className="grid w-full" id="info_a_section_1">
                    <p className="text-center block w-10/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent tristique lorem ut eros aliquet,
                        non aliquet enim consectetur. Vivamus vitae gravida quam. Vivamus vel orci at metus porttitor
                        ullamcorper eu in justo. Integer viverra nisl id dictum dapibus. Vestibulum urna justo, dignissim
                        nec viverra ut, iaculis vitae est. Cras vehicula sodales quam, id semper est ornare varius. Class
                        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer
                        condimentum velit eget mi hendrerit, eu dictum urna eleifend. Fusce condimentum enim ac urna
                        porttitor pharetra. Ut in pellentesque tellus. Quisque nec faucibus nisi. Quisque vitae ligula non
                        neque commodo consequat eget sit amet nisi.
                    </p>
                    <button className="h-2/6 text-center w-10/12" id="link1_a_section1">
                        <a href="http://" className="text-orange-300 "
                            style="border-bottom: 1px solid orange; font-size: var(--text);">
                            Go to website
                            <font-awesome-icon icon="fa-solid fa-arrow-right" />
                        </a>
                    </button>
                </div>
            </div>
        </section>
        <section id="p_section2" className="pt-32">
      <div className="flex" id="content_p_section2">
        <div className="w-6/12 flex justify-center items-center">
          <button className="bg-black text-white h-16 w-6/12 rounded-lg">
            check availability</button>
        </div>
        <div className="flex items-center justify-center w-6/12">
          <form action="" id="form_a_section2" className="w-7/12 shadow-md">
            <h1 className="font-light text-orange-300 pt-5" style="font-size: var(--subtittle);text-align: center;">Contact us</h1>
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
                style="border: 1px solid #454545; border-radius: 5px;"/>
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
  export default{
    mounted(){
      window.scrollTo(0, 0)
    }
  }
</script>