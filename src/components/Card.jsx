function Card({ style, text }) {
  return (
    <div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm cursor-grab w-[12rem]"
      style={style}
    >
      {text}
    </div>
  );
}

export default Card;
