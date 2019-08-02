$(document).on('click', '.list-expasion-item', function () {
  var content = $(this).find('.list-expasion-content:first')[0]
  if($(content).css('max-height') != '0px'){
    $(content).css('max-height', "0px");
    return;
  }
  var itens = $(content).find('.list-expasion-content-item');
  $(content).css('max-height', calularTamanho(itens) + "px");

})

function calularTamanho(itens) {
  var total = 0;
  $(itens).each(function (index, elemento) {
    total += parseFloat($(elemento).css('height').replace('px',''));

  })
  return total;
}
