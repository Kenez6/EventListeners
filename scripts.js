$('#button1').on('click', () => {
    $( "p" ).append( "<p>You clicked button 1</p>" );
  });
  $('#button2').on('click', () => {
    $( "#button1" ).append("is now clicked");
  });
  $('#button3').on('click', () => {
    $( "#button1" ).css("background-color" , "red")
    $( "#button2" ).css("background-color" , "green")
    $( "#button3" ).css("background-color" , "blue")
  });