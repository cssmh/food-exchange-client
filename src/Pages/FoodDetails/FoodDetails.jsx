import { useLoaderData } from "react-router-dom";
import BannerFood from "./BannerFood";
import AddRequest from "../AddRequest/AddRequest";

const FoodDetails = () => {
  const loadFoodData = useLoaderData();
  const {
    food_image,
    food_name,
    donator_name,
    food_quantity,
    pickup_location,
    expired_date,
    expired_time,
    additional_notes,
  } = loadFoodData;

  return (
    <div>
      <BannerFood></BannerFood>
      <div className="text-center mx-1 max-w-md border-2 py-2 my-5 lg:mx-auto">
        <h1 className="font-semibold text-xl lg:text-[22px] text-blue-800 mb-1">
          Donator Information
        </h1>
        <p className="text-cyan-600">Name: {donator_name}</p>
        <p className="pb-1">Pickup Location: {pickup_location}</p>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center justify-center my-6 lg:my-8 gap-4 lg:gap-7">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-7">
          <img
            src={food_image}
            className="mx-auto lg:mx-0 lg:ml-auto w-4/5 lg:w-[400px]"
            alt=""
          />
          <div className="space-y-1 lg:space-y-[6px] mx-6 lg:mx-0 text-center lg:text-left">
            <h1 className="text-2xl lg:text-4xl font-semibold">{food_name}</h1>
            <p>Quantity: {food_quantity} (no. of person to be served)</p>
            <p>
              Expire In: {expired_date} {expired_time}
            </p>
            <AddRequest getFood={loadFoodData}></AddRequest>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-4 lg:mx-auto mb-7">
        <div className="flex gap-1">
          <button className="bg-redFood px-3 py-2 text-white rounded-md mb-2">
            Description
          </button>
        </div>
        <p>{additional_notes}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
