import bodyParser from 'body-parser';
import path from 'path';
import controller from '../controller';


const router = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/index.html'));
    });
    app.get('/users', (req, res) => {
        controller.readController.readData('userModel', {}, res);
    });
    app.post('/user', function (req, res) {
        controller.createController.insertData('userModel', req.body, res);
    });
}

export default router;
