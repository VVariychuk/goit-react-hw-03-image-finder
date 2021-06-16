import ImageGalleryItem from './ImageGalleryItem'
import s from './ImageGallery.module.css'

const ImageGallery = ({pictures, imgClickHandler}) => {
    return (
        <ul onClick={imgClickHandler}
            className={s.ImageGallery}>
            {pictures.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    smallImg={webformatURL}
                    bigImg={largeImageURL}
                    id={id}
                />
            ))}
        </ul>
    )
}

export default ImageGallery