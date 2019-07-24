<template>
  <div>
    <b-col md="6" class="my-1">
      <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
        <b-input-group>
          <b-form-input v-model="filter" placeholder="Type to Search"></b-form-input>
          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col md="6" class="my-1">
      <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
        <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
      </b-form-group>
    </b-col>

    <h3>{{ title }}</h3>

    <b-table
      id="table-transition-example"
      responsive
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      striped
      small
      primary-key="a"
      :tbody-transition-props="transProps"
      @filtered="onFiltered"
    >
      <template slot="b" slot-scope="data">
        <a :href="`#${data.value}`" @click="adGroup(data.value)">{{ data.value }}</a>
      </template>
    </b-table>
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>
<style>
  table#table-transition-example .flip-list-move {
    transition: transform 0.5s;
  }
</style>
<script>
  export default {
    data() {
      return {
        title: 'Campaign',
        transProps: {
          // Transition name
          name: 'flip-list'
        },
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        filter: null,
        items: [
          { a: 2, b: 'fsdfsd', c: 'Moose' },
          { a: 1, b: 'Huynh Le Van', c: 'Dog' },
          { a: 3, b: 'Foffsdfsdafur', c: 'Cat' },
          { a: 4, b: 'Onfsdfaasde', c: 'Mouse' },
          { a: 5, b: 'Thfasdfsdaree', c: 'Dog' },
          { a: 6, b: 'Fofsdafasdfur', c: 'Cat' },
          { a: 7, b: 'One', c: 'Mouse' },
          { a: 8, b: 'Three', c: 'Dog' },
          { a: 9, b: 'Four', c: 'Cat' },
          { a: 10, b: 'One', c: 'Mouse' },
          { a: 11, b: 'Three', c: 'Dog' },
          { a: 12, b: 'Four', c: 'Cat' },
          { a: 13, b: 'One', c: 'Mouse' }
        ],
        fields: [
          { key: 'a', sortable: true },
          { key: 'b', sortable: true },
          { key: 'c', sortable: true }
        ]
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      adGroup(name) {
        this.title = name
      }
    }
  }
</script>
