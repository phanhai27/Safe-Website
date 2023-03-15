$(document).ready(function(){
	let urlAPI = 'https://safeweb.app/api/v1/version/list';
	let pathName = window.location.pathname;
	let subPath = pathName.split('/');
	let lang = subPath[1];
	let verLang = 'Version';
	switch(lang) {
		case 'vi':
		  verLang = 'Phiên bản';
		  break;
		case 'zh':
		  verLang = '版本';
		  break;
		case 'ja':
		  verLang = 'バージョン';
		  break;
		default:
		  verLang = 'Version';
	}

    $.getJSON(urlAPI, function(data) {
		$.each(data.list, function(key,value) {
			
			if (value.platform == `windows`) {
				// $('#dlink').attr("href", `/download/SafeApp-v${value.version}-setup.exe`);
				$("#dlink small").text(`${verLang} ${value.version}`);
			}
		  });
    });
});