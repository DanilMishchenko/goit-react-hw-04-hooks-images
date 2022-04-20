import { SpinnerDotted } from 'spinners-react';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <SpinnerDotted size={70} thickness={120} speed={120} color="#36ad47" />
    </LoaderContainer>
  );
};
