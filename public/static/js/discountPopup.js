(function($) {

  let pathName = window.location.pathname;
  let subPath = pathName.split('/');
  let lang = subPath[1];

  const dealTime = () => {
      let message = `6 MONTHS OF USE`;
      let title = 'Your coupon code:';
      let coupon = 'ConTuHoc';
      let btnName = 'Try Now';

      if (lang == 'vi') {
        message = `6 THÁNG SỬ DỤNG`;
        title = 'Mã của bạn:';
        btnName = 'Thử Ngay';
      }
  
      const summonModal = () => {
        //add class to body,   contains grey filter and modal  
        $('body').append("<div id='box'></div>");
  
        $('#box').append(`<p id='messageText'>${message}</p>`);
        $('#box').append(`<p id='titleText'>${title}</p>`);
        $('#box').append(`<p id='couponText'>${coupon}</p>`);
  
        $('#box').append(`<button id='getDealBtn' type='button'>${btnName}</button>`);
        $('#box').append(`<div id='closeBtn'><i class='fa fa-close'></i></div>`);
  
        /////////////////////////////
        // Styling
        ////////////////////////////
  
        //Modal Box
        $('#box').css({
          width: '350px',
          height: '350px',
          background: '#FFF',
          border: 'rgba(17, 0, 255, 0.822) solid 1px',
          'text-align': 'center',
          position: 'absolute',
          'margin-left': '-175px',
          'margin-top': '-175px',
          left: '50%',
          top: '50%',
          display : 'block' ,
          'background-color': '#ffc700'
        });

        //Close button
        $('#closeBtn').css({
          position: 'absolute',
          top: '5px',
          right: '5px',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          'background-color': '#ffc700',
          'border-radius': '20px',
          padding: '5px',
          cursor: 'pointer'
        });
  
        //Message
        $('#messageText').css({
          'font-family': 'Fertigo Pro',
          'font-size':'30px',
          'font-weight':'bold',
          'margin-top':'40px',
          'margin-left':'20px',
          'margin-right':'20px',
          color: '#111111'
        })

        $('#titleText').css({
          'font-family': 'Fertigo Pro',
          'font-size':'20px',
          'margin-top':'40px',
          'margin-left':'20px',
          'margin-right':'20px',
          color: '#111111'
        })

        $('#couponText').css({
          'font-family': 'Fertigo Pro',
          'font-size':'30px',
          'margin-top':'5px',
          'margin-left':'20px',
          'margin-right':'20px',
          color: '#111111',
          'background-color': '#ffffff',
        })
  
        //Get Deal! button
        $('#getDealBtn').css({
          'text-align': 'center',
          'border-radius': '12px',
          'font-weight': 'bold',
          width: '58%',
          'font-size': '130%',
          height: '2.1em',
          'text-shadow': '-1px -1px 0 rgba(0, 0, 0, 0.3)',
          color: '#ffffff',
          '-webkit-box-shadow': '0 6.5px 4px -4px rgba(87, 87, 87, 0.582)',
          'box-shadow': '0 6.5px 4px -4px rgba(87, 87, 87, 0.582)',
          'background-color': '#111111',
          '-webkit-appearance': 'button',
          cursor: 'pointer',
          'margin-top': '40px',
          'margin-bottom': '10px'
        });
  
      };
  
      summonModal();
    };
  
    /////////////////////////////
    // Event Listeners
    ////////////////////////////
    
    $('body').on('click', '#getDealBtn', function() {
      // $('#box').css('display', 'none');
      window.location.href = `https://admin.safeweb.app/signup?lang=${lang}`;
    });

    $('body').on('click', '#closeBtn', function() {
      $('#box').remove()
      $('#box').css('display', 'none');
    });

    dealTime();

})(jQuery);