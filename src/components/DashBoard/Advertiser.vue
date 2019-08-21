<template>
  <div>
    <h2 class="m-50p text-center">Advertiser Manager</h2>
    <div class="m-50p fs-13 w-50 m-auto">
      <div class="d-flex">
        <v-text-field class="add-acount" v-model="emailNew" @keyup.enter="addAccount"></v-text-field>
        <v-btn @click="addAccount" v-b-modal.modal-prevent-closing small color="primary" dark>Add
          <v-icon dark right>add</v-icon>
        </v-btn>
      </div>
      <b-table class="my-table text-nowrap" small bordered responsive :items="items" :fields="fields">
        <div slot="acction" slot-scope="data">
          <b-modal :id="'modal-center-' + data.item.email" hide-footer ref="modal" title="Edit Account">
            <v-text-field v-model="emailEdit" @keyup.enter="updateEmail"></v-text-field>
            <div class="f-right">
              <v-btn small color="primary" dark @click="updateEmail">
                <v-icon dark left>check_circle</v-icon>Update
              </v-btn>
              <v-btn small color="red" dark @click="closeModal">
                <v-icon dark left>remove_circle</v-icon>Cancel
              </v-btn>
            </div>
          </b-modal>
          <v-icon
            small
            class="mr-2"
            v-b-modal="'modal-center-' + data.item.email"
            @click="editItem(data.item.email)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(data.item.email)"
          >
            delete
          </v-icon>
        </div>
      </b-table>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.getAccountAdvertiser()
  },
  methods: {
    editItem(item) {
      this.emailEdit = item
      this.indexEmail = this.findIndexArr(item)
    },
    findIndexArr(item) {
      var data = this.$session.get('listAccount').advertiserEmails
      return data.findIndex(k => k==item)
    },
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide()
      })
    },
    getAccountAdvertiser() {
      let data = this.$session.get('listAccount').advertiserEmails
      this.items = this.parseData(data)
    },
    parseData(data) {
      var emailArray = []
      for (let i = 0; i < data.length; i++) {
        let emailInfo = {
          email: data[i]
        }
        emailArray.push(emailInfo)
      }
      return emailArray
    },
    addAccount() {
      var data = this.$session.get('listAccount').advertiserEmails
      data.unshift(this.emailNew)
      this.updateListAccount(data)
    },
    updateListAccount(data) {
      let listAccount = {
        advertiserEmails: data
      }
      this.$session.set('listAccount', listAccount)
      this.emailNew = ''
      this.getAccountAdvertiser()
    },
    updateEmail() {
      var data = this.$session.get('listAccount').advertiserEmails
      data[this.indexEmail] = this.emailEdit
      this.updateListAccount(data)
      this.closeModal()
    },
    deleteItem(item) {
      if (confirm('Are you sure you want to delete this account?')) {
        var data = this.$session.get('listAccount').advertiserEmails
        data.splice(this.findIndexArr(item), 1)
        this.updateListAccount(data)
      }
    }
  },
  data() {
    return {
      emailNew: '',
      emailEdit: '',
      indexEmail: -1,
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 50 || 'Max 50 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
      fields: [
        {
          key: 'email',
          sortable: true
        },
        {
          key: 'acction',
          class: 'w-25'
        }
      ],
      items: null
    }
  }
}
</script>
