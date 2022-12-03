export function func_snackbar(reference, message) {
  var x = reference.current.querySelector('#snackbar');
  x.innerHTML = message;
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
};

export function func_savedata(data, name){
  var string_data = JSON.stringify(data);
  var file = new Blob([string_data],{type:'text'});
  var anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(file);
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(anchor.href);
};

export function func_loaddata(element_get, putLocation){
  var file = element_get.files[0];
  var reader = new FileReader();

  reader.onloadend = function(){
    var load = JSON.parse(reader.result)[0];
    putLocation = load;
  };
  reader.readAsText(file);
};





