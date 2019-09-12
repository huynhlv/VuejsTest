<template>
  <div class="row h-100">
    <div class="mx-auto my-auto fs-13">
      <div class="text-center mb-3">
        <img class="w-50" src="https://dactech.vn/wp-content/uploads/2019/03/logo-300x200.png">
      </div>
      <div id="error-msg">{{ msgErrors }}</div>
      <div class="form-group">
        <label class="font-weight-bold">{{ $t('login.email_address') }}</label>
        <input type="email" v-model="user.email" class="form-control fs-13" aria-describedby="emailHelp" :placeholder="$t('login.enter_email')">
      </div>
      <div class="form-group">
        <label class="font-weight-bold">{{ $t('login.password') }}</label>
        <input v-model="user.password" @keyup.enter="login" type="password" class="form-control fs-13" :placeholder="$t('login.password')">
      </div>
      <button @click="login" class="btn btn-primary fs-13 w-100">{{ $t('login.btn_login') }}</button>
    </div>
  </div>
</template>
<script>

import AccountApi from '../../api/AccountApi'
import AdvertiserApi from '../../api/AdvertiserApi'
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
      AccountApi.login(this.user).then(response => {
        if(response.status === 200 && 'auth_token' in response.data) {
          this.$session.start()
          this.$session.set('auth_token', response.data.auth_token)
          this.getAdvertiserEmails()
          this.$loading(false)
          this.$router.push('/campaign-manager')
        }
      }, error => {
        this.$loading(false)
        this.msgErrors = error.response.data.errors
        document.getElementById('error-msg').className = "alert alert-danger"
      });
    },
    getAdvertiserEmails() {
      AdvertiserApi.index(this.$session.get('auth_token')).then(response => {
        let {data} = response
        let listAdvertiser = []
        for (let i = 0; i < data.length; i++) {
          listAdvertiser.push(data[i].email)
        }
        this.$session.set('listAccount', {advertiserEmails: listAdvertiser})
      }, error => {
        this.$loading(false)
        console.log(error)
      })
    }
  }
}
</script>
