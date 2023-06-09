type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `absolute p-5 z-30 flex h-[380px] w-[450px] flex-col items-center justify-center bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 whitespace-normal`

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;
