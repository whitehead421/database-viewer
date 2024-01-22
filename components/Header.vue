<template>
  <header
    class="w-full h-24 bg-gradient-to-r from-red-900 to-red-600 text-white font-bold flex flex-col items-center gap-2 px-4 sm:flex-row"
  >
    <h1 class="cursor-pointer text-3xl font-semibold" @click="navigateTo('/')">
      LONDON FIRE BRIGADE
    </h1>
    <div class="h-1/3 mx-2 border border-white"></div>
    <h2 class="text-xl font-light">Animal Rescue Incidents</h2>
    <div class="ml-auto">
      <slot />
    </div>
  </header>
</template>
