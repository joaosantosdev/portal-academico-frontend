(function(){

    $(window).resize(function(){
        if(innerWidth > 600){
            $('#sidebar').removeClass('sidebar-aberto');
        }
    });
    $(document).on('click','.toggle-btn',(function(){
      sidebarOpenClose();
    }))
  $(document).on('click','.item-sidebar',(function(){
    if(innerWidth <= 600){
      sidebarOpenClose();
    }


  }))
    function sidebarOpenClose(){

      if(innerWidth > 600){
        $('#sidebar').toggleClass('sidebar-fechado');
        $('.content-main').toggleClass('content-fechado');
        $('#sidebar').removeClass('sidebar-aberto');

      }else{
        $('#sidebar').removeClass('sidebar-fechado');
        $('.content-main').removeClass('content-fechado');
        $('#sidebar').toggleClass('sidebar-aberto');

      }
    }
    $(document).on('click','.item-sidebar',function(){
        var itens = $('.item-sidebar');
        itens.each(function(index,item){
            $(item).removeClass('item-sidebar-selecionado');
        })

        $(this).addClass('item-sidebar-selecionado');
      if(innerWidth <= 600) {
        sidebarOpenClose();
      }
    })

  var readURL = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.img-perfil').attr('src', e.target.result);
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
  $(document).on('change',".file-img-perfil", function(){
    readURL(this);
  });

})()
