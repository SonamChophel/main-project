// search function for doctor
$(document).ready(function(){    
    var doctable= $('#docTable').DataTable({
      dom: 'Blfrtip',
    
      buttons: [ 
        {
          extend: 'collection',
          text: 'Export',
          buttons: [
              'copy',
              'excel',
              'csv',
              'pdf',
              'print'
          ]
      }
      ]
  });
     
  
    $('#docSearch').on('keyup',function(){
      doctable.search($(this).val()).draw();
    });
  });
  
  // search function for receptionist
  $(document).ready(function(){    
    var table= $('#repTable').DataTable({
      dom: 'Blfrtip',
      buttons: [ 
        {
          extend: 'collection',
          text: 'Export',
          buttons: [
              'copy',
              'excel',
              'csv',
              'pdf',
              'print'
          ]
      }
      ]
    });
      
      $('#repSearch').on('keyup',function(){
        table.search($(this).val()).draw();
  });
      
  });
  
  // search function for labtechnician
  $(document).ready(function(){    
    var table= $('#labTable').DataTable({
      dom: 'Blfrtip',
      buttons: [ 
        {
          extend: 'collection',
          text: 'Export',
          buttons: [
              'copy',
              'excel',
              'csv',
              'pdf',
              'print'
          ]
      }
      ]
    });
      
      $('#labSearch').on('keyup',function(){
        table.search($(this).val()).draw();
  });
      
  });
  
  
  // search function for patient
  $(document).ready(function(){    
    var table= $('#patTable').DataTable({
      dom: 'Blfrtip',
      buttons: [ 
        {
          extend: 'collection',
          text: 'Export',
          buttons: [
              'copy',
              'excel',
              'csv',
              'pdf',
              'print'
          ]
      }
      ]
    });
      
      $('#patSearch').on('keyup',function(){
        table.search($(this).val()).draw();
  });
      
  });
  
  // upload image
  $(document).ready(function() 
  { 
    var readURL = function(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
  
        reader.onload = function (e) {
            $('.avatar').attr('src', e.target.result);
        }
  
        reader.readAsDataURL(input.files[0]);
    }
  }
  
  
  $(".file-upload").on('change', function(){
    readURL(this);
  });
  });
  
  
  //clock and calender
  function clock()
      {
          var hours = document.getElementById('hour');
          var minutes = document.getElementById('minutes');
          var seconds = document.getElementById('seconds');
    
          var h=new Date().getHours();
          var m=new Date().getMinutes();
          var s=new Date().getSeconds();
    
          hours.innerHTML= h;
          minutes.innerHTML= m;
          seconds.innerHTML= s;
    
    
      }
      var interval = setInterval(clock,1000);