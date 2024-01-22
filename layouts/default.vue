<template>
  <div class="flex flex-col gap-4">
    <Header>
      <Navbar />
    </Header>
    <main class="h-auto p-4">
      <slot />
    </main>
  </div>
</template>
