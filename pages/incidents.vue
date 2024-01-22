<template>
  <div v-if="!pending" class="w-full h-full">
    <div class="bg-red-100 rounded-md px-2 py-1 my-1">
      <p class="text-red-800 font-medium text-sm">
        ⓘ To show where the incident happened, double click on a row.
      </p>
    </div>
    <UiDatagrid
      @select="select"
      @refresh="refresh"
      :data="data"
      :cols="cols"
      :selected="selected"
      primary-key="incidentNumber"
      @dblClickAction="dblClickAction"
    />
  </div>
  <Spinner v-else />
</template>

<script setup>
const { data, pending, error, refresh } = await useFetch(
  "/api/fetch-incidents"
);
const keys = Object.keys(data.value[0]);
const cols = ref(keys.map((key) => ({ key, label: getLabel(key) })));

// select row
const selected = ref(null);
const select = (row) => {
  selected.value = row;
};

const dblClickAction = async (row) => {
  if (row.address_id) {
    const { data: addressObj } = await useFetch(
      `/api/fetch-one-address/${row.address_id}`
    );
    if (addressObj.value.latitude && addressObj.value.longitude) {
      window.open(
        getCoordinateUrl(addressObj.value.latitude, addressObj.value.longitude),
        "_blank"
      );
    } else {
      alert("No coordinate found");
    }
  } else {
    alert("No address id found");
  }
};
</script>
