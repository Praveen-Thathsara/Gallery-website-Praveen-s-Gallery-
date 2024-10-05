import React from 'react';
import ImageCard from './ImageCard';

const Gallery = () => {
  const images = [
    { url: '/images/me2.jpg', alt: 'Image 1', caption: 'Beautiful Scenery 1' },
    { url: '/images/6.jpg', alt: 'Image 2', caption: 'Beautiful Scenery 2' },
    { url: '/images/7.jpg', alt: 'Image 3', caption: 'Beautiful Scenery 3' },
    { url: '/images/me.jpg', alt: 'Image 4', caption: 'Beautiful Scenery 4' },
    { url: '/images/8.jpg', alt: 'Image 5', caption: 'Beautiful Scenery 5' },
    { url: '/images/coconuttree.jpg', alt: 'Image 6', caption: 'Beautiful Scenery 6' },
    { url: '/images/9.jpg', alt: 'Image 7', caption: 'Beautiful Scenery 7' },
    { url: '/images/10.jpg', alt: 'Image 8', caption: 'Beautiful Scenery 8' },
    { url: '/images/11.jpg', alt: 'Image 9', caption: 'Beautiful Scenery 9' },
  ];

  return (
    <div className="galbg">
      <div className="marg">
    <div calssName="row">
    <div className="gallery">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}

      </div>
      <div className="row">
  <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <a className="page-link custom-pagination-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li className="page-item"><a className="page-link custom-pagination-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link custom-pagination-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link custom-pagination-link" href="#">3</a></li>
      <li className="page-item">
        <a className="page-link custom-pagination-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
</div>
</div>
</div>

  );
};

export default Gallery;

