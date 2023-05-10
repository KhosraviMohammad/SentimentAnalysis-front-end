import React from 'react';

function NumberEmoji(props) {
    const score = props.score;
    let emoji;
    if (score <= 1 && score > 0.75) {
        emoji = '🤣'
    }else if (score <= 0.75 && score > 0.5) {
        emoji = '😂'
    } else if (score <= 0.5 && score >= 0.2) {
        emoji = '😅';
    }else if (score <= 0.2 && score > 0.1) {
        emoji = '😃';
    }else if (score <= 0.1 && score >= -0.1) {
        emoji = '😐';
    } else if (score < -0.1 && score >= -0.2) {
        emoji = '🙁';
    }else if (score < -0.2 && score >= -0.5) {
        emoji = '😔';
    }else if (score < -0.5 && score >= -0.75) {
        emoji = '😢';
    }else if (score < -0.75 && score >= -1) {
        emoji = '😭';
    }

    return (
        <span>
            {emoji}
        </span>
    );
}

export default NumberEmoji;