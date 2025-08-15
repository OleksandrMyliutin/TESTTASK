export const selectUser = (state) => state.user;
export const selectUserError = (state) => state.user.error;
export const selectLoader = (state) => state.user.isLoading;
export const selectCurrentPage = (state) => state.user.page;

export const selectInitialValue = (state) => state.auth.initialValue;

export const selectPositions = (state) => state.position.list;