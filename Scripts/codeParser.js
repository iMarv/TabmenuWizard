$(function () {
    var BB_FORMAT_TYPES = {
        NoQuotes: 1,
        DoubleQuotes: 2,
        SingleQuotes: 3
    };

    $('#buttonGenerate').on('click', function () {
        var bbFormat = $('input[name=bbCodeFormat]:checked').val();
        var titleTemplate;
        var regexTab;
        var regexSubTab;
        switch (bbFormat) {
            case BB_FORMAT_TYPES.NoQuotes:
                regexTab = /\[tab=((\w|[ äöüÄÖÜ,.\-;:_#'+*!"§$%&/()=?ß^°])*)\]/g;
                regexSubTab = /\[subtab=((\w|[ äöüÄÖÜ,.\-;:_#'+*!"§$%&/()=?ß^°])*)\]((.|\s)+?((?=\[subtab)|(?=\[\/tabmenu)|(?=\[tab)))/g;
                titleTemplate = '###';
                break;
            case BB_FORMAT_TYPES.DoubleQuotes:
                regexTab = /\[tab="((.| )*)"\]/g;
                regexSubTab = /\[subtab="((.| )*)"\]((.|\s)+?((?=\[subtab)|(?=\[\/tabmenu)|(?=\[tab)))/g;
                titleTemplate = '"###"';
                break;
            case BB_FORMAT_TYPES.SingleQuotes:
                regexTab = /\[tab='((.| )*)'\]/g;
                regexSubTab = /\[subtab='((.| )*)'\]((.|\s)+?((?=\[subtab)|(?=\[\/tabmenu)|(?=\[tab)))/g;
                titleTemplate = "'###'";
                break;
        }
        
        var input = $('#inputArea').val();

        input = input.replace(regexSubTab, '[spoiler=' + titleTemplate.replace('###', '$1') + ']$3[/spoiler]')
                     .replace(regexTab, '[h]$1[/h]')
                     .replace('[tabmenu]', '')
                     .replace('[/tabmenu]', '');

        $('#outputArea').val(input.trim());
    });
});