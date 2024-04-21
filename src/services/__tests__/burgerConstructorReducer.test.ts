import burgerConstructorReducer, {
  addIngredient,
  moveDownIngredient,
  moveUpIngredient,
  removeIngredient
} from '../burger-constructor/burger-constructor-slice';
import {
  addIngredientForTest,
  bun,
  main,
  sauce
} from '../mockData/burgerConstructor';

describe('Проверка редьюсера слайса burgerConstructor', () => {
  const initialBurgerConstructorState = {
    bun: bun,
    ingredients: [main, sauce]
  };
  test('Должен добавлять ингредиент в конструктор бургера', () => {
    const newState = burgerConstructorReducer(
      initialBurgerConstructorState,
      addIngredient(addIngredientForTest)
    );

    const { ingredients } = newState;
    expect(ingredients).toEqual([main, sauce, addIngredientForTest]);
  });
  test('Должен удалять ингредиент из конструктора бургера', () => {
    const newState = burgerConstructorReducer(
      initialBurgerConstructorState,
      removeIngredient(1)
    );

    const { ingredients } = newState;
    expect(ingredients).toEqual([main]);
  });
  test('Должен изменять порядок ингредиентов в начинке moveUpIngredient', () => {
    const newState = burgerConstructorReducer(
      initialBurgerConstructorState,
      moveUpIngredient(1)
    );

    const { ingredients } = newState;
    expect(ingredients).toEqual([sauce, main]);
  });
  test('Должен изменять порядок ингредиентов в начинке moveDownIngredient', () => {
    const newState = burgerConstructorReducer(
      initialBurgerConstructorState,
      moveDownIngredient(0)
    );

    const { ingredients } = newState;
    expect(ingredients).toEqual([sauce, main]);
  });
});
