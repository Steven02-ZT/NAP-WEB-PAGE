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
        
    </div>
</template>

<script>
  export default{
    mounted(){
      window.scrollTo(0, 0)
    }
  }
</script>