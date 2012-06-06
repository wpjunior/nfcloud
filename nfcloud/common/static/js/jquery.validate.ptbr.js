/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: PT_BR
 */

(function($){
    $.extend(jQuery.validator.messages, {
	required: "<em/><p>Este campo &eacute; requerido.</p>",
	remote: "<em/><p>Por favor, corrija este campo.</p>",
	email: "<em/><p>Por favor, forne&ccedil;a um endere&ccedil;o eletr&ocirc;nico v&aacute;lido.</p>",
	url: "<em/><p>Por favor, forne&ccedil;a uma URL v&aacute;lida.</p>",
	date: "<em/><p>Por favor, forne&ccedil;a uma data v&aacute;lida.</p>",
	dateISO: "<em/><p>Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).</p>",
	number: "<em/><p>Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lida.</p>",
	digits: "<em/><p>Por favor, forne&ccedil;a somente d&iacute;gitos.</p>",
	creditcard: "<em/><p>Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.</p>",
	equalTo: "<em/><p>Por favor, forne&ccedil;a o mesmo valor novamente.</p>",
	accept: "<em/><p>Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.</p>",
	maxlength: jQuery.validator.format("<em/><p>Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres.</p>"),
	minlength: jQuery.validator.format("<em/><p>Por favor, forne&ccedil;a ao menos {0} caracteres.</p>"),
	rangelength: jQuery.validator.format("<em/><p>Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento.</p>"),
	range: jQuery.validator.format("<em/><p>Por favor, forne&ccedil;a um valor entre {0} e {1}.</p>"),
	max: jQuery.validator.format("<em/><p>Por favor, forne&ccedil;a um valor menor ou igual a {0}.</p>"),
	min: jQuery.validator.format("<em/><p>Por favor, forne&ccedil;a um valor maior ou igual a {0}.</p>")
    });
    $.extend($.validator.methods, {
	date: function(value, element) {
            // inicio de preenchimento
            if (value == '__/__/____')
                return true;

	    var check = false;
	    var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	    if( re.test(value)){
	        var adata = value.split('/');
	        var gg = parseInt(adata[0],10);
	        var mm = parseInt(adata[1],10);
	        var aaaa = parseInt(adata[2],10);
	        var xdata = new Date(aaaa,mm-1,gg);
	        if ( ( xdata.getFullYear() == aaaa ) && ( xdata.getMonth () == mm - 1 ) && ( xdata.getDate() == gg ) )
		    check = true;
	        else
		    check = false;
	    } else
	        check = false;

	    return this.optional(element) || check;
	}
    });


    jQuery.validator.addMethod("cnpj", function(cnpj, element) {
        cnpj = jQuery.trim(cnpj);// retira espaços em branco
        // DEIXA APENAS OS NÚMEROS
        cnpj = cnpj.replace('/','');
        cnpj = cnpj.replace('.','');
        cnpj = cnpj.replace('.','');
        cnpj = cnpj.replace('-','');
        
        var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
        digitos_iguais = 1;
        
        if (cnpj.length < 14 && cnpj.length < 15){
            return false;
        }
        for (i = 0; i < cnpj.length - 1; i++){
            if (cnpj.charAt(i) != cnpj.charAt(i + 1)){
                digitos_iguais = 0;
                break;
            }
        }
        
        if (!digitos_iguais){
            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0,tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            
            for (i = tamanho; i >= 1; i--){
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2){
                    pos = 9;
                }
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0)){
                return false;
            }
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0,tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--){
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2){
                    pos = 9;
                }
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1)){
                return false;
            }
            return true;
        }else{
            return false;
        }
    }, "Informe um CNPJ válido."); // Mensagem padrão 

})(jQuery);