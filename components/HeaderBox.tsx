import React from 'react';

const HeaderBox = ({ type = 'title', title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {type === 'greeting' ? (
          <>
            {title}
            <span className="text-bankGradient">&nbsp;{user}</span>
          </>
        ) : (
          title
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
