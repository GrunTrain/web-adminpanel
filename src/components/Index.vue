<template>
  <div class="flex justify-center items-center">
    <div class="flex justify-center items-center h-screen" v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div class="my-10" v-else>
      <div class="overflow-x-auto">
        <table class="min-w-full table-auto">
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                City
              </th>
              <th
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Postal Code
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Remove
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="item in data" :key="item.id">
              <td class="px-6 py-4 whitespace-nowrap">
                {{ item.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                {{ item.city }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                {{ item.postalCode }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-3xl p-3 font-extrabold text-red-600">
               <button @click="deleteChurch(item.id)" class="border bg-red-500 text-white rounded-full text-center px-3">-</button>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-3xl p-3 font-extrabold">
                <button @click="edit(item.id)" class="border bg-yellow-500 text-white  rounded-full text-center px-3"> > </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  </div>
  <RouterLink class="absolute top-7 rounded-3xl right-4 text-3xl p-3 font-extrabold bg-green-500 text-white border text-center flex " to="/add">
    +
  </RouterLink>
</template>

<script setup>
import { ref, onMounted } from "vue";
import apiService from "../api.js";
import { useRouter } from 'vue-router';


const data = ref([]);
const loading = ref(false);
const error = ref(null);
const router = useRouter();

const deleteChurch = async(id) => {
  try {
    await apiService.remove(id)
    console.log("Success")
  } catch (error) {
    console.error('Delete failed:', error);
  }
  loadData()
};
const edit = async(id) =>
{
  router.push('/edit/'+id)
}
const loadData = async () => {
  loading.value = true;
  error.value = null;
  try {
    data.value = await apiService.fetchData();
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
};

onMounted(loadData);
</script>
