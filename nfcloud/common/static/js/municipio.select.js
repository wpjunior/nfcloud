(function ($) {
    var MunicipioSelect = function (ufSelect, munSelect) {
        this._init(ufSelect, munSelect);
    };

    MunicipioSelect.prototype._init = function (ufSelect, munSelect) {
        var _this = this;
        this.ufSelect = $(ufSelect);
        this.munSelect = $(munSelect);

        this.ufSelect.change(function (e) {
            var val = $(this).val();
            _this.loadUf(val);
        });

        var val = this.ufSelect.val();

        if (val)
            this.loadUf(val);
    };

    MunicipioSelect.prototype.loadUf = function (uf) {
        var _this = this;
        $.getJSON('.', {'action': 'getMunicipios', 'uf': uf},
                  function (data) {
                      var curVal = _this.munSelect.val();
                      _this.munSelect.empty().append('<option value="">----</option>');

                      for (var _i=0; _i< data.length; _i++) {
                          var m=data[_i];
                          $('<option value="'+m[0]+'">'+m[1]+'</option>').appendTo(_this.munSelect);
                      }

                      if (curVal)
                          _this.munSelect.val(curVal);
                  });
    };

    $.municipioSelect = function (ufSelect, munSelect) {
        var obj = new MunicipioSelect(ufSelect, munSelect);
        return obj;
    }
})(jQuery);