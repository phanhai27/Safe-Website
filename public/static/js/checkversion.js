$(document).ready(function(){
	let urlAPI = 'https://safeweb.app/api/v1/version/list';
	let pathName = window.location.pathname;
	let subPath = pathName.split('/');
	let lang = subPath[1];

    $.getJSON(urlAPI, function(data) {
		$.each(data.list, function(key,value) {
			if (value.platform == `windows`) {
				$('#dlink').attr("href", `/download/SafeApp-v${value.version}.msi`);
				$("#dlink small").text(`Windows version ${value.version}`);
			}
		  });
    });
});