'use strict';

$(document).ready(function(){
	$('.acd-label').on('click', function(){
		$(this).next().slideToggle("fast");
	});

	$('.flow-label').on('click', function(){
		$(this).next().slideToggle("fast");
	});
});