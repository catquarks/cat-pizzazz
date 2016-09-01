
var button = $('input#submit');

button.on('click', function(){
  var baseURL = 'http://catfacts-api.appspot.com/api/facts?number=';
  var catQuery = $('#get_facts').val()
  var resultsList = $('#results')
  cat_pic.src="http://thecatapi.com/api/images/get?format=src&type=jpg&size=med&" + new Date().getTime();

    $.ajax({
      url: baseURL + catQuery,
      method: 'GET',
      success: function(response, status) {
        var catFacts = JSON.parse(response).facts;

        $('span#new_facts').css('background', 'none').css('font-weight', 'normal')


        for (var i = 0; i < catFacts.length; i++) {
          resultsList.prepend(`<li><span id="new_facts" style="background: yellow;">${catFacts[i]}</span></li>`)
        }

        $('input#get_facts').val("")

        if (catQuery < 5){
          button.val("mrow?")
        }else if (catQuery > 50){
          button.val("Me-wow!")
        }else{
          button.val("PURRRRRRRRRR!")
        }

        var numOfFacts = $('#results li').length
        $('#catchphrase')[0].innerText = `ME-WOW! You now know ${numOfFacts} facts!`       

      }
    })
})
