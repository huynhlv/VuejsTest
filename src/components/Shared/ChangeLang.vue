<template>
  <div>
    <div class="item" v-for="lang in optionLangs" :value="lang.value" @click.prevent="callSetLangActions"> {{ lang.text }}</div>
  </div>
</template>
<script>
    export default {
        data: () => ({
          optionLangs: [
            {
              text: 'Japanese',
              value: 'ja'
            },
            {
              text: 'English',
              value: 'en'
            }
          ]
        }),
        methods: {
          callSetLangActions (event) {
            this.$store.dispatch('setLang', event.target.getAttribute('value'))
          }
        }
    }
</script>