import OverlayCard from "@/components/OverlayCard";
import Image from "next/image";

const ImageOverlayCard = ({ itemList }) => {
  return (
    <section className="sticky h-[100vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={itemList?.imageList}
        alt="Resort"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
};

export default ImageOverlayCard;
