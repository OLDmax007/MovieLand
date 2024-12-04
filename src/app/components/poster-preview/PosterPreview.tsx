import React, {FC} from 'react';
import urls from "@/app/constans/urls";

interface IPosterPreviewProps {
    posterUrl: string
}


const PosterPreview:FC<IPosterPreviewProps> = ({posterUrl}) => {
    return (
            <img src={urls.poster.posterBaseUrl + posterUrl} />
    );
};

export default PosterPreview;