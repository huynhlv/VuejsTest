<template>
  <div class="row h-100">
    <div class="mx-auto my-auto fs-13">
      <div class="text-center mb-3">
        <img class="w-50" src="https://dactech.vn/wp-content/uploads/2019/03/logo-300x200.png">
      </div>
      <div class="alert alert-danger">
        Error
      </div>
      <div class="form-group">
        <label class="font-weight-bold">Email address</label>
        <input type="email" v-model="user.email" class="form-control fs-13" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label class="font-weight-bold">Password</label>
        <input v-model="user.password" type="password" class="form-control fs-13" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button @click="login" class="btn btn-primary fs-12 w-100">Log in</button>
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
      }
    }
  },
  methods: {
    login() {
      this.$http.post('sessions', this.user).then(response => {
        console.log(response);
      }, error => {
        console.log(error.body);
      });
    }
  }
}
</script>

