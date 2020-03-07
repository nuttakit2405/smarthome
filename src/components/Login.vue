<template>
  <div style="width:100%;height: 100vh;background-position: 50% 50%;">
    <div id="firebaseui-auth-container" ></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {
  name: 'Login',
  data () {
    return {}
  },
  components: {
  },
  mounted () {
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }
    var uiConfig = {
      signInSuccessUrl: '/profile', // This redirect can be achived by route using callback.
      signInFlow: 'popup',

      signInOptions: [
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
