const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",      
    ];

    const expected = [
      "Властелин Колец",      
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });


  it("Books names should be sorted in ascending order with duplicate names", () => {  //Повторяющиеся имена
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Властелин Колец",
    ];

    const expected = [
      "Властелин Колец",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Books names should be sorted already sorted books", () => {  //Уже отсортирован
    const input = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const expected = [      
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  
  it("A test for book titles without input data", () => {   //Тест без входных данных
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });  

  
  it("Books names should be sorted with an error", () => {   //Тест с ошибкой
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",         
    ];
  
    const expected = [      
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",       
    ];
  
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});