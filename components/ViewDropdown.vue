<!-- ViewDropdown.vue -->
<template>
  <div
    class="relative rounded-md hover:shadow-sm hover:bg-red-800 hover:text-white p-2 mr-4 cursor-pointer"
    @click="isOpen = !isOpen"
  >
    Views
    <div
      v-if="isOpen"
      class="absolute top-12 right-0 w-48 bg-red-900/90 text-white rounded-md overflow-hidden"
    >
      <ul class="w-full flex flex-col">
        <li
          v-for="view in views"
          :key="view.name"
          class="hover:text-white hover:bg-red-600 px-4 py-2"
        >
          <NuxtLink :to="view.path">{{ view.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const isOpen = ref(false);
const views = [
  { name: "Incident Counts", path: "/incident-counts" },
  { name: "Three Pump Incidents", path: "/three-pump" },
];

// watch route changes if route changes isOpen = false with nuxt3
watch(
  () => route.path,
  () => {
    isOpen.value = false;
  }
);
</script>
