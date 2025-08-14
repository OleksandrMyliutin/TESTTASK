export const selectUser = (state) => state.user;
export const selectUserError = (state) => state.error;
export const selectLoader = (state) => state.isLoading;

export const selectInitialValue = (state) => state.auth.initialValue;