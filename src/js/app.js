var urlMovies = 'https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=b551f8645e3d8ec4ca0cc0f5065c1201';

new Vue({
   el: '#app',
   created: function(){
      this.getMovies();
   },
   data: {
      list: [],
      movie: [],
      NUM_RESULTS: 0,
      pag: 0

   },
   methods: {
      getMovies: function(){
         this.$http.get(urlMovies).then(function(response){
            this.list = response.data.results;
            this.NUM_RESULTS = 6;
            this.pag = 1;

            console.log(this.list)

         });
      },

      getMovie: function(iIndex){
      	console.log(this.list);
      	this.movie = this.list[iIndex];
      	console.log(this.movie);
      }
   },

   components: {
   	'list': {
   		template: '#list-template',
   		props: ['lista']
   	}
   }

});

