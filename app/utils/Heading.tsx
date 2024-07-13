import React, { FC } from "react";

interface HeadProps {
  title: string;
  description: string;
  keywords: string;
  iconHref: string;
}

const Heading: FC<HeadProps> = ({ title, description, keywords, iconHref }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href={iconHref} />
    </>
  );
};

export default Heading;
