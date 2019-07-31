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
      this.$http.post('sessions', this.user).then(response => {
        this.$loading(false)
        console.log(response.body)
        this.$router.push('/campaign-manager')
      }, error => {
        this.$loading(false)
        this.msgErrors = error.body.errors
        document.getElementById('error-msg').className = "alert alert-danger";
      });
    }
  }
}
</script>
