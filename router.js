const { Router } = require('express');
const router = Router(); 

const mainController = require('./controllers/mainController')


let logs = [];


router.use(mainController.requestRecorder)

router.get('/', mainController.homePage)


router.get('/game/:gamename', mainController.getOneGame)

router.get('/404', mainController.pageNotFound);


router.use((req, res) => {
    res.redirect('/404'); 
});


module.exports = router;