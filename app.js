angular
	.module('something',[])
	.controller('MovieCtrl', MovieCtrl);

	function MovieCtrl() {
		var vm=this;
		vm.moviesToWatch = [
			{title: 'The House'},
			{title: 'Scary Movie'},
			{title: 'Invisible'},
			{title: 'Network'},
			{title: 'Valerian'}
			];
		vm.submit = function(formdata) {
			// console.log("got new movie",formdata,vm.text,vm.moviesToWatch.length);
			if (vm.text) {
				vm.moviesToWatch.push({title: vm.text});
			}
		};
    	vm.deleteMovie = function (movie) {
      		var movieIndex = vm.moviesToWatch.indexOf(movie);
      		vm.moviesToWatch .splice(movieIndex, 1);
    	};

		console.log(vm.moviesToWatch);
		// vm.name = 'Joe Blow';
		// vm.func = function () {
		// 	alert(vm.name);
		// };
	};
