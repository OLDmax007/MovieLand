import React, {FC} from 'react';

interface IPosterPreviewProps {
    posterUrl: string
}


const PosterPreview:FC<IPosterPreviewProps> = ({posterUrl}) => {
    return (
        <div>
            <img src={posterUrl} />
        </div>
    );
};

export default PosterPreview;