$(function() {

   $.ajax({
    url: 'https://www.codeschool.com/users/benjaminpetrieux.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response


    $.each(response.courses.completed, function(course,element) {
    	console.log(element.url);
    	$('#badges').append('<div class="course"><h3>'+ element.title +'</h3><img src="'+ element.badge+'" alt="" /><a class="btn btn-primary" href="'+ element.url +'" target="_blank">See Course</a></div>');
});

    }
  });

});
