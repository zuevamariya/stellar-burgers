import { error } from 'console';
import {
  fetchLogin,
  fetchProfileOrders,
  fetchRegister
} from '../user/user-action';
import userReducer, { initialState } from '../user/user-slice';

describe('Проверка редьюсера слайса user', () => {
  test('успешно fetchRegister', () => {
    const expectedResult = {
      isAuthChecked: true,
      user: {
        email: 'portqwerty123321@gmail.com',
        name: 'portqwerty'
      }
    };

    const fulfilledState = userReducer(initialState, {
      type: fetchRegister.fulfilled.type,
      payload: {
        email: 'portqwerty123321@gmail.com',
        name: 'portqwerty'
      }
    });

    expect(fulfilledState.isAuthChecked).toEqual(expectedResult.isAuthChecked);
    expect(fulfilledState.user).toEqual(expectedResult.user);
  });

  test('ошибка fetchRegister', () => {
    const expectedResult = {
      isAuthChecked: true,
      error: 'name, email or password are incorrect'
    };

    const rejectedState = userReducer(initialState, {
      type: fetchRegister.rejected.type,
      error: {
        success: false,
        message: 'name, email or password are incorrect'
      }
    });

    expect(rejectedState.isAuthChecked).toEqual(expectedResult.isAuthChecked);
    expect(rejectedState.error).toEqual(expectedResult.error);
  });

  test('успешно fetchLogin', () => {
    const expectedResult = {
      isAuthChecked: true,
      user: {
        email: 'portqwerty123321@gmail.com',
        name: 'portqwerty'
      }
    };

    const fulfilledState = userReducer(initialState, {
      type: fetchLogin.fulfilled.type,
      payload: {
        email: 'portqwerty123321@gmail.com',
        name: 'portqwerty'
      }
    });

    expect(fulfilledState.isAuthChecked).toEqual(expectedResult.isAuthChecked);
    expect(fulfilledState.user).toEqual(expectedResult.user);
  });

  test('ошибка fetchLogin', () => {
    const expectedResult = {
      isAuthChecked: true,
      error: 'email or password are incorrect'
    };

    const rejectedState = userReducer(initialState, {
      type: fetchLogin.rejected.type,
      error: {
        success: false,
        message: 'email or password are incorrect'
      }
    });

    expect(rejectedState.isAuthChecked).toEqual(expectedResult.isAuthChecked);
    expect(rejectedState.error).toEqual(expectedResult.error);
  });

  test('успешно fetchProfileOrders', () => {
    const expectedResult = {
      userOrders: [
        {
          _id: '662512ec97ede0001d066fef',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный био-марсианский бургер',
          createdAt: '2024-04-21T13:21:48.790Z',
          updatedAt: '2024-04-21T13:21:49.515Z',
          number: 38606
        }
      ]
    };

    const fulfilledState = userReducer(initialState, {
      type: fetchProfileOrders.fulfilled.type,
      payload: [
        {
          _id: '662512ec97ede0001d066fef',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный био-марсианский бургер',
          createdAt: '2024-04-21T13:21:48.790Z',
          updatedAt: '2024-04-21T13:21:49.515Z',
          number: 38606
        }
      ]
    });

    expect(fulfilledState.userOrders).toEqual(expectedResult.userOrders);
  });

  test('ошибка fetchProfileOrders', () => {
    const expectedResult = {
      error: 'order data is not available'
    };

    const rejectedState = userReducer(initialState, {
      type: fetchProfileOrders.rejected.type,
      error: {
        success: false,
        message: 'order data is not available'
      }
    });

    expect(rejectedState.error).toEqual(expectedResult.error);
  });
});
