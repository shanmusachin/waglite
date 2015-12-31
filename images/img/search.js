  $("#searchterm").keyup(function(e){
    var q = $("#searchterm").val();
    $.getJSON("/Users/nagarajan_s/Desktop/imagesforwalgreenslite/data.json",
    {
      srsearch: q,
      action: "query",
      list: "search",   
      format: "json"
    },
    function(data) {
      console.info();
      $("#results").empty();
      $("#results").append("<p>Results for <b>" + q + "</b></p>");
      $.each(data, function(i, item){
        console.info('fdsfdsfdsfdsf',item);
      $("#results").append(item.name);
      });
    });
  });