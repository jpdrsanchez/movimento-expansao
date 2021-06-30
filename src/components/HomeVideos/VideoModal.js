import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import YoutubeEmbed from '../helpers/YoutubeEmbed';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.875rem;
`;

const ModalBody = styled.div`
  width: 100%;
  max-width: 780px;
  padding: 0.625rem;
  border-radius: 0.625rem;
  background: var(--white);

  @media (min-width: 48em) {
    padding: 1.875rem;
  }
`;

const VideoModal = () => {
  const { setOpen, content } = useModal();

  const handleModal = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <Modal onClick={handleModal}>
      <ModalBody>
        <YoutubeEmbed id={content.id} title={content.title} />
      </ModalBody>
    </Modal>
  );
};

export default VideoModal;
