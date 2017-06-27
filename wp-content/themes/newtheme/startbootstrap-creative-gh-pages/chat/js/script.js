$(function() {
	$('.formulaire').on('submit', function(evt){
		evt.preventDefault(); // permet d'eviter au formulaire de suivre le lien de l'attribut action

		var fields = $(this).find('select,textarea');
		var errors = {};

		fields.removeClass('error');

		console.log(fields);
		fields.each(function(){
			if($(this).val()=="" || $(this).val().length<=15){
				errors[$(this).prop('id')] = $(this).data('title');
				$(this).addClass('error');
			}
		});

		console.log(errors);
		$.each(errors, function(index, value){
			console.log(index, value);
		});

	});
});
