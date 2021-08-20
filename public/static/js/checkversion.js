$(document).ready(function(){
	let urlAPI = 'https://safeweb.app/api/v1/version/list';
    $.getJSON(urlAPI, function(data) {
		$.each(data.list, function(key,value) {
			if (value.platform == `windows`) {
				$('#dlink').attr("href", `/download/SafeAppSetup_v${value.version}.exe`);
				$("#dlink small").text(`Windows version ${value.version}`);
			}
		  });
    });
});