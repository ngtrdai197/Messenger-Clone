import React from 'react';

interface IAvatarProps {
  url: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

const Avatar: React.FC<IAvatarProps> = (props: IAvatarProps) => {
  const { url, width = '56px', height = '56px', rounded = true } = props;
  return (
    <React.Fragment>
      <img
        src={url}
        alt=""
        style={{ width, height }}
        className={rounded && 'rounded-full'}
      />
    </React.Fragment>
  );
};
export default Avatar;
