import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 1, name: 'Front-End Web Development: The Big Nerd Ranch Guide', author: 'author1', pages: 100, publish: 662083200000},
      { id: 2, name: 'CSS3: The Missing Manual', author: 'author2', pages: 200, publish: 974678400000},
      { id: 3, name: 'JavaScript Patterns', author: 'author3', pages: 300, publish: 662083200000 },
      { id: 4, name: 'HTML5: The Missing Manual', author: 'author4', pages: 400, publish: 974678400000},
      { id: 5, name: 'Sass and Compass in Action', author: 'author5', pages: 500, publish: 1496793600000},
      { id: 6, name: 'JavaScript: The Good Parts', author: 'author6', pages: 600, publish: 662083200000 },
      { id: 7, name: 'Front-End Tooling with Gulp, Bower, and Yeoman', author: 'author7', pages: 700, publish: 1496793600000},
      { id: 8, name: 'Responsive Web Design with HTML5 and CSS3', author: 'author8', pages: 800, publish: 974678400000},
      { id: 9, name: 'Don’t Make Me Think', author: 'author9', pages: 900, publish: 662083200000},
      { id: 10, name: 'HTML & CSS', author: 'author10', pages: 910, publish: 1496793600000},
      { id: 11, name: 'Flexible Web Design', author: 'author11', pages: 920, publish: 662083200000},
      { id: 12, name: 'Secrets of the JavaScript Ninja', author: 'author12', pages: 930, publish: 1496793600000},
      { id: 13, name: 'High Performance Web Sites', author: 'author21', pages: 9400, publish: 662083200000},
    ];
    return {books};
  }
}
