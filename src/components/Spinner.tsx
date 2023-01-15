import { ThreeDots } from 'react-loader-spinner';

export function Spinner() {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="gray"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
}
