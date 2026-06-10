<template>
  <section class="py-20 bg-tl-navy dark:bg-slate-900">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Titre stats -->
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-semibold uppercase tracking-widest
                     bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full mb-4">
          Nos chiffres
        </span>
        <h2 class="font-chillax text-3xl md:text-4xl font-bold text-white">
          La confiance en chiffres
        </h2>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center p-8 rounded-2xl bg-white/5 border border-white/10
                 hover:bg-white/10 transition-all duration-300"
        >
          <div class="text-5xl font-bold text-white font-chillax mb-2">
            <span>{{ stat.prefix }}</span>
            <span ref="counters" :data-target="stat.value">0</span>
            <span>{{ stat.suffix }}</span>
          </div>
          <p class="text-gray-400 text-sm uppercase tracking-widest mt-2">
            {{ stat.label }}
          </p>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="w-full h-px bg-white/10 mb-24" />

      <!-- Titre témoignages -->
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-semibold uppercase tracking-widest
                     bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full mb-4">
          Témoignages
        </span>
        <h2 class="font-chillax text-3xl md:text-4xl font-bold text-white mb-4">
          Ce que disent nos clients
        </h2>
        <p class="text-gray-400 text-base max-w-xl mx-auto">
          Ils nous font confiance pour gérer leur logistique. Voici ce qu'ils en pensent.
        </p>
      </div>

      <!-- Témoignages -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="review in reviews"
          :key="review.name"
          class="bg-white/5 border border-white/10 rounded-2xl p-6
                 hover:bg-white/10 transition-all duration-300 flex flex-col gap-4"
        >
          <!-- Étoiles -->
          <div class="flex gap-1">
            <svg
              v-for="i in 5"
              :key="i"
              class="w-4 h-4"
              :class="i <= review.rating ? 'text-orange-400' : 'text-white/20'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Texte -->
          <p class="text-gray-300 text-sm leading-relaxed flex-1">
            "{{ review.text }}"
          </p>

          <!-- Auteur -->
          <div class="flex items-center gap-3 pt-2 border-t border-white/10">
            <div class="w-10 h-10 rounded-full flex items-center justify-center
                        bg-orange-500/20 text-orange-400 font-bold text-sm flex-shrink-0">
              {{ review.initials }}
            </div>
            <div>
              <p class="text-white font-semibold text-sm">{{ review.name }}</p>
              <p class="text-gray-500 text-xs">{{ review.role }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const counters = ref([])

const stats = [
  { value: 30,   prefix: '+', suffix: '', label: 'Entreprises partenaires' },
  { value: 2000, prefix: '+', suffix: '', label: 'Clients satisfaits'      },
  { value: 15,   prefix: '+', suffix: '', label: 'Pays couverts'           },
]

const reviews = [
  {
    name: 'Amadou Diallo',
    initials: 'AD',
    role: 'Directeur logistique, DakarFreight',
    rating: 5,
    text: 'Un service exceptionnel. Nos marchandises arrivent toujours à temps et en parfait état. L\'équipe est réactive et professionnelle.',
  },
  {
    name: 'Sophie DeBourbon',
    initials: 'SM',
    role: 'Responsable supply chain, EuroTrade',
    rating: 5,
    text: 'Grâce à leur portail de suivi en temps réel, nous avons une visibilité totale sur nos expéditions. Un partenaire de confiance.',
  },
  {
    name: 'Kofi Mensah',
    initials: 'KM',
    role: 'CEO, GhanaExport Ltd',
    rating: 4,
    text: 'Très bonne expérience globale. Le transport maritime est rapide et les tarifs sont compétitifs. Je recommande vivement.',
  },
]

const animateCounter = (el, target, duration = 2000) => {
  let start = 0
  const step = target / (duration / 16)

  const update = () => {
    start += step
    if (start < target) {
      el.textContent = Math.floor(start)
      requestAnimationFrame(update)
    } else {
      el.textContent = target
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = parseInt(el.dataset.target)
          animateCounter(el, target)
          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.5 }
  )

  counters.value.forEach((el) => {
    if (el) observer.observe(el)
  })
})
</script>