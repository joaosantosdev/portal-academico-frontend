(function(){
    selecionarItemSidebar();
    $(window).resize(function(){
        if(innerWidth > 600){
            $('#sidebar').removeClass('sidebar-aberto');
        }
    });
    $(document).on('click','.toggle-btn',(function(){
        if(innerWidth > 600){
            $('#sidebar').toggleClass('sidebar-fechado');
            $('#content-main').toggleClass('content-fechado');
            $('#sidebar').removeClass('sidebar-aberto');

        }else{
            $('#sidebar').removeClass('sidebar-fechado');
            $('#content-main').removeClass('content-fechado');
            $('#sidebar').toggleClass('sidebar-aberto');

        }
    }))

    $(document).on('click','.item-sidebar',function(){
        selecionarItemSidebar();
    })

    function selecionarItemSidebar(){
      
        var itens = $('.item-sidebar');
        itens.each(function(index,item){
            $(item).removeClass('item-sidebar-selecionado');
        })
        
        $(this).addClass('item-sidebar-selecionado');
    }
})()
