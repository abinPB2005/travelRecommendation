<!DOCTYPE html>
<html>
<head>
    <title>Travel Recommendation</title>

    <style>
        body{
            margin: 0;
            font-family: Arial, sans-serif;
        }

        nav{
            background-color: #0a3d4d;
            padding: 20px;
        }

        nav h1{
            display: inline;
            color: white;
            font-style: italic;
            margin-right: 100px;
        }

        nav a{
            color: white;
            text-decoration: none;
            margin: 20px;
            font-weight: bold;
        }

        .search{
            float: right;
        }

        input{
            padding: 8px;
            border-radius: 20px;
            border: none;
        }

        button{
            padding: 8px 15px;
            background-color: teal;
            color: white;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>

<body>

    <nav>
        <h1>TravelBloom</h1>

        <a href="home.html">Home</a>
        <a href="aboutUs.html">About Us</a>
        <a href="contactUs.html">Contact Us</a>

        <span class="search">
            <input type="text" id="searchInput" placeholder="Search Recommendation">
            <button id= "searchBtn">Search</button>
            <button type="reset" id="clearBtn">Clear</button>
            <div id="results"></div>
        </span>
    </nav>
    <script src ="./travel_recommendation.js"></script>

</body>
</html>