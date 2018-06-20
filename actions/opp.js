const BOOKMARK_OPP = 'BOOKMARK_OPP';
export let bookmarkOpp = (payload) => ({ type: BOOKMARK_OPP, payload });
bookmarkOpp.toString = () => BOOKMARK_OPP;

const UNBOOKMARK_OPP = 'UNBOOKMARK_OPP';
export let unbookmarkOpp = (payload) => ({ type: UNBOOKMARK_OPP, payload });
unbookmarkOpp.toString = () => UNBOOKMARK_OPP;