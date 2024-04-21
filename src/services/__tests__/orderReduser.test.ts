import { fetchOrderBurger, fetchOrderNumber } from '../order/order-action';
import orderReducer, { initialState } from '../order/order-slice';

describe('Проверка редьюсера слайса order', () => {
  test('загрузка fetchOrderBurger', () => {
    const expectedResult = {
      isLoadingRequest: true,
      orderRequest: true,
      error: null
    };

    const pendingState = orderReducer(initialState, {
      type: fetchOrderBurger.pending.type
    });

    expect(pendingState.isLoadingRequest).toEqual(
      expectedResult.isLoadingRequest
    );
    expect(pendingState.error).toEqual(expectedResult.error);
    expect(pendingState.orderRequest).toEqual(expectedResult.orderRequest);
  });

  test('успешно fetchOrderBurger', () => {
    const expectedResult = {
      isLoadingRequest: false,
      orderRequest: false,
      order: {
        ingredients: [
          {
            _id: '643d69a5c3f7b9001cfa093c',
            name: 'Краторная булка N-200i',
            type: 'bun',
            proteins: 80,
            fat: 24,
            carbohydrates: 53,
            calories: 420,
            price: 1255,
            image: 'https://code.s3.yandex.net/react/code/bun-02.png',
            image_mobile:
              'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
            image_large:
              'https://code.s3.yandex.net/react/code/bun-02-large.png'
          },
          {
            _id: '643d69a5c3f7b9001cfa0940',
            name: 'Говяжий метеорит (отбивная)',
            type: 'main',
            proteins: 800,
            fat: 800,
            carbohydrates: 300,
            calories: 2674,
            price: 3000,
            image: 'https://code.s3.yandex.net/react/code/meat-04.png',
            image_mobile:
              'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
            image_large:
              'https://code.s3.yandex.net/react/code/meat-04-large.png'
          },
          {
            _id: '643d69a5c3f7b9001cfa093c',
            name: 'Краторная булка N-200i',
            type: 'bun',
            proteins: 80,
            fat: 24,
            carbohydrates: 53,
            calories: 420,
            price: 1255,
            image: 'https://code.s3.yandex.net/react/code/bun-02.png',
            image_mobile:
              'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
            image_large:
              'https://code.s3.yandex.net/react/code/bun-02-large.png'
          }
        ],
        _id: '6624f65d97ede0001d066f74',
        status: 'done',
        name: 'Краторный метеоритный бургер',
        createdAt: '2024-04-21T11:19:57.668Z',
        updatedAt: '2024-04-21T11:19:58.286Z',
        number: 38592
      }
    };

    const fulfilledState = orderReducer(initialState, {
      type: fetchOrderBurger.fulfilled.type,
      payload: {
        success: true,
        name: 'Краторный метеоритный бургер',
        order: {
          ingredients: [
            {
              _id: '643d69a5c3f7b9001cfa093c',
              name: 'Краторная булка N-200i',
              type: 'bun',
              proteins: 80,
              fat: 24,
              carbohydrates: 53,
              calories: 420,
              price: 1255,
              image: 'https://code.s3.yandex.net/react/code/bun-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/bun-02-large.png'
            },
            {
              _id: '643d69a5c3f7b9001cfa0940',
              name: 'Говяжий метеорит (отбивная)',
              type: 'main',
              proteins: 800,
              fat: 800,
              carbohydrates: 300,
              calories: 2674,
              price: 3000,
              image: 'https://code.s3.yandex.net/react/code/meat-04.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/meat-04-large.png'
            },
            {
              _id: '643d69a5c3f7b9001cfa093c',
              name: 'Краторная булка N-200i',
              type: 'bun',
              proteins: 80,
              fat: 24,
              carbohydrates: 53,
              calories: 420,
              price: 1255,
              image: 'https://code.s3.yandex.net/react/code/bun-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/bun-02-large.png'
            }
          ],
          _id: '6624f65d97ede0001d066f74',
          status: 'done',
          name: 'Краторный метеоритный бургер',
          createdAt: '2024-04-21T11:19:57.668Z',
          updatedAt: '2024-04-21T11:19:58.286Z',
          number: 38592
        }
      }
    });

    expect(fulfilledState.isLoadingRequest).toEqual(
      expectedResult.isLoadingRequest
    );
    expect(fulfilledState.order).toEqual(expectedResult.order);
    expect(fulfilledState.orderRequest).toEqual(expectedResult.orderRequest);
  });

  test('ошибка fetchOrderBurger', () => {
    const expectedResult = {
      isLoadingRequest: false,
      orderRequest: false,
      error: 'order data is not available'
    };

    const rejectedState = orderReducer(initialState, {
      type: fetchOrderBurger.rejected.type,
      error: {
        success: false,
        message: 'order data is not available'
      }
    });

    expect(rejectedState.isLoadingRequest).toEqual(
      expectedResult.isLoadingRequest
    );
    expect(rejectedState.error).toEqual(expectedResult.error);
    expect(rejectedState.orderRequest).toEqual(expectedResult.orderRequest);
  });

  test('успешно fetchOrderNumber', () => {
    const expectedResult = {
      orderByNum: {
        _id: '662509c597ede0001d066fd4',
        ingredients: [
          '643d69a5c3f7b9001cfa093c',
          '643d69a5c3f7b9001cfa0947',
          '643d69a5c3f7b9001cfa093c'
        ],
        status: 'done',
        name: 'Краторный фалленианский бургер',
        createdAt: '2024-04-21T12:42:45.612Z',
        updatedAt: '2024-04-21T12:42:46.212Z',
        number: 38605
      }
    };

    const fulfilledState = orderReducer(initialState, {
      type: fetchOrderNumber.fulfilled.type,
      payload: {
        success: true,
        orders: [
          {
            _id: '662509c597ede0001d066fd4',
            ingredients: [
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa0947',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный фалленианский бургер',
            createdAt: '2024-04-21T12:42:45.612Z',
            updatedAt: '2024-04-21T12:42:46.212Z',
            number: 38605
          }
        ]
      }
    });

    expect(fulfilledState.orderByNum).toEqual(expectedResult.orderByNum);
  });
});
