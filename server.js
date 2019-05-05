import Express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);

app.listen(3000, () => console.log('Application started on port 3000'));
