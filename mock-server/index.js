const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

const info = {
  'appName': 'Angular Authentication Mock Server',
  'startUp': new Date()
};

const products = [
  {
    productId: 1,
    productName: 'Angular Best Practices',
    introductionDate: '2018-02-01T00:00:00',
    price: 249.00,
    url: 'https://www.pluralsight.com/courses/best-practices-angular',
    categoryId: 3
  },
  {
    productId: 2,
    productName: 'Angular Services',
    introductionDate: '2017-11-03T00:00:00',
    price: 149.00,
    url: 'https://www.pluralsight.com/courses/angular-services',
    categoryId: 2
  },
  {
    productId: 3,
    productName: 'Angular Reactive Forms',
    introductionDate: '2017-04-22T00:00:00',
    price: 149.00,
    url: 'https://www.pluralsight.com/courses/angular-2-reactive-forms',
    categoryId: 2
  },
  {
    productId: 4,
    productName: 'Angular: Getting Started',
    introductionDate: '2016-01-15T00:00:00',
    price: 49.00,
    url: 'https://www.pluralsight.com/courses/angular-2-getting-started-update',
    categoryId: 1
  }
];

const auth_users = [
  {
    userName: 'AlexP',
    bearerToken: 'daf3q03fjaofa',
    isAuthenticated: true,
    canAccessProduct: true,
    canAddProduct: true,
    canEditProduct: false,
    canAccessCategories: true,
    canAddCategory: false
  },
  {
    userName: 'StefanP',
    bearerToken: 'd32323fjaofa',
    isAuthenticated: true,
    canAccessProduct: false,
    canAddProduct: false,
    canEditProduct: false,
    canAccessCategories: true,
    canAddCategory: true
  }
];

const handleAuthentication = (req, res) => {
  if (!req.body || !req.body.userName) {
    return res.send(400);
  }

  const user = auth_users.find(user => user.userName === req.body.userName);
  if (!!user) {
    res.send(user);
  } else {
    res.send(404);
  }
};

app.get('/', (req, res) => res.send(info));
app.get('/products', (req, res) => res.send(products));
app.get('/security', (req, res) => handleAuthentication(req, res));

app.listen(3000, () => console.log('Angular Authentication Mock Server runs on port 3000!'));
