<template>
  <div class="hello">
      <p>Counter: {{ counter }}</p>
      <button @click="updateCounter">Up</button>
      <button @click="dropCounter">Dn</button>
  </div>
</template>

<script>
import fb from '@/firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      counter: 1
    }
  },
  created () {
    // this.dbRef = fb.database().ref('counter')
    // this.dbRef = fb.database().ref('counter/path2')
    this.dbRef = fb.database().ref('counter')
  },
  mounted () {
    this.dbRef.on('value', ss => {
      console.log(ss.val())
    })
  },
  beforeDestroy () {
    this.dbRef.off()
  },
  methods: {
    updateCounter () {
    //   this.counter++
      this.dbRef.set(this.counter++)
    },
    dropCounter () {
    //   this.counter--
      this.dbRef.set(this.counter--)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
