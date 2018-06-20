export let bookmarkOppReducer = (state, action) => {
  let oppToBookmark = action.payload;
  let newOpps = state.opps.map((o) => (o.id === oppToBookmark.id ? { ...o, bookmarked: true } : o));
  return { ...state, opps: newOpps };
};

export let unbookmarkOppReducer = (state, action) => {
  let oppToUnbookmark = action.payload;
  let newOpps = state.opps.map((o) => (o.id === oppToUnbookmark.id ? { ...o, bookmarked: false } : o));
  return { ...state, opps: newOpps };
};