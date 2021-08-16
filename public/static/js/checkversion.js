$(document).ready(function(){
	let root = 'https://safeweb.app';
	let urlAPI = root + '/api/v1/version/list';
    $.getJSON(urlAPI, function(data) {
		$.each(data.list, function(key,value) {
			if (value.platform == `windows`) {
				$('#dlink').attr("href", `${root}/download/SafeAppSetup_v${value.version}.exe`);
				$("#dlink small").text(`Windows version ${value.version}`);
			}
		  });
    });
});