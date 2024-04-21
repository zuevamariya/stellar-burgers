import { fetchFeeds } from '../feed/feed-action';
import { initialState } from '../feed/feed-slice';
import feedsReducer from '../feed/feed-slice';

describe('Проверка редьюсера слайса feeds', () => {
  test('успешно', () => {
    const expectedResult = {
      orders: [
        {
          _id: '6624859c97ede0001d066e7e',
          ingredients: [
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy био-марсианский бургер',
          createdAt: '2024-04-21T03:18:52.988Z',
          updatedAt: '2024-04-21T03:18:53.616Z',
          number: 38557
        },
        {
          _id: '6624792897ede0001d066e75',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный люминесцентный бургер',
          createdAt: '2024-04-21T02:25:44.344Z',
          updatedAt: '2024-04-21T02:25:44.892Z',
          number: 38556
        },
        {
          _id: '662476b897ede0001d066e70',
          ingredients: [
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный люминесцентный бургер',
          createdAt: '2024-04-21T02:15:20.579Z',
          updatedAt: '2024-04-21T02:15:21.167Z',
          number: 38555
        },
        {
          _id: '6624763c97ede0001d066e6a',
          ingredients: [
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy био-марсианский бургер',
          createdAt: '2024-04-21T02:13:16.878Z',
          updatedAt: '2024-04-21T02:13:17.545Z',
          number: 38554
        },
        {
          _id: '6624752397ede0001d066e68',
          ingredients: [
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy био-марсианский бургер',
          createdAt: '2024-04-21T02:08:35.122Z',
          updatedAt: '2024-04-21T02:08:35.650Z',
          number: 38553
        },
        {
          _id: '662474fc97ede0001d066e65',
          ingredients: [
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy био-марсианский бургер',
          createdAt: '2024-04-21T02:07:56.662Z',
          updatedAt: '2024-04-21T02:07:57.386Z',
          number: 38552
        },
        {
          _id: '662474f197ede0001d066e63',
          ingredients: [
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy био-марсианский бургер',
          createdAt: '2024-04-21T02:07:45.210Z',
          updatedAt: '2024-04-21T02:07:45.822Z',
          number: 38551
        },
        {
          _id: '6624741597ede0001d066e5b',
          ingredients: [
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy био-марсианский бургер',
          createdAt: '2024-04-21T02:04:05.309Z',
          updatedAt: '2024-04-21T02:04:05.872Z',
          number: 38550
        },
        {
          _id: '6624740897ede0001d066e59',
          ingredients: [
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный spicy био-марсианский бургер',
          createdAt: '2024-04-21T02:03:52.315Z',
          updatedAt: '2024-04-21T02:03:52.961Z',
          number: 38549
        },
        {
          _id: '662469e697ede0001d066e4b',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный space spicy бургер',
          createdAt: '2024-04-21T01:20:38.781Z',
          updatedAt: '2024-04-21T01:20:39.407Z',
          number: 38548
        },
        {
          _id: '6624692c97ede0001d066e45',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:17:32.586Z',
          updatedAt: '2024-04-21T01:17:34.053Z',
          number: 38547
        },
        {
          _id: '6624692c97ede0001d066e44',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:17:32.581Z',
          updatedAt: '2024-04-21T01:17:33.947Z',
          number: 38546
        },
        {
          _id: '6624687b97ede0001d066e3f',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:14:35.815Z',
          updatedAt: '2024-04-21T01:14:37.277Z',
          number: 38544
        },
        {
          _id: '6624687b97ede0001d066e40',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:14:35.817Z',
          updatedAt: '2024-04-21T01:14:37.146Z',
          number: 38545
        },
        {
          _id: '6624685d97ede0001d066e3e',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:14:05.962Z',
          updatedAt: '2024-04-21T01:14:07.472Z',
          number: 38543
        },
        {
          _id: '6624685d97ede0001d066e3d',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:14:05.959Z',
          updatedAt: '2024-04-21T01:14:07.464Z',
          number: 38542
        },
        {
          _id: '6624683297ede0001d066e3a',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:13:22.650Z',
          updatedAt: '2024-04-21T01:13:24.180Z',
          number: 38540
        },
        {
          _id: '6624683297ede0001d066e3b',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:13:22.652Z',
          updatedAt: '2024-04-21T01:13:24.139Z',
          number: 38541
        },
        {
          _id: '6624680297ede0001d066e39',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный space бургер',
          createdAt: '2024-04-21T01:12:34.883Z',
          updatedAt: '2024-04-21T01:12:36.455Z',
          number: 38539
        },
        {
          _id: '6624680297ede0001d066e38',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный space бургер',
          createdAt: '2024-04-21T01:12:34.878Z',
          updatedAt: '2024-04-21T01:12:36.451Z',
          number: 38538
        },
        {
          _id: '662466ff97ede0001d066e37',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:08:15.776Z',
          updatedAt: '2024-04-21T01:08:16.372Z',
          number: 38537
        },
        {
          _id: '6624659197ede0001d066e35',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0942',
            '643d69a5c3f7b9001cfa0944',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный spicy традиционный-галактический бургер',
          createdAt: '2024-04-21T01:02:09.969Z',
          updatedAt: '2024-04-21T01:02:10.709Z',
          number: 38536
        },
        {
          _id: '6624657197ede0001d066e33',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:01:37.240Z',
          updatedAt: '2024-04-21T01:01:38.749Z',
          number: 38535
        },
        {
          _id: '6624657197ede0001d066e32',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T01:01:37.237Z',
          updatedAt: '2024-04-21T01:01:38.741Z',
          number: 38534
        },
        {
          _id: '6624655697ede0001d066e30',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T01:01:10.921Z',
          updatedAt: '2024-04-21T01:01:12.471Z',
          number: 38532
        },
        {
          _id: '6624655697ede0001d066e31',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T01:01:10.924Z',
          updatedAt: '2024-04-21T01:01:12.359Z',
          number: 38533
        },
        {
          _id: '6624653197ede0001d066e2d',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa0944',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный традиционный-галактический антарианский бургер',
          createdAt: '2024-04-21T01:00:33.678Z',
          updatedAt: '2024-04-21T01:00:35.171Z',
          number: 38530
        },
        {
          _id: '6624653197ede0001d066e2e',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa0944',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный традиционный-галактический антарианский бургер',
          createdAt: '2024-04-21T01:00:33.684Z',
          updatedAt: '2024-04-21T01:00:35.058Z',
          number: 38531
        },
        {
          _id: '6624650f97ede0001d066e2c',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:59:59.020Z',
          updatedAt: '2024-04-21T00:59:59.615Z',
          number: 38529
        },
        {
          _id: '6624650b97ede0001d066e2b',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:59:55.132Z',
          updatedAt: '2024-04-21T00:59:55.699Z',
          number: 38528
        },
        {
          _id: '6624650097ede0001d066e2a',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:59:44.741Z',
          updatedAt: '2024-04-21T00:59:45.249Z',
          number: 38527
        },
        {
          _id: '662464fc97ede0001d066e29',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:59:40.015Z',
          updatedAt: '2024-04-21T00:59:40.613Z',
          number: 38526
        },
        {
          _id: '662464f697ede0001d066e28',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:59:34.098Z',
          updatedAt: '2024-04-21T00:59:34.708Z',
          number: 38525
        },
        {
          _id: '662464ef97ede0001d066e27',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:59:27.816Z',
          updatedAt: '2024-04-21T00:59:28.265Z',
          number: 38524
        },
        {
          _id: '662464ea97ede0001d066e26',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:59:22.838Z',
          updatedAt: '2024-04-21T00:59:23.485Z',
          number: 38523
        },
        {
          _id: '662464e097ede0001d066e25',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:59:12.290Z',
          updatedAt: '2024-04-21T00:59:12.912Z',
          number: 38522
        },
        {
          _id: '662464bf97ede0001d066e24',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:58:39.854Z',
          updatedAt: '2024-04-21T00:58:40.518Z',
          number: 38521
        },
        {
          _id: '6624649b97ede0001d066e23',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:58:03.717Z',
          updatedAt: '2024-04-21T00:58:04.406Z',
          number: 38520
        },
        {
          _id: '6624648497ede0001d066e22',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:57:40.553Z',
          updatedAt: '2024-04-21T00:57:41.190Z',
          number: 38519
        },
        {
          _id: '6624646a97ede0001d066e21',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:57:14.875Z',
          updatedAt: '2024-04-21T00:57:15.442Z',
          number: 38518
        },
        {
          _id: '6624641797ede0001d066e1f',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:55:51.251Z',
          updatedAt: '2024-04-21T00:55:51.981Z',
          number: 38517
        },
        {
          _id: '6624639c97ede0001d066e1d',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:53:48.192Z',
          updatedAt: '2024-04-21T00:53:48.756Z',
          number: 38516
        },
        {
          _id: '6624632997ede0001d066e1c',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:51:53.920Z',
          updatedAt: '2024-04-21T00:51:55.450Z',
          number: 38515
        },
        {
          _id: '6624632997ede0001d066e1b',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa0945',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный антарианский бургер',
          createdAt: '2024-04-21T00:51:53.917Z',
          updatedAt: '2024-04-21T00:51:55.275Z',
          number: 38514
        },
        {
          _id: '6624621f97ede0001d066e19',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T00:47:27.240Z',
          updatedAt: '2024-04-21T00:47:28.650Z',
          number: 38512
        },
        {
          _id: '6624621f97ede0001d066e1a',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T00:47:27.242Z',
          updatedAt: '2024-04-21T00:47:28.566Z',
          number: 38513
        },
        {
          _id: '662461e497ede0001d066e18',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T00:46:28.442Z',
          updatedAt: '2024-04-21T00:46:28.960Z',
          number: 38511
        },
        {
          _id: '662461aa97ede0001d066e16',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T00:45:30.476Z',
          updatedAt: '2024-04-21T00:45:32.040Z',
          number: 38509
        },
        {
          _id: '662461aa97ede0001d066e17',
          ingredients: [
            '643d69a5c3f7b9001cfa093d',
            '643d69a5c3f7b9001cfa0943',
            '643d69a5c3f7b9001cfa093d'
          ],
          status: 'done',
          name: 'Space флюоресцентный бургер',
          createdAt: '2024-04-21T00:45:30.483Z',
          updatedAt: '2024-04-21T00:45:31.980Z',
          number: 38510
        },
        {
          _id: '6624435597ede0001d066df7',
          ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0940',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa093e',
            '643d69a5c3f7b9001cfa093c'
          ],
          status: 'done',
          name: 'Краторный люминесцентный метеоритный бургер',
          createdAt: '2024-04-20T22:36:05.747Z',
          updatedAt: '2024-04-20T22:36:06.399Z',
          number: 38508
        }
      ],
      total: 38183,
      totalToday: 133
    };
    const state = feedsReducer(initialState, {
      type: fetchFeeds.fulfilled.type,
      payload: {
        success: true,
        orders: [
          {
            _id: '6624859c97ede0001d066e7e',
            ingredients: [
              '643d69a5c3f7b9001cfa0942',
              '643d69a5c3f7b9001cfa0941',
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный spicy био-марсианский бургер',
            createdAt: '2024-04-21T03:18:52.988Z',
            updatedAt: '2024-04-21T03:18:53.616Z',
            number: 38557
          },
          {
            _id: '6624792897ede0001d066e75',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa093e',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Флюоресцентный люминесцентный бургер',
            createdAt: '2024-04-21T02:25:44.344Z',
            updatedAt: '2024-04-21T02:25:44.892Z',
            number: 38556
          },
          {
            _id: '662476b897ede0001d066e70',
            ingredients: [
              '643d69a5c3f7b9001cfa093e',
              '643d69a5c3f7b9001cfa093e',
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Флюоресцентный люминесцентный бургер',
            createdAt: '2024-04-21T02:15:20.579Z',
            updatedAt: '2024-04-21T02:15:21.167Z',
            number: 38555
          },
          {
            _id: '6624763c97ede0001d066e6a',
            ingredients: [
              '643d69a5c3f7b9001cfa0942',
              '643d69a5c3f7b9001cfa0941',
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный spicy био-марсианский бургер',
            createdAt: '2024-04-21T02:13:16.878Z',
            updatedAt: '2024-04-21T02:13:17.545Z',
            number: 38554
          },
          {
            _id: '6624752397ede0001d066e68',
            ingredients: [
              '643d69a5c3f7b9001cfa0942',
              '643d69a5c3f7b9001cfa0941',
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный spicy био-марсианский бургер',
            createdAt: '2024-04-21T02:08:35.122Z',
            updatedAt: '2024-04-21T02:08:35.650Z',
            number: 38553
          },
          {
            _id: '662474fc97ede0001d066e65',
            ingredients: [
              '643d69a5c3f7b9001cfa0942',
              '643d69a5c3f7b9001cfa0941',
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный spicy био-марсианский бургер',
            createdAt: '2024-04-21T02:07:56.662Z',
            updatedAt: '2024-04-21T02:07:57.386Z',
            number: 38552
          },
          {
            _id: '662474f197ede0001d066e63',
            ingredients: [
              '643d69a5c3f7b9001cfa0942',
              '643d69a5c3f7b9001cfa0941',
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный spicy био-марсианский бургер',
            createdAt: '2024-04-21T02:07:45.210Z',
            updatedAt: '2024-04-21T02:07:45.822Z',
            number: 38551
          },
          {
            _id: '6624741597ede0001d066e5b',
            ingredients: [
              '643d69a5c3f7b9001cfa0942',
              '643d69a5c3f7b9001cfa0941',
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный spicy био-марсианский бургер',
            createdAt: '2024-04-21T02:04:05.309Z',
            updatedAt: '2024-04-21T02:04:05.872Z',
            number: 38550
          },
          {
            _id: '6624740897ede0001d066e59',
            ingredients: [
              '643d69a5c3f7b9001cfa0942',
              '643d69a5c3f7b9001cfa0941',
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный spicy био-марсианский бургер',
            createdAt: '2024-04-21T02:03:52.315Z',
            updatedAt: '2024-04-21T02:03:52.961Z',
            number: 38549
          },
          {
            _id: '662469e697ede0001d066e4b',
            ingredients: [
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0942',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный space spicy бургер',
            createdAt: '2024-04-21T01:20:38.781Z',
            updatedAt: '2024-04-21T01:20:39.407Z',
            number: 38548
          },
          {
            _id: '6624692c97ede0001d066e45',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:17:32.586Z',
            updatedAt: '2024-04-21T01:17:34.053Z',
            number: 38547
          },
          {
            _id: '6624692c97ede0001d066e44',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:17:32.581Z',
            updatedAt: '2024-04-21T01:17:33.947Z',
            number: 38546
          },
          {
            _id: '6624687b97ede0001d066e3f',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:14:35.815Z',
            updatedAt: '2024-04-21T01:14:37.277Z',
            number: 38544
          },
          {
            _id: '6624687b97ede0001d066e40',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:14:35.817Z',
            updatedAt: '2024-04-21T01:14:37.146Z',
            number: 38545
          },
          {
            _id: '6624685d97ede0001d066e3e',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:14:05.962Z',
            updatedAt: '2024-04-21T01:14:07.472Z',
            number: 38543
          },
          {
            _id: '6624685d97ede0001d066e3d',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:14:05.959Z',
            updatedAt: '2024-04-21T01:14:07.464Z',
            number: 38542
          },
          {
            _id: '6624683297ede0001d066e3a',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:13:22.650Z',
            updatedAt: '2024-04-21T01:13:24.180Z',
            number: 38540
          },
          {
            _id: '6624683297ede0001d066e3b',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:13:22.652Z',
            updatedAt: '2024-04-21T01:13:24.139Z',
            number: 38541
          },
          {
            _id: '6624680297ede0001d066e39',
            ingredients: [
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный space бургер',
            createdAt: '2024-04-21T01:12:34.883Z',
            updatedAt: '2024-04-21T01:12:36.455Z',
            number: 38539
          },
          {
            _id: '6624680297ede0001d066e38',
            ingredients: [
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный space бургер',
            createdAt: '2024-04-21T01:12:34.878Z',
            updatedAt: '2024-04-21T01:12:36.451Z',
            number: 38538
          },
          {
            _id: '662466ff97ede0001d066e37',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:08:15.776Z',
            updatedAt: '2024-04-21T01:08:16.372Z',
            number: 38537
          },
          {
            _id: '6624659197ede0001d066e35',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0942',
              '643d69a5c3f7b9001cfa0944',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный spicy традиционный-галактический бургер',
            createdAt: '2024-04-21T01:02:09.969Z',
            updatedAt: '2024-04-21T01:02:10.709Z',
            number: 38536
          },
          {
            _id: '6624657197ede0001d066e33',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:01:37.240Z',
            updatedAt: '2024-04-21T01:01:38.749Z',
            number: 38535
          },
          {
            _id: '6624657197ede0001d066e32',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T01:01:37.237Z',
            updatedAt: '2024-04-21T01:01:38.741Z',
            number: 38534
          },
          {
            _id: '6624655697ede0001d066e30',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T01:01:10.921Z',
            updatedAt: '2024-04-21T01:01:12.471Z',
            number: 38532
          },
          {
            _id: '6624655697ede0001d066e31',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T01:01:10.924Z',
            updatedAt: '2024-04-21T01:01:12.359Z',
            number: 38533
          },
          {
            _id: '6624653197ede0001d066e2d',
            ingredients: [
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa0944',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный традиционный-галактический антарианский бургер',
            createdAt: '2024-04-21T01:00:33.678Z',
            updatedAt: '2024-04-21T01:00:35.171Z',
            number: 38530
          },
          {
            _id: '6624653197ede0001d066e2e',
            ingredients: [
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa0944',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный традиционный-галактический антарианский бургер',
            createdAt: '2024-04-21T01:00:33.684Z',
            updatedAt: '2024-04-21T01:00:35.058Z',
            number: 38531
          },
          {
            _id: '6624650f97ede0001d066e2c',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:59:59.020Z',
            updatedAt: '2024-04-21T00:59:59.615Z',
            number: 38529
          },
          {
            _id: '6624650b97ede0001d066e2b',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:59:55.132Z',
            updatedAt: '2024-04-21T00:59:55.699Z',
            number: 38528
          },
          {
            _id: '6624650097ede0001d066e2a',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:59:44.741Z',
            updatedAt: '2024-04-21T00:59:45.249Z',
            number: 38527
          },
          {
            _id: '662464fc97ede0001d066e29',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:59:40.015Z',
            updatedAt: '2024-04-21T00:59:40.613Z',
            number: 38526
          },
          {
            _id: '662464f697ede0001d066e28',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:59:34.098Z',
            updatedAt: '2024-04-21T00:59:34.708Z',
            number: 38525
          },
          {
            _id: '662464ef97ede0001d066e27',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:59:27.816Z',
            updatedAt: '2024-04-21T00:59:28.265Z',
            number: 38524
          },
          {
            _id: '662464ea97ede0001d066e26',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:59:22.838Z',
            updatedAt: '2024-04-21T00:59:23.485Z',
            number: 38523
          },
          {
            _id: '662464e097ede0001d066e25',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:59:12.290Z',
            updatedAt: '2024-04-21T00:59:12.912Z',
            number: 38522
          },
          {
            _id: '662464bf97ede0001d066e24',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:58:39.854Z',
            updatedAt: '2024-04-21T00:58:40.518Z',
            number: 38521
          },
          {
            _id: '6624649b97ede0001d066e23',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:58:03.717Z',
            updatedAt: '2024-04-21T00:58:04.406Z',
            number: 38520
          },
          {
            _id: '6624648497ede0001d066e22',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:57:40.553Z',
            updatedAt: '2024-04-21T00:57:41.190Z',
            number: 38519
          },
          {
            _id: '6624646a97ede0001d066e21',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:57:14.875Z',
            updatedAt: '2024-04-21T00:57:15.442Z',
            number: 38518
          },
          {
            _id: '6624641797ede0001d066e1f',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:55:51.251Z',
            updatedAt: '2024-04-21T00:55:51.981Z',
            number: 38517
          },
          {
            _id: '6624639c97ede0001d066e1d',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:53:48.192Z',
            updatedAt: '2024-04-21T00:53:48.756Z',
            number: 38516
          },
          {
            _id: '6624632997ede0001d066e1c',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:51:53.920Z',
            updatedAt: '2024-04-21T00:51:55.450Z',
            number: 38515
          },
          {
            _id: '6624632997ede0001d066e1b',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa0945',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный антарианский бургер',
            createdAt: '2024-04-21T00:51:53.917Z',
            updatedAt: '2024-04-21T00:51:55.275Z',
            number: 38514
          },
          {
            _id: '6624621f97ede0001d066e19',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T00:47:27.240Z',
            updatedAt: '2024-04-21T00:47:28.650Z',
            number: 38512
          },
          {
            _id: '6624621f97ede0001d066e1a',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T00:47:27.242Z',
            updatedAt: '2024-04-21T00:47:28.566Z',
            number: 38513
          },
          {
            _id: '662461e497ede0001d066e18',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T00:46:28.442Z',
            updatedAt: '2024-04-21T00:46:28.960Z',
            number: 38511
          },
          {
            _id: '662461aa97ede0001d066e16',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T00:45:30.476Z',
            updatedAt: '2024-04-21T00:45:32.040Z',
            number: 38509
          },
          {
            _id: '662461aa97ede0001d066e17',
            ingredients: [
              '643d69a5c3f7b9001cfa093d',
              '643d69a5c3f7b9001cfa0943',
              '643d69a5c3f7b9001cfa093d'
            ],
            status: 'done',
            name: 'Space флюоресцентный бургер',
            createdAt: '2024-04-21T00:45:30.483Z',
            updatedAt: '2024-04-21T00:45:31.980Z',
            number: 38510
          },
          {
            _id: '6624435597ede0001d066df7',
            ingredients: [
              '643d69a5c3f7b9001cfa093c',
              '643d69a5c3f7b9001cfa0940',
              '643d69a5c3f7b9001cfa093e',
              '643d69a5c3f7b9001cfa093e',
              '643d69a5c3f7b9001cfa093c'
            ],
            status: 'done',
            name: 'Краторный люминесцентный метеоритный бургер',
            createdAt: '2024-04-20T22:36:05.747Z',
            updatedAt: '2024-04-20T22:36:06.399Z',
            number: 38508
          }
        ],
        total: 38183,
        totalToday: 133
      }
    });
    expect(state.orders).toEqual(expectedResult.orders);
    expect(state.total).toEqual(expectedResult.total);
    expect(state.totalToday).toEqual(expectedResult.totalToday);
  });
});
