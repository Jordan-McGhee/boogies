export const PickleballIcon = ({
    size = undefined,
    color = '#f67ceb',
    strokeWidth = 1,
    background = 'transparent',
    opacity = 1,
    rotation = 0,
    shadow = 0,
    flipHorizontal = false,
    flipVertical = false,
    padding = 0,
    className = ''
}) => {
    const transforms = [];
    if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
    if (flipHorizontal) transforms.push('scaleX(-1)');
    if (flipVertical) transforms.push('scaleY(-1)');

    const viewBoxSize = 24 + (padding * 2);
    const viewBoxOffset = -padding;
    const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={{
                opacity,
                transform: transforms.join(' ') || undefined,
                filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
                backgroundColor: background !== 'transparent' ? background : undefined
            }}
        >
            <path fill="currentColor" d="M7.075 14.475q.475.475 1.05.7t1.2.225t1.2-.225t1.05-.7l.9-.9q.475-.475.7-1.05t.225-1.2t-.225-1.187t-.7-1.038l-3.8-3.8q-.3-.3-.712-.3t-.713.3L3.3 9.275q-.3.3-.3.7t.3.7zm2.225 2.9q-1 0-1.937-.375t-1.688-1.125l-3.8-3.775q-.425-.425-.65-.987T1 9.975t.225-1.137t.65-.988L5.85 3.875q.425-.425.988-.65T7.974 3t1.138.225t.987.65l3.775 3.8q.75.75 1.125 1.688t.375 1.937q0 .9-.312 1.788T14.1 14.7l5.175 5.175q.3.3.3.713t-.3.712t-.7.3t-.7-.3L12.7 16.125q-.725.65-1.612.95t-1.788.3M19.5 9q-1.45 0-2.475-1.025T16 5.5t1.025-2.475T19.5 2t2.475 1.025T23 5.5t-1.025 2.475T19.5 9m0-2q.625 0 1.063-.437T21 5.5t-.437-1.062T19.5 4t-1.062.438T18 5.5t.438 1.063T19.5 7M8.15 10.15" />
        </svg>
    );
};

export const SmokingIcon = ({
    size = undefined,
    color = '#773ac1',
    strokeWidth = 0.5,
    background = 'transparent',
    opacity = 1,
    rotation = 0,
    shadow = 0,
    flipHorizontal = false,
    flipVertical = false,
    padding = 0,
    className = ''
}) => {
    const transforms = [];
    if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
    if (flipHorizontal) transforms.push('scaleX(-1)');
    if (flipVertical) transforms.push('scaleY(-1)');

    const viewBoxSize = 24 + (padding * 2);
    const viewBoxOffset = -padding;
    const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={{
                opacity,
                transform: transforms.join(' ') || undefined,
                filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
                backgroundColor: background !== 'transparent' ? background : undefined
            }}
        >
            <path fill="currentColor" d="M3.5 19q-.625 0-1.062-.437T2 17.5t.438-1.062T3.5 16h12.75q.325 0 .538.213t.212.537v1.5q0 .325-.213.538T16.25 19zm15.25 0q-.325 0-.537-.213T18 18.25v-1.5q0-.325.213-.537T18.75 16t.538.213t.212.537v1.5q0 .325-.213.538T18.75 19m2.5 0q-.325 0-.537-.213t-.213-.537v-1.5q0-.325.213-.537T21.25 16t.538.213t.212.537v1.5q0 .325-.213.538T21.25 19m-2.5-4q-.325 0-.537-.213T18 14.25v-.55q0-.975-.575-1.487T16.05 11.7H14.5q-1.4 0-2.375-.975T11.15 8.35t.975-2.375T14.5 5q.325 0 .538.213t.212.537t-.213.538t-.537.212q-.75 0-1.3.525t-.55 1.325t.55 1.325t1.3.525h1.55q1.4 0 2.425.9t1.025 2.25v.9q0 .325-.213.538T18.75 15m2.5 0q-.325 0-.537-.213t-.213-.537v-1.5q0-1.65-1.15-2.85T16.5 8.7q-.325 0-.537-.213t-.213-.537t.213-.537t.537-.213q.75 0 1.3-.55t.55-1.3t-.55-1.3t-1.3-.55q-.325 0-.537-.212t-.213-.538t.213-.537T16.5 2q1.4 0 2.375.975t.975 2.375q0 .725-.275 1.313T18.85 7.75q1.4.65 2.275 2t.875 3v1.5q0 .325-.213.538T21.25 15" />
        </svg>
    );
};

export const ShieldPersonIcon = ({
    size = undefined,
    color = '#773ac1',
    strokeWidth = 0.5,
    background = 'transparent',
    opacity = 1,
    rotation = 0,
    shadow = 0,
    flipHorizontal = false,
    flipVertical = false,
    padding = 0,
    className = ''
}) => {
    const transforms = [];
    if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
    if (flipHorizontal) transforms.push('scaleX(-1)');
    if (flipVertical) transforms.push('scaleY(-1)');

    const viewBoxSize = 24 + (padding * 2);
    const viewBoxOffset = -padding;
    const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            width={size}
            height={size}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            style={{
                opacity,
                transform: transforms.join(' ') || undefined,
                filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
                backgroundColor: background !== 'transparent' ? background : undefined
            }}
        >
            <path fill="currentColor" d="M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0-2q.65 0 1.075-.425T13.5 9.5t-.425-1.075T12 8t-1.075.425T10.5 9.5t.425 1.075T12 11m0 11q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-17.875l-6 2.25V11.1q0 1.35.375 2.625t1.025 2.4q1.05-.525 2.2-.825T12 15t2.4.3t2.2.825q.65-1.125 1.025-2.4T18 11.1V6.375zM12 17q-.9 0-1.75.2t-1.625.55q.725.75 1.575 1.3t1.8.85q.95-.3 1.8-.85t1.575-1.3q-.775-.35-1.625-.55T12 17" />
        </svg>
    );
};