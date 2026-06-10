<template>
  <!--
    Le layout est le cadre qui entoure toutes les pages.
    Il contient la NavBar en haut, le contenu au milieu (slot),
    et le Footer en bas.
    min-h-screen = la page fait au minimum toute la hauteur de l'écran
  -->
  <div class="min-h-screen bg-tl-light dark:bg-tl-dark transition-colors duration-300">

    <!-- La NavBar est affichée sur toutes les pages -->
    <NavBar />

    <!--
      <slot /> est le "trou" où Nuxt injecte le contenu de la page active
      Quand tu vas sur /, le contenu de pages/index.vue s'insère ici
    -->
    <main>
      <slot />
    </main>

    <!-- Le Footer est affiché sur toutes les pages -->
    <FooterSection />

  </div>
</template>