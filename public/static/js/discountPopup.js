$(document).ready(function(){

  const dealTime = () => {
      let productName = 'Con Tu Học';
      let discountedPrice = '6 tháng';
  
      let message = `Mã ${productName} cho ${discountedPrice} sử dụng thử gói Tiêu chuẩn`;
  
      const summonModal = () => {
        //add class to body,   contains grey filter and modal  
        $('body').append("<div id='box'></div>");
  
        $('#box').append(`<p id='messageText'>${message}</p>`);
  
        $('#box').append("<button id='getDealBtn' type='button'>Get Deal!</button>");
        $('#box').append("<div id='closeBtn'><i class='fa fa-close'></i></div>");
  
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
        });
  
        //Message
        $('#messageText').css({
          'font-family': 'Fertigo Pro',
          'font-size':'35px',
          'font-weight':'bold',
          'margin-top':'40px',
          'margin-left':'20px',
          'margin-right':'20px',
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
          'background-color': '#018786',
          '-webkit-appearance': 'button',
          cursor: 'pointer',
          'margin-top': '40px',
          'margin-bottom': '10px'
        });

        //Close button
        $('#closeBtn').css({
          position: 'absolute',
          top: '5px',
          right: '5px',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          'background-color': 'white',
          'border-radius': '20px',
          padding: '5px',
          cursor: 'pointer'
        });
  
      };
  
      summonModal();
    };
  
    /////////////////////////////
    // Event Listeners
    ////////////////////////////
    
    $('body').on('click', '#getDealBtn', function() {
      // $('#box').css('display', 'none');
      window.location.href = "https://admin.safeweb.app/signup?lang=vi";
    });

    $('body').on('click', '#closeBtn', function() {
      $('#box').remove()
      $('#box').css('display', 'none');
    });

    dealTime();
  
  });