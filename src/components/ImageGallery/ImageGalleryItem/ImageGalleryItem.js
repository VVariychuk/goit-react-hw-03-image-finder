import s from './ImageGalleryItem.module.css'


const ImageGalleryItem = ({ smallImg, bigImg, id }) => (
    <li className={s.ImageGalleryItem} >
        <img src={smallImg} data-img={bigImg} alt={id} className={s.ImageGalleryItemImage} />
    </li>
);

export default ImageGalleryItem;

