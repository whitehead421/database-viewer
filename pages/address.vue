<template>
  <div v-if="!pending" class="w-full h-full">
    <div class="bg-red-100 rounded-md px-2 py-1 my-1">
      <p class="text-red-800 font-medium text-sm">
        ⓘ To show where the address is, double click on a row.
      </p>
    </div>
    <UiDatagrid
      @select="select"
      @dblClickAction="dblClickAction"
      :data="data"
      :cols="cols"
      :selected="selected"
      primary-key="id"
      @refresh="refresh"
    />
  </div>
  <Spinner v-else />
</template>

<script setup>
const { data, pending, error, refresh } = await useFetch("/api/fetch-address");
const keys = Object.keys(data.value[0]);
const cols = ref(keys.map((key) => ({ key, label: getLabel(key) })));

const selected = ref(null);
const select = (row) => {
  selected.value = row;
};

const dblClickAction = (row) => {
  if (row.latitude && row.longitude) {
    window.open(getCoordinateUrl(row.latitude, row.longitude), "_blank");
  } else {
    alert("No coordinate found");
  }
};
</script>
