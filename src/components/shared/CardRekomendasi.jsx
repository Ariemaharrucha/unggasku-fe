import { IoIosArrowForward } from "react-icons/io";

export const CardRekomendasi = ({
  title,
  description,
  date,
  image,
  detailLink,
}) => {
  return (
    <div className="flex flex-col group shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition bg-primary-950 dark:shadow-neutral-700/70 w-full">
      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
        <img
          className="w-full h-full size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
          src={image}
          alt="Card Image"
        />
      </div>
      <div className="p-4 md:p-5 flex flex-col h-full">
        <h3 className="text-lg font-bold text-primary-50">{title}</h3>
        <p className="mt-1 text-primary-50 flex-grow line-clamp-3">
          {description}
          <span className="text-secondary-50 italic font-thin mt-2">
            {date}
          </span>
        </p>
        <div className="flex justify-end items-center gap-2 mt-auto">
          <a href={detailLink} className="text-secondary-300">
            Detail
          </a>
          <IoIosArrowForward className="text-secondary-50" />
        </div>
      </div>
    </div>
  );
};