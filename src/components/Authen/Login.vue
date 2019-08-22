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
        <input v-model="user.password" @keyup.enter="login" type="password" class="form-control fs-13" placeholder="Password">
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
      listAccount: {
        advertiserEmails: [
          "cbode@welch.com",
          "adeline84@gmail.com",
          "ansley39@pollich.com",
          "bernhard.lesley@hyatt.info",
          "breanne59@herman.com",
          "bruen.helga@bechtelar.com",
          "cassidy19@strosin.net",
          "chanel84@yahoo.com",
          "cielo12@dare.org",
          "cindy85@gmail.com",
          "ckoss@gmail.com",
          "clarabelle66@hotmail.com",
          "conn.randal@hermann.com",
          "constance78@yahoo.com",
          "crist.melvin@schinner.com",
          "cullen.zieme@klein.com",
          "damien22@hudson.com",
          "david21@russel.com",
          "dgutkowski@gmail.com",
          "dkessler@torp.com",
          "dmohr@gmail.com",
          "dnolan@hotmail.com",
          "dooley.conrad@hotmail.com",
          "earl64@hotmail.com",
          "edietrich@yahoo.com",
          "eleannon@yahoo.com",
          "epaucek@rohan.com",
          "erdman.jacey@lakin.biz",
          "ernesto.heidenreich@gmail.com",
          "esperanza08@murazik.net",
          "fbayer@gmail.com",
          "ford.bogan@raynor.com",
          "goldner.kathryne@strosin.com",
          "guadalupe.ruecker@upton.com",
          "haag.elsa@champlin.com",
          "hane.milford@hotmail.com",
          "hanna.kub@bahringer.biz",
          "hauck.lue@hotmail.com",
          "heidenreich.otho@gmail.com",
          "ignacio06@gmail.com",
          "jframi@rippin.com",
          "jocelyn.considine@hotmail.com",
          "karlee29@gmail.com",
          "kendra.ruecker@gleichner.info",
          "kozey.myrna@kerluke.org",
          "kreiger.fredy@homenick.net",
          "ksipes@gerlach.biz",
          "lehner.domenico@white.com",
          "xfritsch@mosciski.com",
          "xharvey@hotmail.com",
          "yquigley@kuvalis.com",
          "zemlak.giles@gmail.com",
          "ziemann.ernestine@gmail.com",
          "zstark@hotmail.com",
        ]
      },
      msgErrors: ''
    }
  },
  methods: {
    login() {
      this.$loading(true)
      this.$http.post('https://sherpa-api-huynhlv.herokuapp.com/api/sessions', this.user).then(response => {
        if(response.status === 200 && 'auth_token' in response.body) {
          this.$session.start()
          this.$session.set('auth_token', response.body.auth_token)
          this.$session.set('listAccount', this.listAccount)
          this.$loading(false)
          this.$router.push('/campaign-manager')
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
