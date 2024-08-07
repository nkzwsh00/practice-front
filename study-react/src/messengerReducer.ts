export const initialState = {
  selectedId: 0,
  message: {
    0: "Hello Taylor!",
    1: "Hello Alice!",
    2: "Hello Bob!",
  },
};

export const messengerReducer = (
  state: typeof initialState,
  action: { type: string; contactId?: number; message?: string }
) => {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId!,
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: {
          ...state.message,
          [state.selectedId]: action.message,
        },
      };
    }
    case "sent_message": {
      return {
        ...state,
        message: {
          ...state.message,
          [state.selectedId]: "",
        },
      };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
};
