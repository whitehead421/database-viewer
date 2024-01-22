<template>
  <button
    @click="$emit('refresh')"
    class="bg-red-900 text-white rounded-md px-2 py-1 my-1"
  >
    ⟳
  </button>
  <div class="flex flex-col w-[calc(100%-1rem)] h-full">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table
            class="min-w-full text-left text-xs font-light border border-red-900 border-collapse"
          >
            <thead class="font-medium dark:border-neutral-500">
              <tr>
                <th
                  scope="col"
                  class="py-4 border-red-900 border px-2 text-left text-[10px] truncate font-medium text-neutral-100 uppercase bg-red-700"
                  v-for="col in cols"
                  :key="col.key"
                >
                  {{ col.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in data"
                :key="index"
                @click="$emit('select', row)"
                @dblclick="$emit('dblClickAction', row)"
                class="dark:border-neutral-500 even:bg-neutral-100 cursor-pointer hover:bg-neutral-200 dark:hover:bg-red-500 hover:text-white"
                :class="{
                  '!bg-red-900 !text-white': isSelected(row),
                }"
              >
                <td
                  v-for="col in cols"
                  :key="col.key"
                  class="py-1 px-2 border truncate"
                >
                  <span v-if="row[col.key] != null">
                    <div class="relative w-min">
                      <span v-if="row[col.key] != 'Redacted'">
                        {{ row[col.key] }}
                      </span>
                      <span
                        v-else
                        class="bg-red-900 text-white text-[10px] px-1"
                      >
                        REDACTED
                      </span>
                    </div>
                  </span>

                  <span v-else class="text-red-700 font-black text-[8px]">
                    NULL
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  cols: {
    type: Array,
    required: true,
  },
  selected: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  primaryKey: {
    type: String,
    required: true,
  },
});

defineEmits(["select", "dblClickAction", "refresh"]);

const isSelected = (row) => {
  if (!props.selected) return false;
  return row[props.primaryKey] === props.selected[props.primaryKey];
};
</script>
