<script setup>
  import section1 from './assets/image-2.jpg';
  import repuestos from './assets/image-rep.jpg';
  import section3 from './assets/image-5.jpg';
  import section4 from './assets/image-6.jpg';
  import section5 from './assets/image-7.jpg';
  import back from './assets/image-back.jpg';
  import exp from './assets/image-exp.jpg';
  import tra from './assets/image-tra.jpg';
  import logo1 from "./assets/clientes/Logo-1.png";
  import logo2 from "./assets/clientes/Logo-2.png";
  import logo3 from "./assets/clientes/Logo-3.png";
  import logo4 from "./assets/clientes/Logo-4.png";
  import CButton from './components/ContactButton.vue';
  import { onMounted, ref } from 'vue';
  import {Swiper} from 'swiper';
  import 'swiper/css';
  
  
  
  var slider = ref(null);
  const sec1ON = ref(null);
  const sec2ON = ref(null);
  const sec3ON = ref(null);
  const sec3ON_text = ref(null);

  function anima(entries) {
    entries.forEach((entry)=>{
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('section-1')) sec1ON.value = true;
        if (entry.target.classList.contains('section-2')) sec2ON.value = true;
        if (entry.target.classList.contains('on-section-3')) sec3ON.value = true;
        if (entry.target.classList.contains('on-section-3-text')) sec3ON_text.value = true;
        
      }

    })  
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.50,
  }
  
  
  
   
  
  onMounted(()=>{
    const observer = new IntersectionObserver(anima, options);

    /* SECTION 1 */
    let section1 = document.querySelector('.section-1');
    observer.observe(section1);
    

    /* SECTION 2 */
    const section2 = document.querySelector('.section-2');
    observer.observe(section2);

    /* SECTION 3 */
    const section3 = document.querySelector('.on-section-3');
    observer.observe(section3);
    const section3_text = document.querySelector('.on-section-3-text');
    observer.observe(section3_text);
    

    var swiper = new Swiper('.mySwiper',{
      on: {
        init: function (e) {
          slider.value = e;
        },
      },
    });
    const sliderItems = document.querySelectorAll(".slider-item");
    const sliderMenu = document.getElementById("slider-menu");

    sliderMenu.style.setProperty("--left", `${sliderItems[0].getBoundingClientRect().left}px`);    
    sliderItems.forEach((item)=>{
      item.addEventListener("click", ({target})=>{
        const {left}=target.getBoundingClientRect()
        sliderMenu.style.setProperty("--left", `${left}px`);
      })
    });

    
  });

 



</script>

<template>
  
    <header class="absolute w-full top-0 left-0 z-50 bg-black/10 tracking-widest">
      <nav class="flex md:justify-center justify-between items-center gap-x-6 h-16 text-white font-gus font-bold">
        <div class="md:block hidden" >SERVICIOS</div>
        <div class="md:block hidden" >VEHICULOS</div>
        <div class="bg-white/50 w-32 aspect-square rounded-full flex justify-center items-center text-black font-semibold text-2xl pt-5">LOGO</div>
        <div class="md:block hidden">NOSOTROS</div>
        <div class="md:block hidden">CONTACTANOS</div>
        <div class="md:hidden block px-4">CERRAR</div>
      </nav>
    </header>

    <main class="overflow-hidden">
      <section class="section-1 " :class="(!sec1ON) ? 'scale-110': '' " :style="{'background-image':`url(${section1})`}">
        <div class="h-screen w-full -300">
          
          <h1 class="px-16 pt-64 text-white font-gus md:text-7xl text-4xl font-extrabold ">
            <div class="bg-black/10 backdrop-blur-sm p-4 rounded-2xl" >
              <div class="text-center "> TRANSPORTE DE PERSONAL </div>
              <div class="text-center "> & </div>
              <div class="text-center "> TAXI EJECUTIVO</div>
            </div>
          </h1>
          

          <!-- <div class="font-alma text-6xl  w-1/2"></div> -->

        </div>

        <div class="shadow-[0px_0px_100px_100px] w-full "></div>
      </section>

      
      <section class="section-2" >
        <div class="swiper mySwiper" :class="(!sec2ON) ? 'scale-110': ''">

          <div class="swiper-wrapper ">
            <div class="swiper-slide">
              <img src="/src/assets/image-tra.jpg" alt="">
              <div class="swiperLetters absolute text-6xl font-gus font-semibold text-white  w-full container mb-[10rem]">TAXI EJECUTIVO A NIVEL NACIONAL</div>
            </div>
            <div class="swiper-slide">
              <img src="/src/assets/image-rep.jpg" alt="">
              <div class="swiperLetters absolute text-8xl font-gus font-semibold w-full container mb-[10rem]">REPUESTOS</div>
            </div>
            <div class="swiper-slide">
              <div class="swiperLetters absolute text-6xl font-gus font-semibold text-white w-full container mb-[10rem] ">MECANICA PESADA <span class="block">Y ESPECIALIZADA</span></div>
              <img src="/src/assets/image-tall.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="w-full h-[110vh] left-0  top-0 absolute z-50 ">
        <div class="shadow-[0px_0px_150px_180px] relative -z-10 w-full"></div>

          <div class="flex flex-wrap  w-full mt-44 font-alma tracking-wider text-white font-semibold overflow-hidden">
            <div class="w-2/12 "></div>
            <div class="pr-16  cursor-pointer border-b-2 border-slate-400" @click="slider.slideTo(0, 600)">
              <div class="slider-item">TRANSPORTE</div>
            </div>
            <div class="px-16  cursor-pointer border-b-2 border-slate-400" @click="slider.slideTo(1, 600)">
              <div class="slider-item">REPUESTOS</div>
            </div>
            <div class="px-16 flex-auto  cursor-pointer border-b-2 border-slate-400" @click="slider.slideTo(2, 600)">
              <div class="slider-item">TALLER</div>
            </div>
            <div class="w-screen h-0.5  overflow-hidden relative -top-0.5 ">
              <div id="slider-menu" class=" absolute w-44 h-1 bg-white left-[var(--left)] top-0 transition-all duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </section>

      
      <div class="shadow-[0px_0px_30px_100px] relative z-50 "></div>
      
      <section class="section-3">

        <div class="flex justify-between container mx-auto "> 
          <h2 class="tracking-wide leading-none text-2xl font-gus">SOMOS TU <span class="block">MEJOR OPCIÓN</span></h2>
          
          <div class="text-[8rem] font-gus leading-[1.2] font-extrabold ml-8 on-section-3-text ">
            <div class=" overflow-hidden"><span class="block transition-transform duration-500" :class="(!sec3ON_text) ? '-translate-y-full' :''">10 AÑOS DE </span></div>
            <div class=" overflow-hidden"><span class="block ml-28 -mt-6 transition-transform duration-500" :class="(!sec3ON_text) ? 'translate-y-full' :''">EXPERIENCIA</span></div>
          </div>
        </div>

        <div class="flex justify-between mt-16 on-section-3">
          <div class="flex items w-96 ">
            <p class=" text-2xl">
              Estamos en el ramo del Transporte de Personal y 
              Servicio de Taxi Ejecutivo a Nivel Nacional, con un Plus en Mecánica Especializada y 
              Mecánica Pesada, con el firme propósito de otorgar a nuestros clientes las mejores 
              alternativas en calidad y servicio. 
            </p>

            <div class=""></div>

          </div>

          <div class="relative w-1/2 mr-32 overflow-hidden">
            <img :src="exp" alt="">
            <div class="w-[120%] h-[150%] bg-black absolute -top-24 -left-16 -rotate-12 transition-transform duration-1000 delay-200 " :class="(sec3ON) ? 'translate-y-full':'' " >  </div>
          </div >
        </div>

        <div class="pt-44">
          <h2 class="text-4xl font-semibold font-gus tracking-wider">Nuestros clientes:</h2>
          <div class="flex justify-around items-center w-full gap-x-16 relative  h-56 ">

            <div class="relative w-3/12  ">
              <img :src="logo1" class="" alt="">
            </div>
            <div class="relative w-3/12">
              <img :src="logo2" class="" alt="">
            </div>
            <div class="relative w-3/12">
              <img :src="logo3"  class="" alt="">
            </div>
            <div class="relative w-2/12">
              <img :src="logo4" class="" alt="">
            </div>

          </div>
        </div>

      </section>

      <section class=" pt-24 px-36 pb-36   relative z-50">

        <div class="flex justify-end container mx-auto "> 
          <h2 class="tracking-wide leading-none text-2xl font-gus">PREPARADOS PARA<span class="block">LA ADVERSIDAD</span></h2>
        </div>

        <div class="flex justify-center items-center mt-16">
          <img :src="section4" class="w-5/12 mr-32" alt="">
          
          <div class="flex flex-wrap justify-end">
            <h2 class="w-full font-gus text-7xl font-medium">COMBUSTIBLE <span class="block pl-24">PARA NUESTRA</span> FLOTA</h2>
            <div class="block mt-36 mr-32 px-32">
              <p class="text-2xl">
                Contamos con la debida permisología para el almacenamiento 
                y el abastecimiento de gasoil de nuestras unidades
              </p>

              <CButton class="mt-16 rounded-lg">
                CONTACTANOS
              </CButton>
              
            </div>


          </div>
        </div>

        <div class="flex justify-center items-center mt-96">
          <div class="flex flex-wrap justify-end">
            <h2 class="w-full font-gus text-7xl font-medium">UNIDADES <span class="block pl-24">PREPARADAS</span> Y LISTAS</h2>
            <div class="block mt-36 mx-auto px-24">
              <p class=" text-2xl ">
                Nuestras Unidades están en condiciones óptimas y seguras, las mismas 
                son sometidas a constante mantenimiento. Además, mantenemos unidades 
                en BackOffice para solventar eficazmente cualquier imprevisto.
              </p>

              <CButton class="mt-16 rounded-lg">
                CONTACTANOS
              </CButton>
              
            </div>


          </div>
          <img :src="back" class="w-5/12 mr-32 " alt="">
          
        </div>

        

        

      </section>

      <footer class="pt-16 container mx-auto px-12">
        <div class="flex flex-wrap border-y border-slate-400 py-16">

          <div class="flex flex-col text-8xl font-gus font-semibold  leading-none p-2 ">
            <div class="">TRA</div> 
            <div class="">TA</div>
            <div class="flex items-baseline">SAMA <span class="text-2xl ml-3">c.a.</span></div>
          </div>

          <div class="flex justify-around font-gus leading-none p-2 flex-auto">
            <div class="flex-col space-y-8 pt-8">
              <div class="">SERVICIOS</div> 
              <div class="">VEHICULOS</div>
              <div class="">NOSOTROS</div>
              <div class="">CONTACTANOS</div>
            </div>
            <div></div>
          </div>
          
          <div>

          </div>
        </div>
        <div class="py-8 ">
          <div class="text-sm">Copyright © since 2014 – Tratasama C.A.</div>

        </div>
      </footer>
      

    </main>
</template>

<style>

  .section-1{
    @apply bg-cover bg-bottom transition-transform duration-500 delay-500 overflow-hidden
  }

  .section-2{
    @apply flex h-[110vh] relative overflow-hidden
  }

  .section-3{
    @apply pt-24 bg-black px-36 pb-36 text-white  relative z-50
  }

  .mySwiper{
    @apply transition-transform duration-500 delay-500
  }

  .swiper{
    @apply h-full 
  }

  .swiper-slide{
    @apply w-full flex items-end justify-center relative 
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiperLetters{
    @apply translate-y-40 transition-all duration-700 delay-500 tracking-tighter
  }

  .swiper-slide-active .swiperLetters{
    @apply translate-y-0 tracking-wider
  }

</style>
