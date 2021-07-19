import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock(props) {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <circle cx="135" cy="135" r="120" />
      <rect x="0" y="272" rx="0" ry="0" width="280" height="26" />
      <rect x="0" y="309" rx="0" ry="0" width="280" height="84" />
      <rect x="1" y="413" rx="0" ry="0" width="93" height="31" />
      <rect x="145" y="406" rx="20" ry="20" width="135" height="47" />
    </ContentLoader>
  );
}

export default LoadingBlock;
