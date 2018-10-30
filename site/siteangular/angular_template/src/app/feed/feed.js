(function($) {

  $(function(){
    $(".btn-toggle").click(function(e){
      alert(xxx);
        e.preventDefault();
        $(".card").hide(); //Oculta todos elemento com classe grupo
        
        el = $(this).data('element');
        $(el).toggle(); //Exibe o elemento clicado.
    });
  });
})(jQuery);
