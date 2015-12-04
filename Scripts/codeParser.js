$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#buttonGenerate').on('click', function () {
        var bbFormat = $('input[name=bbCodeFormat]:checked').val();
        var titleTemplate;
        var regexTab;
        var regexSubTab;
        switch (bbFormat) {
            case '1':
                regexTab = /\[tab=((\w| )*)\]/g;
                regexSubTab = /\[subtab=((\w| )*)\]((.|\s)+?((?=\[subtab)|(?=\[\/tabmenu)|(?=\[tab)))/g;
                titleTemplate = '###';
                break;
            case '2':
                regexTab = /\[tab="((.| )*)"\]/g;
                regexSubTab = /\[subtab="((.| )*)"\]((.|\s)+?((?=\[subtab)|(?=\[\/tabmenu)|(?=\[tab)))/g;
                titleTemplate = '"###"';
                break;
            case '3':
                regexTab = /\[tab='((.| )*)'\]/g;
                regexSubTab = /\[subtab='((.| )*)'\]((.|\s)+?((?=\[subtab)|(?=\[\/tabmenu)|(?=\[tab)))/g;
                titleTemplate = "'###'";
                break;
        }
        
        var input = $('#inputArea').val();

        input = input.replace(regexSubTab, '[spoiler=' + titleTemplate.replace('###', '$1') + ']$3[/spoiler]');
        input = input.replace(regexTab, '[h]$1[/h]');
        input = input.replace('[tabmenu]', '').replace('[/tabmenu]', '');
        $('#outputArea').val(input.trim());
    });
});