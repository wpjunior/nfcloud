(function ($) {
    $(document).ready(function (e) {
        $('#id_cnpj').mask('99.999.999/9999-99');
        $('#id_cep').mask('99999-999');
        $('#id_fone1, #id_fone2').mask('(99) 9999-9999');
        $.municipioSelect('#id_uf', '#id_municipio');

        // procura pelos fields requiridos e atribui o attributo para validação
        $('.field.required').each(function (i, elem) {
            $(elem).find('input, select').addClass('required');
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


        $('form').validate({
    	    errorElement: "div",
            rules: {
                cnpj: {cnpj: true}
            }
        });
    });
})(jQuery);