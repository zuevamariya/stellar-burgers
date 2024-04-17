import { data as mockIngredients } from './ingredients.json';
import { stubIngredientsAPI } from '../support/commands';
import { addIngredient } from '../../src/services/burger-constructor/burger-constructor-slice';
import store from '../../src/services/store';

describe('Проверка перехвата запроса к эндпоинту', () => {
  beforeEach(() => {
    stubIngredientsAPI();
  });

  it('Должен возвращать моковые данные при запросе к /api/ingredients', () => {
    cy.request('https://norma.nomoreparties.space/api/ingredients').then(
      (response) => {
        expect(response.body.success).to.equal(true);
        expect(response.body.data).to.have.length(mockIngredients.length);
      }
    );
  });
});

describe('Проверка действия добавления ингредиента', () => {
  it('должно добавить ингредиент в конструктор бургера', () => {
    const bun = mockIngredients[0];
    const main = mockIngredients[1];
    const sauce = mockIngredients[3];
    // Добавляем ингредиент в моковое хранилище
    store.dispatch(addIngredient(bun));
    store.dispatch(addIngredient(main));
    store.dispatch(addIngredient(sauce));

    // Проверяем, что ингредиент добавлен в состояние мокового хранилища
    expect(store.getState().burgerConstructor.ingredients).to.have.lengthOf(2);
    expect(store.getState().burgerConstructor.ingredients[0].name).to.equal(
      main.name
    );
    expect(store.getState().burgerConstructor.ingredients[1].name).to.equal(
      sauce.name
    );
    expect(store.getState().burgerConstructor.bun.name).to.equal(bun.name);
  });
});

describe('Проверка модального окна ингредиента', () => {
  it('должно открыться при клике на ингредиент и закрыться при клике на крестик и оверлей', () => {
    // Переходим на главную страницу
    cy.visit('http://localhost:4000/');
    // Находим ингредиент и симулируем клик
    cy.contains('Краторная булка N-200i').click();
    // Проверяем, что модальное окно становится видимым
    cy.get('#modals > div:first-child').should('exist');
    // Находим кнопку закрытия модального окна (крестик) и симулируем клик
    cy.get('[data-test-id="close-button"]').click();
    // Явное ожидание скрытия модального окна
    cy.get('#modals > div:first-child').should('not.exist');
    // Снова открываем модальное окно
    cy.contains('Краторная булка N-200i').click();
    // Проверяем, что модальное окно становится видимым
    cy.get('#modals > div:first-child').should('exist');
    // Находим оверлей модального окна и симулируем клик
    cy.get('#modals > div:nth-child(2)').click({ force: true });
    // Явное ожидание скрытия модального окна
    cy.get('#modals > div:first-child').should('not.exist');
  });
});


