import styled from 'styled-components';
import Image from 'next/image';

const Card = styled.article`
  position: relative;
  margin: 0.25rem 0.5rem;
  background: var(--white-2);
  overflow: hidden;
  border-radius: 1.25rem;
  height: 22.125rem;
  box-shadow: 0.1875rem 0.1875rem 0.375rem rgba(0, 0, 0, 0.16);

  @media (min-width: 62em) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 75em) {
    margin-left: 1.375rem;
    margin-right: 1.375rem;
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 9.625rem;
`;

const CardContent = styled.div`
  padding: 1.5rem 1.75rem 2rem;

  h2 {
    color: var(--black-2);
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 0.625rem;
  }

  p {
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--black-2);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin-bottom: 0.625rem;
  }

  a {
    color: var(--orange);
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1rem;
  }
`;

const BlogCard = () => {
  return (
    <Card>
      <CardImage>
        <Image
          src="/images/card-2.jpg"
          alt="Card 2"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </CardImage>
      <CardContent>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#">Leia mais</a>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
