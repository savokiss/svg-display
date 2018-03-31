
var app = new Vue({
  el: '#app',
  data: {
    svg: ''
  },
  methods: {
    onApply () {
      this.svgSrc = this.svg
    }
  }
})

axios.get('./assets/demo.svg').then(function(res) {
  app.svg = res.data
})