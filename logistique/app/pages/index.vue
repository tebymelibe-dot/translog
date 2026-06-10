<template>
  <!--
    La page d'accueil assemble tous les composants dans l'ordre.
    Chaque composant correspond à une section de la page.
    L'id sur chaque section permet la navigation par ancres (#services, etc.)
  -->
  <div>
    <HeroSection />
    <ServicesSection />
    <StatsSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script setup>
// useSeoMeta = composable Nuxt pour configurer le SEO
// Il génère automatiquement les balises <meta> dans le <head>
useSeoMeta({
  title: 'TransLog — Solutions Logistiques & Transport',
  description: 'TransLog vous offre des solutions de transport, entreposage et tracking en temps réel.',
  ogTitle: 'TransLog',
  ogDescription: 'Solutions logistiques modernes',
})
</script>