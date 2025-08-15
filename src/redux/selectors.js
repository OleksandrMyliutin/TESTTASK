export const selectUser = (state) => state.user;
export const selectUserError = (state) => state.user.error;
export const selectLoader = (state) => state.user.isLoading;
export const selectCurrentPage = (state) => state.user.page;
export const selectTotalPages = (state) => state.user.totalPages;

export const selectInitialValue = (state) => state.auth.initialValue;
export const selectSubmitSuccess = (state) => state.auth.submitSuccess;
export const selectSubmitting = (state) => state.auth.isSubmitting;
export const selectSubmitError = (state) => state.auth.submitError;

export const selectPositions = (state) => state.position.list;



