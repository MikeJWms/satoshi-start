<template>
  <section class="card rounded-md inline-block p-8 pb-10 shadow">
    <div class="text-3xl">
      <slot name="title"></slot>
    </div>
    <div class="grid h-full items-center">
      <slot name="content" class=""></slot>
    </div>
  </section>
</template>

<style scoped>
.card {
  /* background: linear-gradient(
    117.76deg,
    rgba(255, 255, 255, 0.7) -7.21%,
    rgba(255, 255, 255, 0.5) 118.08%
  ); */
  /* background: linear-gradient(
    117.76deg,
    rgba(255, 180, 180, 0.7) -7.21%,
    rgba(255, 219, 172, 0.5) 118.08%
  ); */
  background: linear-gradient(
    117.76deg,
    rgba(255, 223, 223, 0.7) -7.21%,
    rgba(255, 231, 200, 0.5) 118.08%
  );
  backdrop-filter: blur(8px);
}
</style>
