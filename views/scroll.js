$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  $(function(){
    
    var pagePositon = 0,
        sectionsSeclector = 'section',
        $scrollItems = $(sectionsSeclector),
        offsetTolorence = 30,
        pageMaxPosition = $scrollItems.length - 1;
    
    //Map the sections:
    $scrollItems.each(function(index,ele) { $(ele).attr("debog",index).data("pos",index); });

    // Bind to scroll
    $(window).bind('scroll',upPos);
    
    //Move on click:
    $('#arrow a').click(function(e){
        if ($(this).hasClass('next') && pagePositon+1 <= pageMaxPosition) {
            pagePositon++;
            $('html, body').stop().animate({ 
                  scrollTop: $scrollItems.eq(pagePositon).offset().top
            }, 600);
        }
        if ($(this).hasClass('previous') && pagePositon-1 >= 0) {
            pagePositon--;
            $('html, body').stop().animate({ 
                  scrollTop: $scrollItems.eq(pagePositon).offset().top
              }, 600);
            return false;
        }
    });
    
    //Update position func:
    function upPos(){
       var fromTop = $(this).scrollTop();
       var $cur = null;
        $scrollItems.each(function(index,ele){
            if ($(ele).offset().top < fromTop + offsetTolorence) $cur = $(ele);
        });
       if ($cur != null && pagePositon != $cur.data('pos')) {
           pagePositon = $cur.data('pos');
       }                   
    }
    
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }