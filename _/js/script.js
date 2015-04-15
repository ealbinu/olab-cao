$(function(){
	
	//SIDEBARS
	$("#left-menu-toggle").click(function(e) {
			e.preventDefault();
			$("#all").toggleClass("toggled-left");
	});
	$("#right-menu-toggle").click(function(e) {
			e.preventDefault();
			$("#all").toggleClass("toggled-right");
	});
	
	//SCROLLABLE
	if($('.scrollable').length>0){
		$('.scrollable').perfectScrollbar();
	}
    
	
	//DatePicker
	if($('.datepicker').length>0){
		$('.datepicker').datepicker();
	}

	
	//Gallery modal box
	
	if($('.imgbox').length>0){
		$('.imgbox').swipebox();
	}
	

	//Row selection on tables
	if( $('.onCheckRow').length>0 ){
		$('.onCheckRow').change(function(){
			console.log( $(this).prop('checked') );
			if($(this).prop('checked')){
				$(this).parent().parent().addClass('bg-select');
			} else {
				$(this).parent().parent().removeClass('bg-select');
			}
		});
	}
	
	
	//Sliders jqueryui - personalizar utilizando data-'s desde html
	
	if($('.slider-range-min').length>0){
		$('.slider-range-min').each(function(){
			var _this = $(this);
			var target = _this.attr('data-target');
			var prefix = _this.attr('data-prefix');
			var postfix = _this.attr('data-postfix');
			var maxP = _this.attr('data-max')*1;
			var minP = _this.attr('data-min')*1;
			_this.slider({
				range: "min",
				min: minP,
				max: maxP,
				slide: function( event, ui ) {
					$( target ).html( prefix + ui.value + postfix);
				}
			})
		});
		
	}
	
	// Funcionamiento de tooltip
	if($("[data-toggle='tooltip']").length>0){
		$("[data-toggle='tooltip']").tooltip();
	}
	
	//Elegir directivos
	$('.elegirDirectivos').multiSelect({
  selectableHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='Buscar'>",
  selectionHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='Buscar'>",
  afterInit: function(ms){
    var that = this,
        $selectableSearch = that.$selectableUl.prev(),
        $selectionSearch = that.$selectionUl.prev(),
        selectableSearchString = '#'+that.$container.attr('id')+' .ms-elem-selectable:not(.ms-selected)',
        selectionSearchString = '#'+that.$container.attr('id')+' .ms-elem-selection.ms-selected';

    that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
    .on('keydown', function(e){
      if (e.which === 40){
        that.$selectableUl.focus();
        return false;
      }
    });

    that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
    .on('keydown', function(e){
      if (e.which == 40){
        that.$selectionUl.focus();
        return false;
      }
    });
  },
  afterSelect: function(){
    this.qs1.cache();
    this.qs2.cache();
  },
  afterDeselect: function(){
    this.qs1.cache();
    this.qs2.cache();
  }
});
	
});


