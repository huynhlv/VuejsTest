<template>
  <div class="m-50p fs-13 p-40p">
    <b-table class="my-table text-nowrap w-50 m-auto" small bordered responsive :items="items" :fields="fields">
      <div slot="acction" slot-scope="data">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          delete
        </v-icon>
      </div>
    </b-table>
  </div>
</template>
<script>
export default {
  created() {
    let data = this.$session.get('listAccount').advertiserEmails
    this.parseData(data);
  },
  data() {
    return {
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
      items: [
        {
          'email': 'aaaaa'
        }
      ]
    }
  },
  methods: {
    parseData(data) {
      var emailArray = [];
      let emailInfo = {
        email: ''
      }
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        emailInfo.email = data[i]
        emailArray.push(emailInfo);
      }
      console.log(emailArray);
      console.log(emailInfo);
      
    }
  }
}
</script>