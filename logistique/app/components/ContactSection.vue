<template>
  <section id="contact" class="relative min-h-screen flex items-center bg-tl-navy dark:bg-slate-900 py-20">
    <div class="max-w-6xl mx-auto px-6 w-full">
      <div class="text-center mb-16">
        <span class="inline-block text-xs font-semibold uppercase tracking-widest
                     bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full mb-4">
          Contactez-nous
        </span>
        <h2 class="font-chillax text-3xl md:text-4xl font-bold text-white mb-6">
          Prêt à optimiser votre logistique ?
        </h2>
      </div>
      <div class="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
        <form class="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Votre nom"
            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <input
            type="email"
            placeholder="Votre email"
            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <textarea
            rows="4"
            placeholder="Votre message"
            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
          ></textarea>
          <textarea
            rows="4"
            placeholder="Détails de votre projet logistique"
            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none">
          </textarea>
          <textarea
            rows="4"
            placeholder="Budget estimé (optionnel)"
            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none">
          </textarea>
          <button
            type="submit"
            class="self-start bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  </section>
</template>