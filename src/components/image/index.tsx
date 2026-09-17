interface IImageProps {
  src: string;
}

export const Image: React.FC<IImageProps> = (prop) => {
  const { src } = prop;
  return (
    <div>
      <img src={src} />
    </div>
  );
};
