const Spiderman = require("./../app/spiderman")
describe("Unit Test for Spiderman class", () => {
    test('1) Create an Spiderman object', () => {
      const andrewGarfiel = new Spiderman("Spiderman Sony", 31, "Andrew Garfiel", 2, "Sony")
      expect(andrewGarfiel.name).toBe("Spiderman Sony");
      expect(andrewGarfiel.age).toBe(31);
      expect(andrewGarfiel.actor).toBe("Andrew Garfiel");
      expect(andrewGarfiel.movies).toBe(2);
      expect(andrewGarfiel.studio).toBe("Sony");      
    });
    test('2) Use the method getInfo()', () =>{
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey I'm Tom Holland from Marvel studio")
    });
  })