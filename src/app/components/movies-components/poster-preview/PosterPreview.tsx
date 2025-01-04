import React, {FC} from 'react';
import {urls} from "@/app/constans/urls";

const {poster: {base}} = urls

interface IPosterPreviewProps {
    posterUrl: string
}


const PosterPreview:FC<IPosterPreviewProps> = ({posterUrl}) => {
    return (
            <img src={base + posterUrl} />
    );
};

export default PosterPreview;