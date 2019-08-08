<template>
  <div class="row h-100">
    <div class="mx-auto my-auto fs-13">
      <div class="text-center mb-3">
        <img class="w-50" src="https://dactech.vn/wp-content/uploads/2019/03/logo-300x200.png">
      </div>
      <div id="error-msg">{{ msgErrors }}</div>
      <div class="form-group">
        <label class="font-weight-bold">Email address</label>
        <input type="email" v-model="user.email" class="form-control fs-13" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label class="font-weight-bold">Password</label>
        <input v-model="user.password" type="password" class="form-control fs-13" placeholder="Password">
      </div>
      <button @click="login" class="btn btn-primary fs-13 w-100">Log in</button>
    </div>
  </div>
</template>
<script>

import Vue from 'vue'
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      msgErrors: ''
    }
  },
  methods: {
    login() {
      this.$loading(true)
      this.$http.post('https://sherpa-api-huynhlv.herokuapp.com/api/sessions', this.user).then(response => {
        if(response.status === 200 && 'auth_token' in response.body) {
          this.$loading(false)
          this.$router.push('/campaign-manager')
          this.$session.start()
          this.$session.set('auth_token', response.body.auth_token)
          Vue.http.headers.common['Authorization'] = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hZC10ZWNoLWRhYy5oZXJva3VhcHAuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTY1MjM1ODI4LCJleHAiOjE1NjUyMzk0MjgsIm5iZiI6MTU2NTIzNTgyOCwianRpIjoiOG9lWjZQZ1NiZmpLTTZidSIsInN1YiI6MiwicHJ2IjoiYWExMjcwMGJlODEzYTRkMDRmNzU1NWM1OWJmZDA1Y2NjNzVlYWJjNSJ9.g__UCYK92Pa0CZ_gOyLI3iWlTPN_KDw4x_GRBE2YpMA'
        }
      }, error => {
        this.$loading(false)
        this.msgErrors = error.body.errors
        document.getElementById('error-msg').className = "alert alert-danger";
      });
    }
  }
}
</script>
