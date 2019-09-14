<template>
  <div>
    <h2 class="m-50p text-center">{{ $t('advertiser.title') }}</h2>
    <div class="m-50p fs-13 w-50 m-auto">
      <v-form ref="form" >
        <div class="d-flex">
          <v-text-field
            v-model="emailNew"
            @keyup.enter="addAccount"
            :rules="rules"
            :counter="50"
            :label="$t('advertiser.account_advertiser')"
            required
          ></v-text-field>
          <v-btn class="btn-add-acount" @click="addAccount" v-b-modal.modal-prevent-closing small color="primary" dark>{{ $t('advertiser.add') }}
            <v-icon dark right>add</v-icon>
          </v-btn>
        </div>
      </v-form>
      <b-table sticky-header="450px" head-variant="light" class="text-nowrap" small bordered responsive :items="items" :fields="fields">
        <div slot="acction" slot-scope="data">
          <b-modal :id="'modal-center-' + data.item.email" hide-footer ref="modal" :title="$t('advertiser.edit_account')">
            <v-text-field v-model="emailEdit" @keyup.enter="updateEmail"></v-text-field>
            <div class="f-right">
              <v-btn small color="primary" dark @click="updateEmail">
                <v-icon dark left>check_circle</v-icon>{{ $t("advertiser.update") }}
              </v-btn>
              <v-btn small color="red" dark @click="closeModal">
                <v-icon dark left>remove_circle</v-icon>{{ $t("advertiser.cancel") }}
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
import AdvertiserApi from '../../api/AdvertiserApi'
export default {
  created() {
    this.getAccountAdvertiser()
  },
  methods: {
    getAccountFromLocal() {
      return this.$session.get('listAccount').advertiserEmails
    },
    editItem(item) {
      this.emailEdit = item
      this.indexEmail = this.findIndexArr(item)
    },
    findIndexArr(item) {
      var data = this.getAccountFromLocal()
      return data.findIndex(k => k==item)
    },
    closeModal() {
      this.$nextTick(() => {
        this.$refs.modal.hide()
      })
    },
    getAccountAdvertiser() {
      let data = this.getAccountFromLocal()
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
      if(!this.$refs.form.validate()) return
      this.$loading(true)
      let objEmail = {email: this.emailNew}
      AdvertiserApi.create(objEmail, this.$session.get('auth_token')).then(response => {
        this.$loading(false)
        let data = this.getAccountFromLocal()
        data.unshift(this.emailNew)
        this.updateListAccount(data)
        this.$swal("Success!", "Add account success!", "success")
      }, error => {
        console.log(error)
      })
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
      var data = this.getAccountFromLocal()
      data[this.indexEmail] = this.emailEdit
      this.updateListAccount(data)
      this.closeModal()
      this.$swal("Success!", "Update account success!", "success")
    },
    deleteItem(item) {
      if (confirm('Are you sure you want to delete this account?')) {
        this.$loading(true)
        let objEmail = {email: item}
        AdvertiserApi.delete(objEmail, this.$session.get('auth_token')).then(response => {
          this.$loading(false)
          var data = this.getAccountFromLocal()
          data.splice(this.findIndexArr(item), 1)
          this.updateListAccount(data)
          this.$swal("Success!", "Delete account success!", "success")
        }, error => {
          console.log(error)
        })
      }
    }
  },
  data() {
    return {
      emailNew: '',
      emailEdit: '',
      indexEmail: -1,
      rules: [
        value => !!value || this.$t("validate.required"),
        value => (value || '').length <= 50 || this.$t("validate.max_50_char"),
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || this.$t("validate.email")
        },
      ],
      fields: [
        {
          key: 'email',
          label: this.$t("advertiser.email"),
          sortable: true
        },
        {
          key: 'acction',
          label: this.$t("advertiser.action"),
          class: 'w-25'
        }
      ],
      items: null
    }
  }
}
</script>
