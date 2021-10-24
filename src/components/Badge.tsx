import React from 'react';

interface BadgeProps {
    color: string;
    text: string;
}

function Badge(props: BadgeProps) {
    return (
        <div style={{backgroundColor: props.color}} className="section-badge">
            {props.text}
        </div>
    );
}

export {Badge}