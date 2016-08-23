'use strict';

import * as Types from '../constants/index';

function postComments(state = [], action) {
    switch (action.type) {
        case Types.ADD_COMMENT:
            return [
                ...state,
                {
                    user: action.author,
                    text: action.comment
                }
            ];
        case Types.REMOVE_COMMENT:
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;
