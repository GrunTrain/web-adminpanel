<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="rounded-full mx-auto h-15 w-auto" src="https://th.bing.com/th/id/OIG.gu90WPJjxYh2r7FFkTdT?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="SacreMap">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9  tracking-tight text-gray-900">Sacremap</h2>
  </div>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" v-model="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
          </div>
        </div>
        <div class="mt-2">
          <input id="password" v-model="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div>
        <button @click="handleLogin" class="flex w-full mt-10 justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Sign in</button>
      </div>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-md font-bold leading-9  tracking-tight text-gray-900">Powered by</h2>
    <img class="rounded-full mx-auto h-24 w-auto" src="https://cdn.discordapp.com/attachments/1088578885844750432/1168611306803302410/xasdas.png?ex=65aeae17&is=659c3917&hm=17ea0cf402c30e0d2fa46b9c9a5b274cc4322a46ccc995085cc694c88b1db8de&" alt="SacreMap">

  </div>
      

  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import authService from '../auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  try {
    await authService.login(email.value, password.value);
    console.log('Success')
    router.push('/all')
  } catch (error) {
    console.error('Login failed:', error);
  }
};
</script>