const ImgWithFallback = ({ src, fallback, alt = '', type = 'image/webp', ...props }) => (
  <picture>
    <source srcSet={src} type={type} />
    <img src={fallback} alt={alt} {...props} />
  </picture>
);

export default ImgWithFallback;
