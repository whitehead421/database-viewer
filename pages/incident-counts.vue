<template>
  <div v-if="!pending" class="w-full h-full">
    <UiDatagrid
      :data="data"
      :cols="cols"
      :selected="selected"
      @select="select"
      @refresh="refresh"
      primary-key="incident_year_id"
    />
  </div>
  <Spinner v-else />
</template>

<script setup>
const { data, pending, error, refresh } = await useFetch(
  "/api/views/incident-counts-by-year"
);
const keys = Object.keys(data.value[0]);
const cols = ref(keys.map((key) => ({ key, label: getLabel(key) })));

const selected = ref(null);
const select = (row) => {
  selected.value = row;
};
</script>
