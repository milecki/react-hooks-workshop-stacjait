export default function usersReducer(state, action) {
  switch (action.type) {
    case 'USERS_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'USERS_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'USERS_SUCCESS':
      return {
        isLoading: false,
        isError: false,
        data: [...action.data],
      };
    default:
      return state;
  }
}
