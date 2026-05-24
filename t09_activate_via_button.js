<Document html>

  
<html>
<head>
    <title>Task 9</title>
</head>
<body>

    <h1>Task 9</h1>

    <!-- Start Button -->
    <button id="startButton">START</button>

    <!-- Output Area -->
    <div id="spaceForJavaScriptOutput"></div>

    <p>Open the console <code>(Ctrl + Shift + I)</code></p>

    <script>
        /**************************
        Name of Task 9
        **************************/

        console.log("Task 9");
        console.log("Semiti");
        console.log(15);

        // Variables
        const startButton = document.getElementById("startButton");

        // Button Event
        startButton.addEventListener("click", start);

        /**********************
        Functions
        **********************/

        function start() {
            console.log("Start button was pressed!");

            alert("Game Started!");

            let JavaScript = prompt("Malo e lelei! My name is Semiti.");

            console.log("User typed: " + JavaScript);

            document.getElementById("spaceForJavaScriptOutput").innerHTML =
                "Hello " + JavaScript + "!";
        }

        console.log("JavaScript file loaded successfully!");
    </script>

</body>
</html>