$(document).ready(function(){
	let root = 'https://dev-test.safeweb.app';
	let urlAPI = root + '/api/v1/version/list';
    $.getJSON(urlAPI, function(data) {
		$.each(data.list, function(key,value) {
			if (value.platform == `windows`) {
				$('#dlink').attr("href", `${root}/download/SafeApp.v${value.version}.msi`);
				$("#dlink").text(`Windows version "${value.version}`);
			}
		  });
    });
});