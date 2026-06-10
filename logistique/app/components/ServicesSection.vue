<template>
  <section class="py-8 border-t border-b border-gray-100 overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-800">
    
    <!-- Marquee partenaires -->
    <h2 class="text-center text-sm text-gray-400 mb-4 tracking-wide uppercase font-bold">
      ILS NOUS FONT CONFIANCE
    </h2>

    <div class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-white dark:from-gray-800 to-transparent" />
      <div class="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white dark:from-gray-800 to-transparent" />

      <div class="flex w-max animate-marquee">
        <template v-for="n in 2" :key="n">
          <template v-for="partner in partners" :key="`${n}-${partner.name}`">
            <span class="flex items-center gap-2 px-10 py-2 text-base font-medium
                         text-gray-400 hover:text-gray-900 dark:text-gray-500
                         dark:hover:text-white transition-all duration-200
                         whitespace-nowrap cursor-default"
                  :class="partner.class">
              {{ partner.label }}
            </span>
            <span class="self-center w-px h-5 bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
          </template>
        </template>
      </div>
    </div>

    <!-- Section Nos services -->
    <div class="max-w-6xl mx-auto px-6 py-20">
      
      <!-- Layout : texte gauche + images droite -->
      <div class="flex flex-col lg:flex-row gap-12 items-center mb-16">

        <!-- Colonne texte -->
        <div class="lg:w-1/2">
          <span class="inline-block text-xs font-semibold uppercase tracking-widest
                       bg-orange-100 text-orange-500 dark:bg-orange-500/20 dark:text-orange-400
                       px-3 py-1 rounded-full mb-4">
            Aperçu des services
          </span>
          <h2 class="font-chillax text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Naviguez le commerce mondial avec une logistique de confiance
          </h2>
          <p class="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-4">
            Besoin d'optimiser votre production ou livrer des marchandises critiques ? 
            Nous assurons une chaîne d'approvisionnement plus fluide avec une mise en place 
            flexible, des insights clairs et une livraison mondiale fiable.
          </p>
          <p class="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
            Notre portail d'allocation vous donne accès en temps réel à toutes 
            vos routes logistiques.
          </p>
          <button class="inline-flex items-center gap-2 bg-gray-900 dark:bg-white
                         text-white dark:text-gray-900 font-semibold text-sm
                         px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
            Expédier maintenant
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </button>
        </div>

        <!-- Colonne images asymétrique -->
        <div class="lg:w-1/2 grid grid-cols-2 gap-3 h-[420px]">
          
          <!-- Grande image gauche (pleine hauteur) -->
          <div class="row-span-2 rounded-2xl overflow-hidden">
            <img
              src="/images/hero-2.jpg"
              alt="Transport maritime"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Image haut droite -->
          <div class="rounded-2xl overflow-hidden">
            <img
              src="/images/hero-g.jpg"
              alt="Conteneur logistique"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Image bas droite -->
          <div class="rounded-2xl overflow-hidden">
            <img
              src="/images/trois-bg.jpg"
              alt="Entrepôt"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>

      <!-- Cartes services -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-slate-100 dark:bg-slate-700/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <h3 class="font-chillax text-xl font-bold text-gray-900 dark:text-white mb-3">
            Transport routier
          </h3>
          <p class="text-gray-500 dark:text-slate-300 text-sm leading-relaxed">
            Nous proposons des solutions de transport routier fiables et efficaces pour acheminer vos marchandises en toute sécurité.
          </p>
        </div>
        <div class="bg-slate-100 dark:bg-slate-700/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <h3 class="font-chillax text-xl font-bold text-gray-900 dark:text-white mb-3">
            Logistique et entreposage
          </h3>
          <p class="text-gray-500 dark:text-slate-300 text-sm leading-relaxed">
            Nos services de logistique et d'entreposage vous permettent de gérer efficacement votre chaîne d'approvisionnement.
          </p>
        </div>
        <div class="bg-slate-100 dark:bg-slate-700/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <h3 class="font-chillax text-xl font-bold text-gray-900 dark:text-white mb-3">
            Transport maritime
          </h3>
          <p class="text-gray-500 dark:text-slate-300 text-sm leading-relaxed">
            Nous offrons des solutions de transport maritime pour acheminer vos marchandises à l'international.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const partners = [
  { name: 'ferrari',   label: 'Ferrari',   class: 'italic' },
  { name: 'toyota',    label: 'TOYOTA',    class: 'tracking-widest text-sm' },
  { name: 'tesla',     label: 'TESLA',     class: 'tracking-wider' },
  { name: 'higer',     label: 'HIGER',     class: 'tracking-wide' },
  { name: 'marcopolo', label: 'Marcopolo', class: '' },
]
</script>

<style scoped>
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 18s linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>