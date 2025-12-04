import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import campaignsData from "../data/campaigns.json";
import { TOAST_MESSAGES } from "../constants";
import { PageTitle } from "../hooks/useTitle";

const CampaignDetails = () => {
  const { id } = useParams();
  const campaign = campaignsData.find((c) => c.id === parseInt(id));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success(TOAST_MESSAGES.DONATION_SUCCESS);
    reset();
  };

  if (!campaign) {
    return (
      <div className="container mx-auto px-4 py-8">Campaign not found</div>
    );
  }

  return (
    <>
      <PageTitle
        title={campaign.title}
        description={`Donate winter clothing to ${campaign.title}. ${campaign.description}`}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h1 className="text-3xl font-bold mt-4 mb-2">{campaign.title}</h1>
            <p className="text-lg mb-4">{campaign.description}</p>
            <div className="bg-gray-100 rounded-lg p-4 mt-4 shadow">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  <span>
                    <strong>Division:</strong>{" "}
                    <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">
                      {campaign.division}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <span>
                    <strong>Status:</strong>{" "}
                    <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded">
                      {campaign.status}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📧</span>
                  <span>
                    <strong>Contact:</strong> {campaign.contactInfo}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">👥</span>
                  <span>
                    <strong>Impact:</strong> Helping families stay warm this
                    winter
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6 text-center">
              <h2 className="text-4xl font-bold text-blue-600 mb-2">
                <span className="text-5xl">❄️</span>
                <br />
                Make Your Donation
              </h2>
              <hr className="border-blue-600 my-4" />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Help bring warmth to families in need. Fill out the form below and
              our volunteers will collect your donation.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">
                  📦 Quantity of items{" "}
                  <span className="text-xs text-gray-500">(Be specific)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 2 winter jackets, 3 warm blankets, 5 pairs of socks"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("quantity", {
                    required: "Please specify the quantity of items",
                  })}
                />
                {errors.quantity && (
                  <span className="text-red-500 text-sm">
                    {errors.quantity.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  🧥 Primary item type
                </label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("itemType", {
                    required: "Please select the main item type",
                  })}
                >
                  <option value="">Choose primary item type</option>
                  <option value="blanket">🛏️ Blankets & Bedding</option>
                  <option value="jacket">🧥 Jackets & Coats</option>
                  <option value="sweater">👕 Sweaters & Hoodies</option>
                  <option value="scarf">🧣 Scarves & Accessories</option>
                  <option value="gloves">🧤 Gloves & Mittens</option>
                  <option value="socks">🧦 Socks & Undergarments</option>
                  <option value="mixed">📦 Mixed Items</option>
                </select>
                {errors.itemType && (
                  <span className="text-red-500 text-sm">
                    {errors.itemType.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  📍 Pickup location{" "}
                  <span className="text-xs text-gray-500">
                    (Include landmarks)
                  </span>
                </label>
                <textarea
                  placeholder="Full address with area name and landmarks\ne.g., House 12, Road 5, Dhanmondi, Dhaka\nNear Dhanmondi Lake, opposite to XYZ School"
                  className="w-full border border-gray-300 rounded px-3 py-2 h-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("pickupLocation", {
                    required: "Please provide your complete pickup address",
                  })}
                ></textarea>
                {errors.pickupLocation && (
                  <span className="text-red-500 text-sm">
                    {errors.pickupLocation.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  📝 Contact & Instructions{" "}
                  <span className="text-xs text-gray-500">(Optional)</span>
                </label>
                <textarea
                  placeholder="• Your phone number for coordination\n• Best time to collect (e.g., weekends, after 6 PM)\n• Special instructions (e.g., ring doorbell, call before coming)\n• Item condition notes"
                  className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("notes")}
                ></textarea>
              </div>

              <div className="flex items-start bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-blue-500 w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <div className="font-bold text-blue-700">
                    Collection Process
                  </div>
                  <div className="text-sm text-blue-700">
                    Our volunteers will contact you within 24-48 hours to
                    arrange pickup. Thank you for your generosity!
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  🤝 Submit Donation Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignDetails;
