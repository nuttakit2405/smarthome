<template>
  <div class="">
      <div>
        <p>Press Button to Uppicture!!!</p>
        <input type="file" @change="previewImage" accept="image/*" class="" >
      </div>
      <div>
        <p>Progress: {{uploadValue.toFixed()+"%"}}
        <progress id="progress" :value="uploadValue" max="100" ></progress>
        </p>
      </div>
        <div v-if="imageData!=null">
          <img class="preview" :src="picture">
        <button @click="onUpload">Upload</button>
      </div>
      <img class="preview" :src="picture">
  </div>
</template>

<script>
import firebase from 'firebase'
// import storage from '@/storage'

export default {
  name: 'Hello',
  data () {
    return {
      counter: 1,
      imageData: null,
      picture: null,
      uploadValue: 0
    }
  },
  methods: {
    previewImage (event) {
      this.uploadValue = 0
      this.picture = null
      this.imageData = event.target.files[0]
    },
    getfile () {
    },
    onUpload () {
      this.picture = null
      const storageRef = firebase.storage().ref('Lameyer/' + `${this.imageData.name}`).put(this.imageData)
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100
      }, error => {
        console.log(error.message)
      },
      () => {
        this.uploadValue = 100
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.picture = url
        })
      }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
