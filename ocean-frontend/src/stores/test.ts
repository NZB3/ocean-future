import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const testStore = defineStore( 'test', () => {
    const test = ref<any[]>([])
  
    const getTest = async function () {
      await axios.get( 'http://server/database/' ).then( ( { data } ) => test.value = data )
    }
  
    return {
      test, getTest
     }
  } )