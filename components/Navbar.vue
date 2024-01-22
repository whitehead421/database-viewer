<template>
  <div class="flex items-center">
    <ul class="w-full flex items-center gap-4">
      <li v-for="nav in navs" :key="nav.name">
        <NuxtLink
          :to="nav.path"
          class="rounded-md hover:shadow-sm hover:bg-red-800 hover:text-white p-2"
        >
          {{ nav.name }}
        </NuxtLink>
      </li>
    </ul>
    <ViewDropdown />
  </div>
</template>

<script setup>
const navs = [
  { name: "Incidents", path: "/incidents" },
  { name: "Address", path: "/address" },
  { name: "Ward", path: "/wards" },
  { name: "Borough", path: "/boroughes" },
  { name: "Animal Group Parents", path: "/animal-group-parents" },
];
</script>
