import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  return (
    <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
      <figure>
        <img src={campaign.image} alt={campaign.title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{campaign.title}</h2>
        <p>{campaign.description}</p>
        <div className="badge badge-secondary">{campaign.division}</div>
        <div className="card-actions justify-end">
          <Link to={`/campaign/${campaign.id}`} className="btn btn-primary">Donate Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;