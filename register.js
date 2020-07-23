Hooks.on("init", function () {
  let locales = ['fr'];
	locales.forEach(l => {
		Babele.get().register({
			module: 'starfinder-fr-translation-fvtt',
			lang: l,
			dir: 'compendiums/' + l
		});
	});
});
