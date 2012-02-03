var HNOptions = {
    init: function() {
        $('.slider').click(function(){
            var el = $(this);
            if (el.attr("class") == "slider on") {
                HNOptions.switch_off(el);
            } else if (el.attr("class") == "slider off") {
                HNOptions.switch_on(el);
            }
        })
    },
    
    switch_on: function(el) {
        var switcher = el.find('.switch'),
        	text	 = el.find('.text'),
            check    = el.find('input');
        text.html("on");
        el.removeClass("off");
        el.addClass("on");
        check.attr('checked','checked');
        
        var name = el.attr("id").replace('slider_', '');
        localStorage[name] = check.is(':checked');
    },
    
    switch_off: function(el) {
        var switcher = el.find('.switch'),
            text     = el.find('.text'),
            check    = el.find('input');
        text.html("off");
        el.removeClass("on");
        el.addClass("off");
        check.removeAttr('checked');
        
        var name = el.attr("id").replace('slider_', '');
        localStorage[name] = check.is(':checked');
    }
}

var HNSettings = {
    
    check_shortcuts: function(){
        var value = localStorage["shortcuts"];
        if (value == 'true') {
            return true;
        } else {
            return false;
        }
    },
    
    check_hnheat: function(){
        var value = localStorage["hnheat"];
        if (value == 'true') {
            return true;
        } else {
            return false;
        }
    },
    
    load_options: function(){
        chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
            if (request.method == "get_options")
              sendResponse({status: localStorage});
            else
              sendResponse({});
        });
        // Shotcuts
        if (HNSettings.check_shortcuts()) {
            HNOptions.switch_on($('#slider_shortcuts.slider'));
        } else {
            HNOptions.switch_off($('#slider_shortcuts.slider'));
        }
        // HNHeat
        if (HNSettings.check_hnheat()) {
            HNOptions.switch_on($('#hnheat.slider'));
        } else {
            HNOptions.switch_off($('#hnheat.slider'));
        }
    }

}