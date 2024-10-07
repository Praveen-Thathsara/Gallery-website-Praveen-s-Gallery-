import React from 'react';
import ImageCard from './ImageCard';

const Gallery = () => {
  const images = [
    { url: '/images/me2.jpg', alt: 'Image 1' },
    { url: '/images/6.jpg', alt: 'Image 2' },
    { url: '/images/coconuttree.jpg', alt: 'Image 6' },
    { url: '/images/me.jpg', alt: 'Image 4' },
    { url: '/images/8.jpg', alt: 'Image 5' },
    { url: '/images/7.jpg', alt: 'Image 3' },
    { url: '/images/9.jpg', alt: 'Image 7' },
    { url: '/images/11.jpg', alt: 'Image 9' },
    { url: '/images/10.jpg', alt: 'Image 8' },
    { url: '/images/12.jpg', alt: 'Image 12' },
    { url: '/images/13.jpg', alt: 'Image 13' },
  ];

  return (
    <div className="galbg">
      <div className="marg">
        <div className="row">
          <div className="gallery">
            {images.map((image, index) => (
              <ImageCard key={index} image={image} />
            ))}
          </div>

          {/* Pagination */}
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
