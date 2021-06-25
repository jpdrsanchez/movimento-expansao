import styled from 'styled-components';
import Image from 'next/image';

const Article = styled.article`
  position: relative;
  width: 100%;

  @media (min-width: 48em) {
    max-width: 16.5rem;
  }

  & > div {
    height: 26.5rem;
    background: var(--white);
    border-radius: 2.8125rem;
    width: 100%;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 1s;
    transition-property: transform, opacity;
    overflow: hidden;
  }

  &:hover {
    & > div {
      &:first-of-type {
        transform: rotateX(180deg);
      }

      &:last-of-type {
        opacity: 1;
        transform: rotateX(0);
      }
    }
  }
`;

const FrontCard = styled.div`
  transform: rotateY(0deg);
`;

const BackCard = styled.div`
  position: absolute;
  opacity: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transform: rotateX(-180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  @media (min-width: 62em) {
    padding: 0.5rem 1rem;
  }

  p {
    color: var(--black);
    font-size: 0.9375rem;
    line-height: 1.5rem;
    text-align: center;

    @media (min-width: 48em) {
      font-size: 0.875rem;
      line-height: 1rem;
    }

    @media (min-width: 62em) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

const ArticleHeader = styled.div`
  position: relative;
  height: 50%;
`;

const ArticleBody = styled.div`
  padding-right: 1.125rem;
  padding-left: 1.125rem;
  width: 100%;
  height: 7.6875rem;
  margin-top: 1.25rem;

  p {
    color: var(--black);
    text-align: center;
    font-size: 1.0625rem;
    line-height: 1.5625rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`;

const ArticleLink = styled.span`
  display: block;
  color: var(--orange);
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  margin-top: 1.5rem;
`;

const HomeManisfestoCards = ({ image, intro, content }) => {
  return (
    <Article>
      <FrontCard>
        <ArticleHeader>
          <Image
            src={image}
            alt="Card Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </ArticleHeader>
        <ArticleBody>
          <p>{intro}</p>
        </ArticleBody>
        <ArticleLink>Leia mais</ArticleLink>
      </FrontCard>
      <BackCard>
        <p>{content}</p>
      </BackCard>
    </Article>
  );
};

export default HomeManisfestoCards;
