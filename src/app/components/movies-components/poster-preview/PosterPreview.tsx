import React, {FC} from 'react';
import {urls} from "@/app/constans/urls";
import Image from 'next/image';

const {poster: {base}} = urls

interface IPosterPreviewProps {
    posterUrl: string
}


const PosterPreview:FC<IPosterPreviewProps> = ({posterUrl}) => {
    console.log(base + posterUrl)
    return (
        <Image src={base + posterUrl} alt={'Movie poster'} width={100} height={100}/>
    );
};

export default PosterPreview;