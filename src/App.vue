<script setup>
  import tr_logo1 from './assets/logo/Logo_300_B.png';
  import tr_logo2 from './assets/logo/Logo_400.png';
  import tr_logo2B from './assets/logo/Logo_400_B.png';
  import tr_logo3 from './assets/logo/Logo_100_B.png';
  import section1 from './assets/section_1/image-section-1.jpg';
  import serv1 from './assets/section_2/serv-1.jpg';
  import serv2 from './assets/section_2/serv-2.jpg';
  import serv3 from './assets/section_2/serv-3.jpg';
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

  const servicios = [
    {name: 'TRANSPORTE PRIVADO', img: serv3},
    {name:'REPUESTOS', img:serv1},
   {name:'TALLER DE MECANICA PESADA', img:serv2}]
  
  
  
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
    /* const sliderItems = document.querySelectorAll(".slider-item");
    const sliderMenu = document.getElementById("slider-menu"); */

    /* sliderMenu.style.setProperty("--left", `${sliderItems[0].getBoundingClientRect().left}px`);    
    sliderItems.forEach((item)=>{
      item.addEventListener("click", ({target})=>{
        const {left}=target.getBoundingClientRect()
        sliderMenu.style.setProperty("--left", `${left}px`);
      })
    }); */

    
  });

 



</script>

<template>
  
    <header class="absolute w-full top-0 left-0 z-50 mx-auto">
      <nav class="w-full flex justify-between items-center px-8 pt-8 text-white  font-mon font-bold ">
        
        <div class="w-72 flex justify-between ">
          <img class="lg:hidden w-24" :src="tr_logo1" alt="">
          <img class="lg:block hidden " :src="tr_logo2" alt="">
        </div>

        <div class="lg:flex hidden justify-center items-center w-6/12  ">
          <ul class="flex space-x-6 tracking-wider bg-primary/40 px-10 py-2 rounded-full">
            <li class="" >SERVICIOS</li>
            <li class="" >VEHICULOS</li>
            <li class="">NOSOTROS</li>
          </ul>
        </div>

        <div class="sm:flex justify-end hidden lg:w-2/12">
          <CButton color1="white" color2="primary" >CONTACTANOS</CButton>
          <div class="hidden px-4">CERRAR</div>
        </div> 
      </nav>
    </header>

    <main class="overflow-hidden">
      <section class="section-1 h-screen" :class="(!sec1ON) ? 'scale-110': '' " >
        <div class="h-full w-full bg-cover bg-right" :style="{'background-image':`url(${section1})`}">
          

          <div class="w-full h-full flex items-end justify-center  bg-primary/20 ">
            
            <div class="w-full ">
              <div class="flex items-center justify-center bg-white font-mon md:w-[26rem] h-20 p-2 mx-4 md:mx-auto mb-16 space-x-2 rounded-full ">
                
                <div class="flex items-center justify-center font-extrabold text-xl w-1/2 h-full rounded-full bg-primary text-white">
                  CONÓCENOS</div>
                
                <div class="
                  flex items-center justify-center 
                  px-1 w-1/2 h-full 
                  font-extrabold text-lg 
                  rounded-full border-4 border-secondary text-secondary"
                >
                  CONTRÁTANOS
                </div>

              </div>
  
              <div class="flex items-center w-full md:h-12 h-20 overflow-hidden bg-secondary relative text-white ">
                <div class="flex flex-nowrap text-nowrap justify-around font-synr font-bold tracking-wider space-x-3 w-full md:text-base text-xs">
                  <div>TAXI EJECUTIVO</div>
                  <div>MECANICA PESADA</div>
                  <div>TRANSPORTE DE PERSONAL</div>
                  <div>MECANICA ESPECIALIZADA</div>
                  <div>REPUESTOS</div>
                  <div>LOGISTICA A NIVEL NACIONAL</div>
                </div>
              </div>

            </div>

          </div>         

        </div>
        

      </section>

      <section class="bg-white container mx-auto">
        <div class="flex flex-wrap py-24 space-x-24">
        
          <div class=" w-[35rem] h-[42rem] bg-primary rounded-3xl">
            <div class="pt-8 px-6">
              <img :src="tr_logo3" alt="tratasama_logo_3">
            </div>

            <div class="">
              <div class=" text-[28rem] text-center leading-none font-mon font-bold   text-white ">10</div>
              <div class="text-center text-8xl font-mon font-bold text-white">AÑOS</div>
            </div>
          </div>

          <div class="flex-1 space-y-8" >
            
            <div class="">
              <h2 class="mt-3 font-mon text-4xl font-bold text-secondary">
                <span class="bg-primary/30 rounded-2xl  p-3">
                  Nosotros
                </span>
              </h2>
              
            </div>

            <div class="">
              <div class="w-96 "><img :src="tr_logo2B" alt=""></div>
              <p class="py-16 max-w-lg text-tr-light font-mon font-semibold">
                Estamos en el ramo del Transporte de Personal y Servicio de Taxi Ejecutivo a Nivel Nacional,
                con un Plus en Mecánica Especializada y Mecánica Pesada, con el firme propósito de otorgar a
                nuestros clientes las mejores alternativas en calidad y servicio.
              </p>
              <div class="h-full flex items-end ">
                <CButton color1="primary" color2="white" >CONTACTANOS</CButton>
              </div>
            </div>

            
          </div>
          
          
          
        </div>

        
      </section>

      <section class=" bg-white ">
        <div class="flex w-full justify-center container mx-auto">
          <div class="">
            <h2 class="font-mon text-4xl font-bold  text-secondary">
              <span class="bg-primary/30 p-3  rounded-2xl">
                Clientes
              </span>
            </h2>
            
          </div>
        </div>

        <div class="flex flex-1  items-center justify-center md:gap-x-16 gap-x-2 p-16">

          <div class="relative md:w-3/12 ">
            <img :src="logo1" class="" alt="">
          </div>
          <div class="relative md:w-96 ">
            <img :src="logo2" class="" alt="">
          </div>
          <div class="relative md:w-3/12 ">
            <img :src="logo3"  class="" alt="">
          </div>
          <div class="relative md:w-2/12 ">
            <img :src="logo4" class="" alt="">
          </div>
          

        </div>
      </section>

      
      <section class="section-2" >
        <div class="container mx-auto py-24 ">
          <div class="mb-16">
            <h2 class="font-mon text-4xl font-bold  before:text-white text-secondary ">
              <span class="bg-white/30 p-3 rounded-2xl">
                Servicios
              </span>
            </h2>
            
          </div>

          <div class="space-y-44">
            <div class="flex p-6 shadow-2xl shadow-secondary bg-gradient-to-tr from-white/20 to-secondary/30 rounded-xl">
              <div class="flex flex-[30%] rounded-xl overflow-hidden">
                <img :src="servicios[1].img" alt="" class="w-full aspect-square " >
  
              </div>
              
              <div class="p-3 flex flex-[50%] flex-col ">
                <div class="">
                  <h3 class="text-center font-mon font-bold text-4xl text-white">
                    <span class="p-3 ">TRANSPORTE PRIVADO</span>
                  </h3>
                </div>

                <div class="h-full flex mt-16 justify-center items-center gap-6 font-mon font-bold">

                  <div class="service-card">
                    <div class="w-fit">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-16 fill-white" viewBox="0 0 15 15" version="1.1" id="fuel">
                        <path d="M13,6L13,6v5.5c0,0.2761-0.2239,0.5-0.5,0.5S12,11.7761,12,11.5v-2C12,8.6716,11.3284,8,10.5,8H9V2c0-0.5523-0.4477-1-1-1H2&#10;&#9;C1.4477,1,1,1.4477,1,2v11c0,0.5523,0.4477,1,1,1h6c0.5523,0,1-0.4477,1-1V9h1.5C10.7761,9,11,9.2239,11,9.5v2&#10;&#9;c0,0.8284,0.6716,1.5,1.5,1.5s1.5-0.6716,1.5-1.5V5c0-0.5523-0.4477-1-1-1l0,0V2.49C12.9946,2.2178,12.7723,1.9999,12.5,2&#10;&#9;c-0.2816,0.0047-0.5062,0.2367-0.5015,0.5184C11.9987,2.5289,11.9992,2.5395,12,2.55V5C12,5.5523,12.4477,6,13,6s1-0.4477,1-1&#10;&#9;s-0.4477-1-1-1 M8,6.5C8,6.7761,7.7761,7,7.5,7h-5C2.2239,7,2,6.7761,2,6.5v-3C2,3.2239,2.2239,3,2.5,3h5C7.7761,3,8,3.2239,8,3.5&#10;&#9;V6.5z"/>
                      </svg>
                    </div>
                    Contamos con nuestro propio almacenamiento de gasoil
                  </div>

                  <div class="service-card">
                    <div class="w-fit mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-16 fill-white" viewBox="0 0 512 512"><path d="M77.34 58.23C-10.59 97.68 25.84 165.2 35.37 226.7l82.33 6.6 25.6 29.9 68.2-2.7c-26.2 76.7 6.8 128.3 25.6 185.9 54.7 22.6 92.1-11.5 131.3-39.3l-57.7-83.9 71.9 26.7c29.3-12.5 65.7-15.3 81.8-46.3l-16.9-61.1 44.7-58.9c-31.1-41-75.6-62.7-122.6-80.7l-183.8 2.2c.5-25.81-16.2-50.17-69.5-30.05-25.19 9.48-36.81 11.6-41.65 9.68 10.91 20.87 26.55 53.17 14.71 69.97-6.68 9.6-22.56 10.2-34.91-3.8-16.74-18.9 6.74-51.78 17.28-71.11.17-5.59 5.22-14.38 5.61-21.56z"/></svg>
                    </div>
                    Realizamos viajes a nivel nacional
                  </div>

                  <div class="service-card">
                    <div class="w-fit mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-16 stroke-white " viewBox="0 0 24 24" fill="none">
                        <path d="M5 6V15.8C5 16.9201 5 17.4802 5.21799 17.908C5.40973 18.2843 5.71569 18.5903 6.09202 18.782C6.51984 19 7.07989 19 8.2 19H15.8C16.9201 19 17.4802 19 17.908 18.782C18.2843 18.5903 18.5903 18.2843 18.782 17.908C19 17.4802 19 16.9201 19 15.8V6M5 6C5 6 5 3 12 3C19 3 19 6 19 6M5 6H19M5 13H19M17 21V19M7 21V19M8 16H8.01M16 16H16.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    Mantenemos unidades en BackOffice para solventar cualquier imprevisto
                  </div>
                </div>
              </div>
            </div>
  
            <div class="flex bg-white">
              <div class="p-3 flex-1">
                <h3 class="font-synb font-semibold text-4xl">REPUESTOS</h3>
              </div>
              
              <div class="relative rounded-2xl overflow-hidden 
                after:content-[''] after:w-full after:h-full after:bg-primary/40 after:left-0 after:top-0 after:absolute after:z-50">
                <img :src="servicios[0].img" alt="" class="w-[32rem] aspect-square " >
              </div>
            </div>
  
            <div class="flex bg-white ">
              <div class="relative rounded-2xl overflow-hidden 
                after:content-[''] after:w-full after:h-full after:bg-primary/40 after:left-0 after:top-0 after:absolute after:z-50">
                <img :src="servicios[2].img" alt="" class="w-[32rem] aspect-square " >
  
              </div>
              
              <div class="p-3">
                <h3 class="font-synb font-semibold text-4xl">TALLER MECANICO</h3>
              </div>
            </div>

          </div>
        </div>
        
        
      </section>

      

     

      <section class="py-8 bg-secondary">
        <div class="container mx-auto ">
          

          <div class="flex md:flex-nowrap flex-wrap md:py-44 md:space-x-24">
        
            

            <div class="flex-[40%] space-y-8 " >
              
              <div class="">
                <h2 class="font-mon text-4xl font-bold  before:text-primary text-white">
                  <span class="p-3 rounded-2xl bg-primary/40">
                    Contáctanos
                  </span>
                </h2>

              </div>

              <div class="">
                <p class="py-16 max-w-lg text-tr-light font-mon text-white">
                  Estamos en el ramo del Transporte de Personal y Servicio de Taxi Ejecutivo a Nivel Nacional,
                  con un Plus en Mecánica Especializada y Mecánica Pesada, con el firme propósito de otorgar a
                  nuestros clientes las mejores alternativas en calidad y servicio.
                </p>
                <div class="h-full flex flex-col text-white space-y-6 [&>*]:items-center [&>*]:gap-3 font-mon font-semibold">
                  <div class="flex">
                    <div class="flex w-16 p-2 rounded-full aspect-square bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-full stroke-primary fill-primary" viewBox="0 0 24 24" >
                        <path d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z" />
                      </svg>
                    </div>
                    0424-4735063
                  </div>
                  <div class="flex ">
                    <div class="w-16 rounded-full aspect-square bg-white flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-8/12 fill-primary stroke-primary stroke-2" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve">
                        <g xmlns="http://www.w3.org/2000/svg">
                          <path d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345   c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345   C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203   c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958   c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064   c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571   c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637   L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136   C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435   C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959   l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959   C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8   V385.92z"/>
                        </g>
                        </svg>
                    </div>
                    tratasama@gmail.com
                  </div>
                  <div class="flex ">
                    <div class="w-16 rounded-full aspect-square bg-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary w-9/12" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1"><title/><path d="M150,34.94c-27.5-27.5-72-27.5-100,0a70.49,70.49,0,0,0-8,90l33.5,48a30.4,30.4,0,0,0,49.5,0l33.5-48A71.18,71.18,0,0,0,150,34.94Zm-8.5,78.5-33.5,48a10.31,10.31,0,0,1-16.5,0l-33.5-48a50.14,50.14,0,0,1,6-64.5c20-20,52-20,71.5,0a50.19,50.19,0,0,1,6,64.5Zm-41.5-67a35,35,0,1,0,35,35A34.78,34.78,0,0,0,100,46.44Zm0,50a15,15,0,1,1,15-15A14.73,14.73,0,0,1,100,96.44Z"/>
                      </svg>
                    </div>
                    Calle Don Simón, Parcela 14, Jardines de Cagua, Cagua Estado Aragua

                  </div>
                </div>
              </div>

              
            </div>

            <div class="flex-[60%] rounded-3xl relative z-10 ">
              
              <form action="" class=" flex flex-wrap w-full gap-6 pt-16 px-6">
                <div class="md:flex-[45%] flex-[100%] ">
                  <input class="input-contact" type="text" placeholder="Nombre *">
                </div>
                
                <div class="md:flex-[45%] flex-[100%]">
                  <input class="input-contact" type="text" placeholder="Apellido *">
                </div>
                
                <div class="md:flex-[45%] flex-[100%]">
                  <input class="input-contact" type="text" placeholder="Email *">
                </div>
                
                <div class="md:flex-[45%] flex-[100%]">
                  <input class="input-contact" type="text" placeholder="Telefono *">
                </div>
                
                <div class="flex-[100%]">
                  <input class="input-contact" type="text" placeholder="Asunto *">
                </div>
                
                <div class="flex-[100%]">
                  <textarea class="input-contact " rows="5" type="text" placeholder="Mensaje *"></textarea>
                </div>

                <div class="flex-[100%]">
                  <CButton class="py-3" color1="white" color2="primary" >Enviar Mensaje</CButton>
                </div>

              </form>
              
            </div>
            
            
            
          </div>

        </div>

      </section>

      <div class="flex items-center w-full md:h-12 h-20 overflow-hidden bg-tr_light relative text-white ">
        <div class="flex flex-nowrap text-nowrap justify-around font-synr font-bold tracking-wider space-x-3 w-full md:text-base text-xs">
          <div>TAXI EJECUTIVO</div>
          <div>MECANICA PESADA</div>
          <div>TRANSPORTE DE PERSONAL</div>
          <div>MECANICA ESPECIALIZADA</div>
          <div>REPUESTOS</div>
          <div>LOGISTICA A NIVEL NACIONAL</div>
        </div>
      </div>
      
      <!-- <section class="section-3">

        <div class="flex md:flex-row flex-col justify-between container mx-auto "> 
          <h2 class="tracking-wide leading-none text-2xl font-gus">SOMOS TU <span class="block">MEJOR OPCIÓN</span></h2>
          
          <div class="md:text-[8rem] bg-red-300 font-gus leading-[1.2] font-extrabold ml-8 on-section-3-text ">
            <div class=" overflow-hidden"><span class="block transition-transform duration-500" :class="(!sec3ON_text) ? '-translate-y-full' :''">10 AÑOS DE </span></div>
            <div class=" overflow-hidden"><span class="block ml-28 -mt-6 transition-transform duration-500" :class="(!sec3ON_text) ? 'translate-y-full' :''">EXPERIENCIA</span></div>
          </div>
        </div>

        <div class="flex md:flex-row flex-col-reverse md:justify-between  mt-16 on-section-3">
          <div class="flex md:w-96 ">
            <p class=" md:text-2xl ">
              Estamos en el ramo del Transporte de Personal y 
              Servicio de Taxi Ejecutivo a Nivel Nacional, con un Plus en Mecánica Especializada y 
              Mecánica Pesada, con el firme propósito de otorgar a nuestros clientes las mejores 
              alternativas en calidad y servicio. 
            </p>

            <div class=""></div>

          </div>

          <div class="flex  relative md:w-1/2 w-11/12 md:mr-32 overflow-hidden">
            <img :src="exp" alt="">
            <div class="absolute md:-top-24 -top-12 md:-left-16 -left-8 -rotate-12 w-[120%] h-[150%] bg-black transition-transform duration-1000 delay-200 " :class="(sec3ON) ? 'translate-y-full':'' " >  </div>
          </div>
        </div>

        <div class="pt-44">
          <h2 class="text-4xl font-semibold font-gus tracking-wider">Nuestros clientes:</h2>
          <div class="grid md:grid-cols-4 grid-cols-2 w-full md:gap-x-16 gap-x-2 relative  h-56 ">

            <div class="relative md:w-3/12 ">
              <img :src="logo1" class="" alt="">
            </div>
            <div class="relative md:w-3/12 ">
              <img :src="logo2" class="" alt="">
            </div>
            <div class="relative md:w-3/12 ">
              <img :src="logo3"  class="" alt="">
            </div>
            <div class="relative md:w-2/12 ">
              <img :src="logo4" class="" alt="">
            </div>

          </div>
        </div>

      </section> -->

      <!-- <section class=" pt-24 px-36 pb-36   relative z-50">

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
      </section> -->

      <footer class="pt-16 container mx-auto px-12">
        <div class="flex flex-wrap border-y border-slate-400 py-16">

          <div class="flex flex-col text-8xl font-gus font-semibold leading-none p-2 space-y-6">
            <img :src="tr_logo2B" class="w-96" alt="">
            <ul class="flex gap-2">
              <li class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6/12 fill-white" version="1.1" id="Layer_1" viewBox="0 0 408.788 408.788" xml:space="preserve">
                  <path d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085  h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882  v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955  l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087  c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085  C408.786,24.662,384.124,0,353.701,0z"/>
                </svg>
              </li>
              <li class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="fill-white w-6/12"version="1.1" id="Layer_1" viewBox="0 0 382 382" xml:space="preserve">
                  <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z"/>
                </svg>
              </li>
              <li class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-1/2" viewBox="0 0 20 20" version="1.1">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#FFFFFF">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]"></path>
                          </g>
                      </g>
                  </g>
                </svg>
              </li>
              <li class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-1/2" viewBox="0 0 1200 1227" fill="none">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="white"/>
                </svg>
              </li>
            </ul>
          </div>

          <div class="flex ml-16 space-x-12  leading-none p-2 flex-auto">
            <div class="flex-col space-y-8 pt-8 font-mon">
              <div class="text-primary font-bold font-synb">NAVEGACION</div> 
              <div class="">SERVICIOS</div> 
              <div class="">VEHICULOS</div>
              <div class="">NOSOTROS</div>
              <div class="">CONTACTANOS</div>
            </div>
            <div class="flex-col space-y-8 pt-8 font-mon">
              <div class="text-primary font-bold font-synb">CONTACTO</div> 
              <div class="">+58 424 473 50 63</div> 
              <div class="">tratasama@gmail.com</div>
              <div class="text-wrap w-56 leading-5">Calle Don Simón, Parcela 14, Jardines de Cagua, Cagua Estado Aragua</div>
            </div>
            <div></div>
          </div>
          
          <div>

          </div>
        </div>
        <div class="py-8 ">
          <div class="text-sm">Copyright © 2024 – Tratasama C.A.</div>

        </div>
      </footer>
      

    </main>
</template>

<style>

  .section-1{
    @apply  md:bg-cover md:bg-bottom bg-center  transition-transform duration-500 delay-500 
  }

  .section-2{
    @apply  bg-primary
  }

  .service-card{
    @apply h-28 w-80 bg-gradient-to-tr from-secondary/60 from-30%  to-white/30 rounded-2xl p-3 text-white flex items-center
  }

  .section-3{
    @apply pt-24 bg-black md:px-36 px-5 pb-36 text-white  relative z-50
  }

  .input-contact{
    @apply rounded-lg md:px-6 px-2 md:py-6 py-3 w-full bg-primary/30 text-white text-xl border-primary/0
    placeholder:text-white/80 placeholder:font-mon
    focus:outline-none border-2 focus:border-primary focus:bg-primary/60 
  }

  .swiperLetters{
    @apply translate-y-40 transition-all duration-700 delay-500 tracking-tighter 
  }

  .swiper-slide-active .swiperLetters{
    @apply translate-y-0 tracking-wider
  }

  .social-link{
    @apply w-12 aspect-square bg-primary rounded-2xl flex items-center justify-center
  }

</style>
