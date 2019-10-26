/*global fetch*/
/*global Vue*/
var app = new Vue({
  el: '#app',
  data: {
    name: 'Bichang',
    surname: 'Xin',
    gender: 'female',
    region: "Taiwan",
    pronouns: [],
    sp: '',
    op: '',
    pa: '',
    pp: '',
  },
  computed: {
    subPro() {
      if (this.gender === 'male') {
        return 'he';
      }
      else if (this.gender === 'female') {
        return 'she';
      }
    },
    objPro() {
      if (this.gender === 'male') {
        return 'him';
      }
      else if (this.gender === 'female') {
        return 'her';
      }
    },
    posAdj() {
      if (this.gender === 'male') {
        return 'his';
      }
      else if (this.gender === 'female') {
        return 'her';
      }
    },
    posPro() {
      if (this.gender === 'male') {
        return 'his';
      }
      else if (this.gender === 'female') {
        return 'hers';
      }
    },
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