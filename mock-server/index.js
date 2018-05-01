const express = require('express');
const app = express();

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

app.get('/', (req, res) => res.send(info));
app.get('/products', (req, res) => res.send(products));

app.listen(3000, () => console.log('Angular Authentication Mock Server runs on port 3000!'));
