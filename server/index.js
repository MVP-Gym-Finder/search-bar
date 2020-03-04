const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./router');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/search', router);

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
