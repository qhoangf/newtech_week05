const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3000;
const route = require('./routes');
const morgan = require('morgan');
const bodyParser = require('body-parser')
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
const methodOverride = require('method-override')
//Template engine handlebars
const handlebars = exphbs.create({
    helpers: {
        subdirectoryPartial: function (partialPath, options) {
            const partial = exphbs.handlebars.partials[partialPath];
            if (typeof partial === 'function') {
                return new exphbs.handlebars.SafeString(partial(options.hash));
            }
            return '';
        },
    },
});
//
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main', helpers: {} }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));
app.use(express.json());
//
app.use(methodOverride('_method'))
//
app.use(bodyParser.urlencoded({ extended: false, limit: 10000 }));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//Route init
route(app);
//

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`App listening on port https://localhost:${port}`);
});