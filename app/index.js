$("#serviceChoice").click(function(event) {
    event.preventDefault();
    visitPage("serviceChoice");
});

$.ready = function(){
    // remember last visited page
    lastVisitedPage = window.localStorage.getItem("lastVisitedPage");
    if(lastVisitedPage == null || lastVisitedPage == "") {
        lastVisitedPage = "serviceChoice";
        window.localStorage.setItem("lastVisitedPage", lastVisitedPage);
    }
    // load correct resource, based on last visited page
    visitPage(lastVisitedPage);
}

function visitPage(page) {
    switch(page) {
        case "serviceChoice":
            $("#main").load("templates/serviceChoice.html");
            $.get("settings/serviceChoice.json", function(response) {
                pageSettings = response;
                $(document).prop("title", pageSettings["title"]);
                $.get("scripts/serviceChoice.js");
            });
            window.localStorage.setItem("lastVisitedPage", page);
            break;
        case "serviceHetzner":
            $("#main").load("templates/serviceHetzner.html");
            $.get("settings/serviceHetzner.json", function(response) {
                pageSettings = response;
                $(document).prop("title", pageSettings["title"]);
                $.get("scripts/serviceHetzner.js");
            });
            window.localStorage.setItem("lastVisitedPage", page);
            break;
        case "serviceAmazon":
            $("#main").load("templates/serviceAmazon.html");
            $.get("settings/serviceAmazon.json", function(response) {
                pageSettings = response;
                $(document).prop("title", pageSettings["title"]);
                $.get("scripts/serviceAmazon.js");
            });
            window.localStorage.setItem("lastVisitedPage", page);
            break;
    }
}
