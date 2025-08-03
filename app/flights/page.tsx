import FallIntoExample from "@/components/fall-into-example/fall-into-example";
import FallIntoTravel from "@/components/fall-into-travel/fall-into-travel";
import FindTrip from "@/components/find-trip/find-trip";
import MainPromo from "@/components/main-promo/main-promo";

export default function FlightsPage() {
  return (
    <>
      <MainPromo />
      <FindTrip />
      <FallIntoTravel />
      <FallIntoExample />
    </>
  );
}
