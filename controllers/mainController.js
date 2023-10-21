const mainController = {

    
    requestRecorder(req, res, next) {
     
        logs.push({ 
            date: Date(),
            ip: req.ip,
            path: req.path
        })
        console.log(`[${Date()} ${req.ip}] ${req.path}`); 
        next();
    },

    homePage(req, res) {
        res.render('index'); 
    },

    getOneGame(req, res, next) {
    
        console.log(req.params.gamename);
      
        const found = gamesData.find((element) => element.name.toLowerCase() === req.params.gamename.toLowerCase());  
        console.log(found);

        
        if (found === undefined) { 
            next();
        } else { 
            res.render(found.name, {
                currentGame: found
            }) 
        }
    },

    pageNotFound(req, res) {
        res.render('404');
    }

}


module.exports = mainController;