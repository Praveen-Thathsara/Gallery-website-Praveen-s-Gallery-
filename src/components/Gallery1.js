import React from "react";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";

const Gallery = () => {
  const images = [
    { url: "/images/29.jpg", alt: "Image" },
    { url: "/images/30.jpg", alt: "Image" },
    { url: "/images/31.jpg", alt: "Image" },
    { url: "/images/32.jpg", alt: "Image" },
    { url: "/images/33.jpg", alt: "Image" },
    { url: "/images/34.jpg", alt: "Image" },
    { url: "/images/35.jpg", alt: "Image" },
    { url: "/images/36.jpg", alt: "Image" },
    { url: "/images/37.jpg", alt: "Image" },
    { url: "/images/38.jpg", alt: "Image" },
    { url: "/images/39.jpg", alt: "Image" },
    { url: "/images/40.jpg", alt: "Image" },
    { url: "/images/41.jpg", alt: "Image" },
    { url: "/images/42.jpg", alt: "Image" },
    { url: "/images/43.jpg", alt: "Image" },
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
            <nav>
              <ul className="pagination justify-content-center mt-4">
                <li className="page-item">
                  <Link
                    to="/Gallery"
                    className="page-link custom-pagination-link"
                  >
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <a className="page-link custom-pagination-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link custom-pagination-link" href="#">
                    3
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
