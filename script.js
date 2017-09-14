window.onload = function(e){
    console.log("window.onload");


    // var counter = 5;
    // var interval = setInterval(function() {
    // counter--;
    // // Display 'counter' wherever you want to display it.
    // if (counter < 1) {
    //     // Display a login box
    //     clearInterval(interval);
    //   }
    // }, 1000);
    //
    // setTimeout(function(){ alert("Hello"); }, 3000);


    setTimeout(function(){
      console.log("setTimeout");
      $('#myModal').css('visibility', 'visible');
    }, 3000);

    $('#closeModalBtn').on('click', closeModal);
    function closeModal() {
      console.log("closeModal");
      $('#myModal').css('visibility', 'hidden');
    }

}
