<template>
  <div>
    <section>
        <navigation></navigation>
        <!-- <h5 class="center-align">Profile</h5> -->
        <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
            <div class="card-image" style="margin-top:25px;margin-left:10px;">
                <img :src="user.photoURL" style="width:75px;height:75px;border-radius:50%;border:4px solid #333"/>
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p>
                        name:
                        <strong>{{user.displayName}}</strong>
                        <br />email:
                        <strong>{{user.email}}</strong>
                        <br />uid:
                        <strong>{{user.uid}}</strong>
                        <!-- <br />provider:
                        <strong class="teal-text">{{user.providerData[0].providerId}}</strong> -->
                    </p>
                </div>
            </div>
            <button @click="updateUser" class="button is-success">UP+</button>
            <button @click="editProfileStatus" class="button is-warning">Edit Profile</button>
        </div>
        <!-- <h1>{{counter}}</h1> <button @click="ups">++</button> -->
        <div v-if="!editProfileStat" class="level-item" style="margin-top:10px;">
        <div class="level-item" style="margin-top:10px;">
          <div class="box">
            <input v-model="fullName" type="text" value="" placeholder="ชื่อ - นามสกุล" class="input is-small" style="margin-bottom:5px;">
            <input v-model="userType" type="text" placeholder="ต่ำแหน่ง" class="input is-small" style="margin-bottom:5px;">
            <input v-model="userNo" type="text" placeholder="รหัสพนักงาน" class="input is-small" style="margin-bottom:5px;">
            <button @click="updateUser" class="button is-small is-success">UP+</button>
            <button @click="unUpdate" class="button is-small is-danger">cancel</button>
          </div>
        </div>
        </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      user: null,
      counter: 1,
      fullName: '',
      userType: '',
      userNo: '',
      userEmail: '',
      editProfileStat: true
    }
  },
  components: {
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }
    })
    this.dbRefUser = firebase.database()
  },
  mounted () {
    this.dbRefUser.on('value', ss => {
      console.log(ss.val())
    })
  },
  beforeDestroy () {
    this.dbRefUser.off()
  },
  methods: {
    async updateUser () {
      const saveProfile = {
        fullName: this.fullName,
        userType: this.userType,
        userNo: this.userNo,
        userEmail: this.user.email
      }
      await this.dbRefUser.ref('cctUser').child(this.user.uid).set(saveProfile)
      this.editProfileStat = true
    },
    editProfileStatus () {
      this.editProfileStat = false
    },
    unUpdate () {
      this.editProfileStat = true
    }
  }
}
</script>
