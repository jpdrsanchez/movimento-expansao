import styled from 'styled-components';

const Article = styled.article`
  position: relative;
  padding-bottom: 100%;

  & > div {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    border-radius: 2.8125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8125rem 1.25rem;
    box-sizing: border-box;
    border: 0.25rem solid var(--white);
    transition: all 0.3s;

    &:hover {
      background: var(--grey-4);
      border-color: var(--orange);
      box-shadow: 0px 0px 65px #0000009c;

      p {
        color: var(--white);
      }
    }
  }

  p {
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.5625rem;
    transition: all 0.3s;
  }

  strong {
    font-weight: 700;
  }
`;

const HomeBandeirasCard = ({ content }) => {
  return (
    <Article>
      <div>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Article>
  );
};

export default HomeBandeirasCard;
