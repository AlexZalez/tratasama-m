<script setup>
defineProps({
    Bclass:{
        type:String
    },
    color1:{
        type:String,
        default:'black'
    },
    color2:{
        type:String,
        default:'white'
    },
})

function selColor(color) {
    const colors = {
        'white':'#FFFFFF',
        'black':'#000000',
        'primary':'#2BB4BA',
        'secondary':'#233251',
        'tr_light':'#727073',
        'tr_dark':'#4D4D4D',
    }

    const DEFAULT_COLOR = '#FF0000'

    return colors[color] || DEFAULT_COLOR;
}


</script>

<template>
    <button :class="'btn tracking-wider px-10 py-2 '+Bclass"> 
        <slot/>
    </button>
</template>


<style >
    .btn {
        --color: v-bind(selColor(color1));
        --color2: v-bind(selColor(color2));
        /* padding: 0.5em 1.75em; */
        /* background-color: transparent; */
        border-radius: 50px;
        border: .3px solid var(--color);
        transition: .5s;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        z-index: 1;
        font-weight: 800;
        /* font-size: 17px; */
        font-family: 'Montserrat', 'Segoe UI', sans-serif;
        text-transform: uppercase;
        color: var(--color);
    }

    .btn::after, .btn::before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        transform: skew(90deg) translate(-50%, -50%);
        position: absolute;
        inset: 50%;
        left: 25%;
        z-index: -1;
        transition: .5s ease-out;
        background-color: var(--color);
    }

    .btn::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::before {
    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::after {
    transform: skew(45deg) translate(-50%, -50%);
    }

    .btn:hover {
    color: var(--color2);
    }

    .btn:active {
    filter: brightness(.7);
    transform: scale(.98);
    }
</style>