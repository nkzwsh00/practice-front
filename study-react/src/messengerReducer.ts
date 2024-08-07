export const initialState = {
  selectedId: 0,
  message: "Hello",
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
        message: "",
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: action.message!,
      };
    }
    case "sent_message": {
      return {
        ...state,
        message: "",
      };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
};
