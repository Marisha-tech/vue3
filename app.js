Vue.createApp({
  data: () => ({
    myHtml: '<h1>Vue 3 App</h1>',
    title: 'Заголовок',
    person: {
      firstName: 'Marina',
      lastName: 'Fam',
      age: 27,
    },
    items: [1, 2],
  }),
  methods: {
    // stopPropagation(event) {
    //   event.stopPropagation()
    // },
    addItem() {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      console.log(event.key)
    },
    remove(i) {
      this.items.splice(i, 1)
    },
    log(item) {
      console.log('Log ', item)
    },
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0)
    },
  },
}).mount('#app')
