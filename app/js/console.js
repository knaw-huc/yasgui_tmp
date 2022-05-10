// shared object
var own_layer = {
    url: "",
    label: "",
    used: false
}

function fill_own_layer(){
    own_layer.url = document.getElementById('url').value;
    own_layer.label = document.getElementById('url_label').value;
    own_layer.used = true;
}