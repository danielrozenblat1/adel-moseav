import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Shorts.module.css';

const LazyYoutubeEmbed = ({ videoId, index }) => {
  const ref = useRef(null);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowIframe(true);
        observer.disconnect();
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.videoWrapper} ref={ref}>
      {showIframe && (
        <iframe
          className={styles.videoFrame}
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={`YouTube video ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

const YoutubeCarousel = ({ videoIds }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const itemWidth = container.children[0].offsetWidth;

      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2;
      }

      container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const itemWidth = container.children[0].offsetWidth;
      const totalWidth = container.scrollWidth;
      const viewportWidth = container.offsetWidth;

      if (container.scrollLeft + viewportWidth >= totalWidth / 2) {
        container.scrollLeft = 0;
      }

      container.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - distance;
  };

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft >= maxScroll - 10) {
        element.scrollLeft = 0;
      } else if (scrollLeft <= 10) {
        element.scrollLeft = maxScroll / 2;
      }
    };

    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={carouselRef}
        className={styles.carousel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {[...videoIds, ...videoIds, ...videoIds].map((videoId, index) => (
          <LazyYoutubeEmbed key={`${videoId}-${index}`} videoId={videoId} index={index} />
        ))}
      </div>

      <button
        onClick={handlePrevClick}
        className={`${styles.navButton} ${styles.prevButton}`}
        aria-label="Previous video"
      >
        <ChevronLeft className={styles.navIcon} />
      </button>

      <button
        onClick={handleNextClick}
        className={`${styles.navButton} ${styles.nextButton}`}
        aria-label="Next video"
      >
        <ChevronRight className={styles.navIcon} />
      </button>
    </div>
  );
};

export default YoutubeCarousel;
