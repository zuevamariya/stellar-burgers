/// <reference types="cypress" />

describe('Проверка перехвата запроса к эндпоинту', () => {
  it('Должен возвращать моковые данные при запросе к /api/ingredients', () => {
    cy.intercept('GET', '/ingredients', {
      fixture: 'ingredients.json'
    });
  });
});

describe('Проверка добавления ингредиента из списка в конструктор', () => {
  it('должен добавить ингредиент из списка в конструктор', () => {
    cy.visit('http://localhost:4000/');
    const ingredientsToAdd = [
      'Флюоресцентная булка R2-D3',
      'Биокотлета из марсианской Магнолии',
      'Соус Spicy-X',
      'Хрустящие минеральные кольца'
    ];
    cy.wrap(ingredientsToAdd).each((ingredientName) => {
      cy.get(`[data-test-id="${ingredientName}"]`).contains(`Добавить`).click();
    });
  });
});

describe('Проверка модального окна ингредиента', () => {
  it('должно открыться при клике на ингредиент и закрыться при клике на крестик и оверлей', () => {
    cy.visit('http://localhost:4000/');
    cy.contains('Краторная булка N-200i').click();
    cy.get('#modals > div:first-child').as('modal');
    cy.get('@modal').should('exist');
    cy.get('[data-test-id="close-button"]').click();
    cy.get('@modal').should('not.exist');

    cy.contains('Биокотлета из марсианской Магнолии').click();
    cy.get('@modal').should('exist');
    cy.get('#modals > div:nth-child(2)').click({ force: true });
    cy.get('@modal').should('not.exist');
  });
});

describe('Процесс создания заказа', () => {
  beforeEach(() => {
    localStorage.setItem('accessToken', 'RandomToken 12345');
    document.cookie = 'refreshToken=random12345token';
  });

  afterEach(() => {
    localStorage.removeItem('accessToken');
    document.cookie =
      'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  });

  it('Собирается бургер', () => {
    cy.visit('http://localhost:4000/');

    const ingredientsToAdd = [
      'Флюоресцентная булка R2-D3',
      'Сыр с астероидной плесенью',
      'Хрустящие минеральные кольца'
    ];

    cy.wrap(ingredientsToAdd).each((ingredientName) => {
      cy.get(`[data-test-id="${ingredientName}"]`).contains('Добавить').click();
    });

    cy.contains('Оформить заказ').click();

    cy.get('input[name="email"]').type('petrpetrovich@gmail.com');
    cy.get('input[name="password"]').type('petrpetrovich');

    cy.contains('Войти').click();

    cy.intercept('POST', 'https://norma.nomoreparties.space/api/auth/login', {
      fixture: 'user.json'
    }).as('loginRequest');

    cy.wait('@loginRequest').then(() => {
      cy.contains('Оформить заказ').click();

      cy.intercept('POST', 'https://norma.nomoreparties.space/api/orders', {
        fixture: 'order.json'
      }).as('orderRequest');

      cy.wait('@orderRequest').then(() => {
        cy.get('#modals > div:first-child').should('exist');
        cy.get('#modals > div:first-child').contains(38390).should('exist');
      });
    });

    cy.get('[data-test-id="close-button"]').click();

    cy.get('#modals > div:first-child').should('not.exist');

    cy.contains('[data-test-id="bun-top"]', 'Выберите булки');
    cy.contains('[data-test-id="ingredient"]', 'Выберите начинку');
    cy.contains('[data-test-id="bun-bottom"]', 'Выберите булки');
  });
});
