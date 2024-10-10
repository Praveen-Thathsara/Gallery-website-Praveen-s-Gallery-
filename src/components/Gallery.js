import React from "react";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";

const Gallery = () => {
  const images = [
    { url: "/images/me2.jpg", alt: "Image 1" },
    { url: "/images/6.jpg", alt: "Image 2" },
    { url: "/images/coconuttree.jpg", alt: "Image 6" },
    { url: "/images/me.jpg", alt: "Image 4" },
    { url: "/images/8.jpg", alt: "Image 5" },
    { url: "/images/7.jpg", alt: "Image 3" },
    { url: "/images/9.jpg", alt: "Image 7" },
    { url: "/images/11.jpg", alt: "Image 9" },
    { url: "/images/10.jpg", alt: "Image 8" },
    { url: "/images/12.jpg", alt: "Image 12" },
    { url: "/images/13.jpg", alt: "Image 13" },
    { url: "/images/14.jpg", alt: "Image 14" },
    { url: "/images/15.jpg", alt: "Image 15" },
    { url: "/images/16.jpg", alt: "Image 16" },
    { url: "/images/17.jpg", alt: "Image 17" },
    { url: "/images/18.jpg", alt: "Image 18" },
    { url: "/images/19.jpg", alt: "Image 19" },
    { url: "/images/20.jpg", alt: "Image 20" },
    { url: "/images/21.jpg", alt: "Image 21" },
    { url: "/images/22.jpg", alt: "Image 22" },
    { url: "/images/23.jpg", alt: "Image 23" },
    { url: "/images/24.jpg", alt: "Image 24" },
    { url: "/images/25.jpg", alt: "Image 25" },
    { url: "/images/26.jpg", alt: "Image 26" },
    { url: "/images/27.jpg", alt: "Image 27" },
    { url: "/images/28.jpg", alt: "Image 28" },
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
                  <a className="page-link custom-pagination-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <Link
                    to="/Gallery1"
                    className="page-link custom-pagination-link"
                  >
                    2
                  </Link>
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
