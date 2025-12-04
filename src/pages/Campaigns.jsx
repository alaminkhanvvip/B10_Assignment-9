import { useEffect, useState } from 'react';
import CampaignCard from '../components/CampaignCard';
import campaignsData from '../data/campaigns.json';
import AOS from 'aos';

const Campaigns = () => {
  const [campaigns] = useState(campaignsData);
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaignsData);
  const [selectedDivision, setSelectedDivision] = useState('All');

  const divisions = ['All', ...new Set(campaignsData.map(c => c.division))];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (selectedDivision === 'All') {
      setFilteredCampaigns(campaigns);
    } else {
      setFilteredCampaigns(campaigns.filter(c => c.division === selectedDivision));
    }
  }, [selectedDivision, campaigns]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Donation Campaigns</h1>
        <p className="text-lg">Choose a campaign to support vulnerable communities across Bangladesh</p>
      </div>
      
      {/* Division Filter */}
      <div className="flex justify-center mb-8">
        <div className="tabs tabs-boxed">
          {divisions.map(division => (
            <button
              key={division}
              className={`tab ${selectedDivision === division ? 'tab-active' : ''}`}
              onClick={() => setSelectedDivision(division)}
            >
              {division}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampaigns.map(campaign => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
      
      {filteredCampaigns.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No campaigns found for {selectedDivision} division.</p>
        </div>
      )}
    </div>
  );
};

export default Campaigns;