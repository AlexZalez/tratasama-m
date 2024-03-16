<script setup>
  import section2 from './assets/image.jpg';
  import section1 from './assets/image-2.jpg';
  import { onMounted, ref } from 'vue';
  import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
  import { EffectCreative } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/effect-creative';

  const slider = ref(null);
  const defSwiper = (swiper)=>{
    slider.value = swiper;
  }

  const modules =[EffectCreative];

  onMounted(()=>{
    const sliderItems = document.querySelectorAll(".slider-item");
    const sliderMenu = document.getElementById("slider-menu");
    sliderMenu.style.setProperty("--left", `${0}px`);
    
    sliderItems.forEach((item)=>{
      item.addEventListener("click", ({target})=>{
        const {left}=target.getBoundingClientRect()
        sliderMenu.style.setProperty("--left", `${left-195}px`);
      })
    })
  })

 



</script>

<template>
  
    <header class="absolute w-full top-0 left-0 z-50 bg-black/10 ">
      <nav class="flex justify-center items-center gap-x-6 h-16 text-white font-alma font-bold">
        <div>SERVICIOS</div>
        <div>VEHICULOS</div>
        <div class="bg-white/50 w-32 aspect-square rounded-full flex justify-center items-center text-black font-semibold text-2xl pt-5">LOGO</div>
        <div>NOSOTROS</div>
        <div>CONTACTANOS</div>
      </nav>
    </header>

    <main>
      <section class="h-screen bg-cover" :style="{'background-image':`url(${section1})`}">
        <div class="flex items-center h-full p-12">
          
          <div class="flex justify-center text-center font-alma text-8xl text-white  w-1/2 ">
            
            <div class="bg-black/40 px-64 py-8 rounded-2xl">
              <div class="text-[16rem] font-extrabold">10</div>
              <div class="font-extrabold">AÑOS</div>
              <div class=" text-2xl w-64  mx-auto">TRANSPORTANDOTE CON </div>
              <div class="font-extrabold text-4xl text-center">CONFIANZA</div>
            </div>
          </div>

          <div class="font-alma text-6xl text-white w-1/2"></div>

        </div>
      </section>
      
      <div class=" shadow-[0px_10px_100px_100px_#000000] relative z-50"></div>

      <section :class="`flex h-screen bg-cover relative overflow-hidden ` ">
        <swiper
          @swiper="defSwiper"
          :grabCursor="false"
          :effect="'creative'"
          :creativeEffect="{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
          :modules="modules"
        >
          <swiper-slide class="">
            <img src="/src/assets/image.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="">
            <img class="w-screen" src="/src/assets/image-3.jpg" alt="">
          </swiper-slide>
          <swiper-slide class="">
            <img src="/src/assets/image-4.jpg" alt="">
          </swiper-slide>
        </swiper>
        <div class="w-full h-fit left-24  top-28 absolute z-50 ">
          <div class="flex flex-wrap gap-x-32 ml-24 font-alma text-white font-semibold ">
            <div class="slider-item cursor-pointer" @click="slider.slideTo(0, 600)">TRANSPORTE</div>
            <div class="slider-item cursor-pointer" @click="slider.slideTo(1, 600)">REPUESTOS</div>
            <div class="slider-item cursor-pointer" @click="slider.slideTo(2, 600)">TALLER</div>
            <div class="w-10/12 h-0.5 bg-slate-400 overflow-hidden relative">
              <div id="slider-menu" class=" absolute w-44 h-1 bg-white left-[var(--left)] top-0 transition-all duration-300 ease-in-out"></div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
</template>

<style>

  .swiper{
    @apply h-screen 
  }

  .swiper-slide{
    @apply  flex items-center justify-center text-6xl bg-blue-300 font-alma font-semibold
  }

</style>
