Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@AvidSquid 
1
0 1 lawrencecheng123/lawrencecheng123.github.io
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
lawrencecheng123.github.io/UpdatedPersonalWebsiteJavascript.js
@lawrencecheng123 lawrencecheng123 Add files via upload
cfa8e53 on Dec 22, 2016
80 lines (68 sloc)  2.62 KB
    
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->                                                                                        
    src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"
    src="parallax.js"                                                 
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    src="js/bootstrap.min.js"
    src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"
    <!--src='https://code.jquery.com/jquery-2.1.1.min.js'-->

      //To generate the parallax effect
       $(document).ready(function(){
       $('.parallax').parallax();
      });


      //To generate the carousel effect
       $('.carousel.carousel-slider').carousel({full_width: true});
  

  //For the smooth scrolling technique
    $(document).ready(function() {
    function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
    }
    var locationPath = filterPath(location.pathname);
    var scrollElem = scrollableElement('html', 'body');
   
    $('a[href*=#]').each(function() {
      var thisPath = filterPath(this.pathname) || locationPath;
      if (  locationPath == thisPath
      && (location.hostname == this.hostname || !this.hostname)
      && this.hash.replace(/#/,'') ) {
        var $target = $(this.hash), target = this.hash;
        if (target) {
          var targetOffset = $target.offset().top;
          $(this).click(function(event) {
            event.preventDefault();
            $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
              location.hash = target;
            });
          });
        }
      }
    });
 
    // use the first element that is "scrollable"
    function scrollableElement(els) {
      for (var i = 0, argLength = arguments.length; i <argLength; i++) {
        var el = arguments[i],
            $scrollElement = $(el);
        if ($scrollElement.scrollTop()> 0) {
          return el;
        } else {
          $scrollElement.scrollTop(1);
          var isScrollable = $scrollElement.scrollTop()> 0;
          $scrollElement.scrollTop(0);
          if (isScrollable) {
            return el;
          }
        }
      }
      return [];
    }
 
});
    $(".contentContainer").css("height", $(window).height());


       $(document).ready(function(){
    $('.button').click(function(){
        $('#fade-wrapper').fadeIn();
    });
    $('#fade-wrapper').click(function(){
        $(this).fadeOut();
    });
});
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
