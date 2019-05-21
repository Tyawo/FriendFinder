var config = {
    ".choice-select": {},
    ".choice-select-deselect": {
        allow_single_deselect: true
    },
    ".choice-select-no-single": {
        disable_search_thresold: 10
    },
    ".choice-select-no-results": {
        no_results_text:"Ops, nothing found!"
    },
    ".choice-select-width": {
        width: "95%"
    }
};

// Grab user input and store them
$("#submit").on("click", function (event) {
    event.preventDefault();
   
    var userData = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),            
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val(),
        ]
    };


    // return .map(math.abs(a[i] - b[i]));
    // post the data to the friends API;
    $post("/api/friends", userData, (data) =>{
        // grab the results from the AJAX post so name and photo of the match are displayed
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the result with the best match
        $("#results-modal").modal("toggle");

    });

    });
    