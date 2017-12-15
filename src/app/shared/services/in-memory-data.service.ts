import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 1, name: 'book1', author: 'author1', pages: 100, publish: 662083200000},
      { id: 2, name: 'book2', author: 'author2', pages: 200, publish: 974678400000},
      { id: 3, name: 'book3', author: 'author3', pages: 300, publish: 662083200000 },
      { id: 4, name: 'book4', author: 'author4', pages: 400, publish: 974678400000},
      { id: 5, name: 'book5', author: 'author5', pages: 500, publish: 1496793600000},
      { id: 6, name: 'book6', author: 'author6', pages: 600, publish: 662083200000 },
      { id: 7, name: 'book7', author: 'author7', pages: 700, publish: 1496793600000},
      { id: 8, name: 'book8', author: 'author8', pages: 800, publish: 974678400000},
      { id: 9, name: 'book9', author: 'author9', pages: 900, publish: 662083200000},
      { id: 10, name: 'book10', author: 'author10', pages: 910, publish: 1496793600000},
      { id: 11, name: 'book11', author: 'author11', pages: 920, publish: 662083200000},
      { id: 12, name: 'book12', author: 'author12', pages: 930, publish: 1496793600000},
      { id: 13, name: 'book13', author: 'author21', pages: 9400, publish: 662083200000},
    ];
    return {books};
  }
}
