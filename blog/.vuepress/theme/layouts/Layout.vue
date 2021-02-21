<template>
  <div>
    <MyBaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>
