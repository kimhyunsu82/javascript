(function(factory){
  //console.log(typeof factory);
  if(typeof factory != "undefined"){
   // $(window).jstree("abc");
   console.log(factory);
  }else{
    throw ("not jquery");
  }
}((function($,window){ 
  
  $.fn.jstree=function(element){
     $(this).append(element+"<br/>");
     //return this; //chaning
     console.log(this);
     return this;
  };
  //test
  return {
    $:$,
    window:window
  };
  
  
})($,window)));