<template>
    <div class="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
    <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Name</label>
        <input v-model="name" id="name" type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
    </div>

    <div class="mb-4">
        <label for="street" class="block text-sm font-medium text-gray-700">Street</label>
        <input v-model="street" type="text" id="street" name="street" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
    </div>

    <div class="mb-4">
        <label for="postalCode" class="block text-sm font-medium text-gray-700">Postal Code</label>
        <input  v-model="postalCode" type="text" id="postalCode" name="postalCode" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
    </div>

    <div class="mb-4">
        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
        <input v-model="city" type="text" id="city" name="city" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
    </div>

    <div class="mb-4">
        <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
        <input v-model="country" type="text" id="country" name="country" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
    </div>

    <div class="mb-4">
        <label for="latitude" class="block text-sm font-medium text-gray-700">Latitude (Coordinate)</label>
        <input v-model="latitude" type="text" id="latitude" name="coordinates[]" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
    </div>

    <div class="mb-6">
        <label for="longitude" class="block text-sm font-medium text-gray-700">Longitude (Coordinate)</label>
        <input v-model="longitude" type="text" id="longitude" name="coordinates[]" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
    </div>

    <button @click="handleCreate" type="submit" class="w-full px-4 py-2 text-white bg-yellow-600 hover:bg-yellow-700 rounded-md focus:outline-none focus:bg-yellow-700">Submit</button>
</div>

</template>
<script setup>
    import { ref } from 'vue';
    import apiService from '../api.js';
    import { useRouter } from 'vue-router';

    const name = ref('');
    const street = ref('');
    const postalCode = ref('');
    const city = ref('');
    const country = ref('');
    const latitude = ref('');
    const longitude = ref('');
    const router = useRouter();
    const handleCreate = async () => {
  try {
    await apiService.create(name.value, street.value, postalCode.value, city.value, country.value, [latitude.value, longitude.value])
    console.log('Success')
    router.push('/all')
  } catch (error) {
    console.error('Create failed:', error);
  }
};

</script>