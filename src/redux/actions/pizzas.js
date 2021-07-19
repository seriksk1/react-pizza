import axios from 'axios';

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `https://my-json-server.typicode.com/seriksk1/api-pizzas/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};
