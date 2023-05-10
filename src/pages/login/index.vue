<script setup lang="ts">
  import Button from '../../components/ui/button/index.vue';

  const loading = false;
</script>

<template>
  <div class="h-screen flex items-center justify-center relative">
    <div class="bg absolute h-screen w-screen z-0" />
    <div class="flex gap-6 fixed top-9 right-20">
      <a
        href="https://track.co/blog/"
        target="_blank"
        class="font-bold transition-colors hover:text-green-600 hover:underline underline-offset-4"
        >Blog</a
      >
      <a
        href="https://help.track.co/kb"
        target="_blank"
        class="font-bold transition-colors hover:text-green-600 hover:underline underline-offset-4"
        >Suporte</a
      >
    </div>
    <div class="z-10">
      <img
        class="h-14 m-auto"
        src="../../assets/img/logo.png"
        alt="" />
      <div class="flex flex-col gap-5 shadow-2xl mt-8 p-8 rounded w-[420px] bg-white">
        <label class="flex flex-col gap-2">
          <span class="font-bold">E-mail Profissional</span>
          <input
            class="h-10 border border-neutral-300 rounded px-3 outline-none text-sm transition-colors focus:border-green-600"
            type="text"
            placeholder="mail@provider.com" />
        </label>
        <label class="flex flex-col gap-2">
          <span class="font-bold">Senha</span>
          <input
            class="h-10 border border-neutral-300 rounded px-3 outline-none text-sm transition-colors focus:border-green-600"
            type="password"
            placeholder="******" />
        </label>
        <NuxtLink
          to="/recovery-password"
          class="text-sm ml-auto text-blue-600 hover:underline"
          >Esqueci minha senha</NuxtLink
        >
        <Button> Acessar </Button>
        <div class="flex items-center gap-4">
          <span class="w-full h-px bg-neutral-300" />
          ou
          <span class="w-full h-px bg-neutral-300" />
        </div>

        <button
          class="border border-green-500 rounded h-10 inline-flex gap-3 items-center justify-center transition-colors hover:bg-green-200">
          <Icon
            name="logos-google-icon"
            size="1.2rem" />
          <span class="text-sm font-bold">Acessar com conta Google</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
  .bg {
    background: radial-gradient(circle, #46e391 10%, transparent 11%),
      radial-gradient(circle at bottom left, #46e391 5%, transparent 6%),
      radial-gradient(circle at bottom right, #46e391 5%, transparent 6%),
      radial-gradient(circle at top left, #46e391 5%, transparent 6%),
      radial-gradient(circle at top right, #46e391 5%, transparent 6%);
    background-size: 2em 2em;
    background-color: #ffffff;
    opacity: 0.3;
  }
</style>
