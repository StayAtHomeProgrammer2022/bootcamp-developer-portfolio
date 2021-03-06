const Portfolio = function() {
    function makeWords() {
        var words = [{
            text: "data analysis",
            weight: 11
        }, {
            text: "css3",
            weight: 10
        }, {
            text: "javascript",
            weight: 9
        }, {
            text: "analytical thinking",
            weight: 8
        }, {
            text: "design skills",
            weight: 7
        }, {
            text: "html",
            weight: 11
        }, {
            text: "management",
            weight: 8
        }, {
            text: "mathmatics",
            weight: 9
        }, {
            text: "medical coding",
            weight: 8
        }];
        return words;
    }

    function makeWordCloud(words) {
        $('.teaching-domains').jQCloud(words, { delay: 120 });
    }

    function displayWordCloud() {
        var count = 1;
        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 2700; // set to whatever you want it to be
            var words = makeWords();
            if (y_scroll_pos > scroll_pos_test && count <= 1) {
                makeWordCloud(words);
                count++;
            }
        });
    }

    function designForm() {
        $("#my-modal form").addClass("my-form");
    }

    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: [
                "am a Full-Stack Web Developer.", "love everything about code.", "am currently studying code online", "solve problems."
            ],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 1,
            contentType: 'text',
            callback: function() {
                $("#writing-text").css({ "color": "#71879a", "background-color": "#b1c5d4" });
            },
            preStringTyped: function() {},
            onStringTyped: function() {}
        });
    }

    return {
        displayWordCloud: displayWordCloud,
        typeAnimation: typeAnimation
    }

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
