<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white dark:bg-slate-900 shadow-md' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <NuxtLink to="/" class="flex items-center gap-2">
        <span class="font-chillax font-bold text-xl text-tl-navy dark:text-white">
          Trans<span class="text-tl-orange">Log</span>
        </span>
      </NuxtLink>

      <ul class="hidden md:flex items-center gap-8">
        <li v-for="lien in liens" :key="lien.href">
          <a
            :href="lien.href"
            class="font-chillax text-slate-700 dark:text-slate-300 hover:text-tl-orange transition-colors text-sm font-medium"
          >
            {{ lien.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-3">

        <button
          @click="toggleMode"
          class="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <svg v-if="colorMode.value === 'dark'" class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <svg v-else class="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>

        <a href="#contact" class="hidden md:flex btn-primary text-sm py-2 px-4">
          Demander un devis
        </a>

        <button
          @click="menuOuvert = !menuOuvert"
          class="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
        >
          <span class="w-6 h-0.5 bg-tl-navy dark:bg-white transition-transform duration-300 block" :class="menuOuvert ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="w-6 h-0.5 bg-tl-navy dark:bg-white transition-opacity duration-300 block" :class="menuOuvert ? 'opacity-0' : ''"></span>
          <span class="w-6 h-0.5 bg-tl-navy dark:bg-white transition-transform duration-300 block" :class="menuOuvert ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>
    </div>

    <div v-if="menuOuvert" class="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-6 py-4">
      <ul class="flex flex-col gap-4">
        <li v-for="lien in liens" :key="lien.href">
          <a
            :href="lien.href"
            @click="menuOuvert = false"
            class="block font-chillax text-slate-700 dark:text-slate-300 hover:text-tl-orange transition-colors py-1"
          >
            {{ lien.label }}
          </a>
        </li>
      </ul>
      <a href="#contact" class="btn-primary mt-4 w-full justify-center text-sm">
        Demander un devis
      </a>
    </div>
  </nav>
</template>

<script setup>
const colorMode = useColorMode()
const scrolled = ref(false)
const menuOuvert = ref(false)

function toggleMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const liens = [
  { label: 'Accueil',  href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'A propos', href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>
