import { fetchFeeds } from '../feed/feed-action';
import { initialState } from '../feed/feed-slice';
import feedsReducer from '../feed/feed-slice';
import { feed } from '../mockData/feed';

describe('Проверка редьюсера слайса feeds', () => {
  test('успешно', () => {
    const expectedResult = feed;
    const state = feedsReducer(initialState, {
      type: fetchFeeds.fulfilled.type,
      payload: {
        success: true,
        orders: feed.orders,
        total: 38183,
        totalToday: 133
      }
    });
    expect(state.orders).toEqual(expectedResult.orders);
    expect(state.total).toEqual(expectedResult.total);
    expect(state.totalToday).toEqual(expectedResult.totalToday);
  });
});
