<template>
	<default-layout>
    <h1> Hello </h1>
    <div v-if="store.test">
      <div v-for="test of store.test" :key="test.id">
        <h2>
          {{ test }}
        </h2>
      </div>
    </div>
  </default-layout>
</template>

<script lang="ts" setup>
import { onMounted } from'vue'

import defaultLayout from '@/components/layouts/default.vue'

import { defineComponent } from 'vue';

import { testStore } from '@/stores/test';

defineComponent( {
  defaultLayout
} )
  
const store = testStore()

onMounted ( () => { store.getTest() } )
</script>

<style lang="scss" scoped>

</style>