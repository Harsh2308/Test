import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const SeoHead = ({ seo }) =>
{

  let title = seo.name
  let image = seo.image
  let description = seo.description
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="title" content={title} data-react-helmet="true" />
        <meta property="og:title" content={title ?? "Test"} />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta name="description" content={description} data-react-helmet="true" />
        <meta property="image" content={image} data-react-helmet="true" />
        <meta content="image/*" property="og:image:type" data-react-helmet="true" />
        <meta property="og:image:secure_url" content={image} data-react-helmet="true" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:url" content={seo?.link ? seo?.link : ""} />
      </Helmet>
    </>
  );
};

export default SeoHead;