/*global fetch*/
/*global Vue*/
var app = new Vue({
  el: '#app',
  data: {
    name: 'John',
    surname: 'Doe',
    gender: 'male',
    region: "'Murca",
    sp: 'he',
    op: 'him',
    pa: 'his',
    pp: 'his',
  },
  computed: {
    pronounTime() {
      if (this.gender === 'male') {
        this.sp = 'he';
        this.op = 'him';
        this.pa = 'his';
        this.pp = 'his';
      }
      else {
        this.sp = 'she';
        this.op = 'her';
        this.pa = 'him';
        this.pp = 'hers';
      }
    }
  },
  methods: {
    fetchREST() {
      var url = "https://uinames.com/api/";
      console.log("URL " + url);
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((person) => {
          console.log("person");
          console.log(person);
          this.name = person.name;
          this.surname = person.surname;
          this.gender = person.gender;
          this.region = person.region;
          console.log("Got person");
          console.log(this.name);
        });
    },
  },
});