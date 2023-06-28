import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { inhabitantCardType } from '@/types/main'
import axios from 'axios'

export const animalListStore = defineStore( 'animals', () => {
  const animals = ref<inhabitantCardType[]>( [] )

  const getAnimals = function () {
    axios.get( 'http://server:8000/database/animals' ).then( ( { data } ) => animals.value = data )
  }

  return {
    animals, getAnimals
   }
} )
