'use strict';

import * as Types from '../constants/index';

// increment
export function increment(index) {
    return {
        type: Types.INCREMENT_LIKES,
        index
    }
}

// add comment
export function addComment(postId, author, comment) {
    return {
        type: Types.ADD_COMMENT,
        postId,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, i) {
    return {
        type: Types.REMOVE_COMMENT,
        postId,
        i
    }
}
