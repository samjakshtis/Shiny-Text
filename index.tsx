import React, { useEffect, useRef } from 'react';

type ShiningTextProps = {
    duration?: string; // Duration of the animation
    textColor?: string; // Color of the text
    className?: string; // Optional custom class name
    children: React.ReactNode; // Content to display inside the shining text
};

const ShiningText: React.FC<ShiningTextProps> = ({
    duration = '2s',
    textColor = 'rgba(255, 0, 0, 0.9)', // Slight transparency
    className,
    children,
}) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Calculate the width of the text element
        const textWidth = textRef.current ? textRef.current.offsetWidth : 0;

        // Update keyframes dynamically based on text width
        const keyframes = `
            @-webkit-keyframes shine {
                0% {
                    background-position: -${textWidth}px;
                }
                50% {
                    background-position: ${textWidth / 1.5}px;
                }
                100% {
                    background-position: ${textWidth * 2}px;
                }
            }
        `;

        // Append keyframes to the document head
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [children]); // Recalculate if the text changes

    // Inline styles for the shining text
    const inlineStyles: React.CSSProperties = {
        background: '#222 -webkit-gradient(linear, left top, right top, from(#222), to(#222), color-stop(0.5, #fff)) 0 0 no-repeat',
        WebkitBackgroundSize: `${textRef.current ? textRef.current.offsetWidth : 200}px`,
        color: textColor,
        WebkitBackgroundClip: 'text',
        WebkitAnimationName: 'shine',
        WebkitAnimationDuration: duration,
        WebkitAnimationIterationCount: 'infinite',
        textShadow: '0 0px 0px rgba(255, 255, 255, 0.5)',
    };

    return (
        <div>
            <div ref={textRef} className={`${className}`} style={inlineStyles}>
                {children}
            </div>
        </div>
    );
};

export default ShiningText;
