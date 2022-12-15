export function func_snackbar(reference, message) {
  try{
    var x = reference.current.querySelector('#snackbar');
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }catch{setTimeout(()=>{
    var x = reference.current.querySelector('#snackbar');
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  },50000)}
  
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

export function func_loaddata(elem, putLocation){
  var file = elem.files[0];
  var reader = new FileReader();

  reader.onloadend = function(){
    var load = JSON.parse(reader.result)[0];
    putLocation(load);
  };
  reader.readAsText(file);
};

export function convertFrom24To12Format(time24){
  try{
    const [sHours, minutes] = time24?.match(/([0-9]{1,2}):([0-9]{2})/)?.slice(1);
    const period = +sHours < 12 ? 'AM' : 'PM';
    const hours = +sHours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
  }catch{};
};

export function cleanArray(array){
  try{
    let cleanArray = array.map(item=>item.trim());
    let filterArray = cleanArray.filter(item=>item!=='');
    let rmSpacesArray = filterArray
        .map(item=>item.split(' ')
          .map(item=>item.trim())
          .filter(item=>item!=='')
          .join(' ')
        );
    return rmSpacesArray
  }catch(err){console.log('cleanArray:'+err)}
};

export function stringBase64File(elem, putLocation){
  try{
    let file = elem.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
      putLocation(reader.result)
    }
    reader?.readAsDataURL(file);
  }catch(err){console.log('stringBase64File:'+err)}
};






