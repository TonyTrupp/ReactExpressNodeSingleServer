var express = require('express'),
    router = express.Router(),
    fetch = require('node-fetch');  

/* GET home page. */
router.get('/weather', function(req, res, next) { 

	//search by keyword 
	if( !req.query.location ){  
		throw new Error("No location query string parameter defined for API call.");  
	}

  const apiKey = "c6579e0dd0edac63998c4a3f9a2ba767";
  const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?mode=json&id=mykey&appid="+ apiKey + "&q=" + encodeURIComponent(req.query.location) ; 

  fetch(apiUrl)
    .then(res => res.json()) 
    .then(json => { 

      if(!json){
        //Error 
        res.writeHead(500, 
          {"Content-Type":"text/json",  
          "Cache-Control": "no-cache, no-store, must-revalidate",  
          "Pragma": "no-cache", 
          "Expires": 0 
        });  
        res.write({error:"Invalid API response", errorCode:"INVALID"});
        res.end();

      } else { 

        //SUCCESS! 
        res.writeHead(200, 
          {"Content-Type":"text/json",  
          "Cache-Control": "no-cache, no-store, must-revalidate",  
          "Pragma": "no-cache", 
          "Expires": 0 
        });  
        res.write(JSON.stringify( json ));
        res.end();
      };
    }); 
});

module.exports = router;
