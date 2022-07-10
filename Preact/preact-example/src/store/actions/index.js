export const actionTypes = {
  CHANGE_TITLE: "CHANGE_TITLE",
};

export const changeHeaderTitle = (newTitle) => {
  return {
    type: actionTypes.CHANGE_TITLE,
    payload: newTitle,
  };
};
