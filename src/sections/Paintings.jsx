import PaintingCarousel from "@/components/ui/PaintingsCarousel";
import { useTranslation } from 'react-i18next';

export default function Paintings({ onPhotoClick }) {
  const { t } = useTranslation();

  return (
    <section className="section h-full bg-gray-100 flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl font-light mb-6">{t("gallery")}</h2>

      {/* Carousel */}
      <PaintingCarousel onPhotoClick={onPhotoClick} />
    </section>
  );
}
