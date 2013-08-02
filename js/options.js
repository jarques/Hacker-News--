// Saves options to Chrome's local storage.
function save_options() {
  var select = document.getElementById("keybindings");
  var choice = select.children[select.selectedIndex].value;
  
  var storageArea = chrome.storage.local;
  storageArea.set({keybindings:choice}, notify_success());
}

// Brings up the users prefence (if saved)
function restore_options() {
  var storageArea = chrome.storage.local;
  storageArea.get("keybindings", function(data) {
    if (!data.keybindings) {
      return;
    }
    choice = data.keybindings;
    var select = document.getElementById("keybindings");
    for (var i = 0; i < select.children.length; i++) {
      var child = select.children[i];
      if (child.value == choice) {
        child.selected = "true";
        break;
      }
    }
  });
}

// Update status to let user know options were saved successfully or not.
function notify_success() {
  var status = document.getElementById("status");

  if (chrome.extension.lastError) {
    status.innerHTML = 'An error occurred: ' + chrome.extension.lastError.message;
    return;
  }

  status.innerHTML = "Options Saved";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);