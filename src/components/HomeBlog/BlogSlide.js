import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import BlogCard from './BlogCard';
import styled from 'styled-components';

const SlideWrapper = styled.div`
  position: relative;
  margin-top: 2.5rem;

  .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-indent: -999999999px;

    &.slick-prev {
      left: -1.25rem;
      background: url('/images/prev.png') no-repeat center center;
      width: 0.875rem;
      height: 1.5rem;
      border: none;
      cursor: pointer;
    }

    &.slick-next {
      right: -1.25rem;
      background: url('/images/next.png') no-repeat center center;
      width: 0.875rem;
      height: 1.5rem;
      border: none;
      cursor: pointer;
    }
  }
`;

const BlogSlide = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <SlideWrapper>
      <Slider {...settings}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Slider>
    </SlideWrapper>
  );
};

export default BlogSlide;
