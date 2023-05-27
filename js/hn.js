/*
*
*	HN+ for Chrome v2.0
*	by @jarques
*
*/
var HN = {
	init: function() {
        var html = '<label class="switch"><input type="checkbox" id="mode"><span class="slider"></span></label>';
        document.getElementById("hnmain").innerHTML += html;

        const modeBtn = document.getElementById('mode');
        const mode = window.localStorage.getItem('mode');

        this.setColorMode(mode, modeBtn);
        this.getModeData(mode, modeBtn);
	},

    setColorMode: function(mode, modeBtn) {
        //const mode = window.localStorage.getItem('mode');
        if (mode == 'dark') {
            modeBtn.checked = true;
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
        }
        if (mode == 'light') {
            modeBtn.checked = false;
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
        }
    },

    getModeData: function(mode, modeBtn) {
        //const modeBtn = document.getElementById('mode');
        modeBtn.onchange = (e) => {
        if (modeBtn.checked === true) {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
            window.localStorage.setItem('mode', 'dark');
        } else {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
            window.localStorage.setItem('mode', 'light');
        }
        }
    }
	
}

HN.init();
