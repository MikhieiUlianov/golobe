import Choice from "@/components/choice/choice";
import FindTrip from "@/components/find-trip/find-trip";
import PlaceTrip from "@/components/place-trip/place-trip";
import Promo from "@/components/promo/promo";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <>
      <Promo />
      <FindTrip />
      <PlaceTrip />
      <Choice />
      <Reviews />
    </>
  );
}
